import importlib
import logging
import os
from pathlib import Path

log = logging.getLogger(__name__)

PROMPT_DIR = Path(__file__).parent / "prompts"
PROMPT_VERSION = "chatbot_v1"
MODEL = "claude-sonnet-5-5"
MAX_MESSAGE_CHARS = 1000
MAX_REPLY_CHARS = 1500

FALLBACK_REPLY = (
    "Sorry, the assistant isn't available right now. You can check the Alerts "
    "screen for service updates or use Report a Problem to reach the app team."
)


def _client():
    anthropic = importlib.import_module("anthropic")
    # 10 s timeout and one retry, so a slow API can't hang the app
    return anthropic.Anthropic(
        api_key=os.environ["ANTHROPIC_API_KEY"], timeout=10.0, max_retries=1
    )


def load_prompt(version: str = PROMPT_VERSION) -> str:
    return (PROMPT_DIR / f"{version}.txt").read_text(encoding="utf-8")


def chat(user_message: str, history: list[dict] | None = None) -> str:
    """Answer a user's question about the app.

    history is an optional list of earlier turns, each shaped like
    {"role": "user" | "assistant", "content": "..."}.
    """
    user_message = (user_message or "").strip()
    if not user_message:
        raise ValueError("Message cannot be empty.")
    if len(user_message) > MAX_MESSAGE_CHARS:
        raise ValueError("Message is too long.")

    messages = list(history or []) + [{"role": "user", "content": user_message}]
    response = _client().messages.create(
        model=MODEL,
        max_tokens=400,
        system=load_prompt(),
        messages=messages,
    )
    return response.content[0].text.strip()


def safe_chat(user_message: str, history: list[dict] | None = None) -> dict:
    """Like chat(), but never raises because of the AI call.

    Returns {"reply": str, "fallback": bool}. Falls back to a fixed safe message
    when the call fails, times out, the key is missing, or the output is invalid
    (empty or too long). Bad *input* still raises ValueError so the endpoint can
    return a 400.
    """
    try:
        reply = chat(user_message, history)
    except ValueError:
        raise
    except Exception:
        log.exception("LLM call failed; using fallback reply")
        return {"reply": FALLBACK_REPLY, "fallback": True}
    if not isinstance(reply, str) or not reply.strip() or len(reply) > MAX_REPLY_CHARS:
        log.warning("LLM returned invalid output; using fallback reply")
        return {"reply": FALLBACK_REPLY, "fallback": True}
    return {"reply": reply, "fallback": False}