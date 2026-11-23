"""Evaluation suite for the TransitHubNYC chatbot.

Run everything with ONE command from the project root:
    python -m evals.run_evals

Exit code 0 = every check met its threshold, 1 = at least one did not.
This calls the REAL Claude API, so it needs ANTHROPIC_API_KEY. Unit tests never do.
"""
import json
import os
import re
import sys
from pathlib import Path

from backend.app import llm

GOLDEN_PATH = Path(__file__).parent / "golden_set.json"

# Pass thresholds (fraction of checks that must pass)
THRESHOLDS = {"golden": 0.85, "hallucination": 0.90, "consistency": 0.85}

# Consistency: re-ask these questions several times; each run must pass its check
CONSISTENCY_IDS = ["alerts-1", "trips-1", "report-1", "weather-1", "account-1"]
CONSISTENCY_RUNS = 3


def check_reply(case, reply):
    low = reply.lower()
    expect = case.get("expect_any", [])
    if expect and not any(k.lower() in low for k in expect):
        return False
    if any(k.lower() in low for k in case.get("must_not_include", [])):
        return False
    if any(re.search(p, reply, re.IGNORECASE) for p in case.get("must_not_match", [])):
        return False
    return True


def run_case(case):
    out = llm.safe_chat(case["input"], case.get("history"))
    if out["fallback"]:  # a fallback is never a passing answer in the evals
        return False, out["reply"]
    return check_reply(case, out["reply"]), out["reply"]


def rate(flags):
    flags = list(flags)
    return sum(flags) / len(flags) if flags else 0.0


def main():
    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("ANTHROPIC_API_KEY is not set; the evals call the real API.")
        return 2

    print(f"Model under test: {llm.MODEL} | prompt: {llm.PROMPT_VERSION}\n")
    cases = json.loads(GOLDEN_PATH.read_text(encoding="utf-8"))
    by_id = {c["id"]: c for c in cases}

    results = {}
    for case in cases:
        ok, reply = run_case(case)
        results[case["id"]] = ok
        print(f"{'PASS' if ok else 'FAIL'}  {case['id']}")
        if not ok:
            print(f"      reply: {reply[:200]!r}")

    consistency = [run_case(by_id[cid])[0]
                   for cid in CONSISTENCY_IDS for _ in range(CONSISTENCY_RUNS)]

    scores = {
        "golden": rate(results.values()),
        "hallucination": rate(results[c["id"]] for c in cases if c["category"] == "hallucination"),
        "consistency": rate(consistency),
    }

    failed = False
    print("\nResults")
    for name, score in scores.items():
        ok = score >= THRESHOLDS[name]
        failed |= not ok
        print(f"  {name:<14} {score:.0%} (needs {THRESHOLDS[name]:.0%})  {'OK' if ok else 'BELOW THRESHOLD'}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())