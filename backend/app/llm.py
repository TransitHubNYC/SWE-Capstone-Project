import os
import importlib
from pathlib import Path

PROMPT_DIR = Path(__file__).parent / "prompts"
PROMPT_VERSION = "chatbot_v1"
MODEL = "claude-sonnet-5-5"
MAX_MESSAGE_CHARS = 1000


def _client():
    anthropic = importlib.import_module("anthropic")
    return anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])


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