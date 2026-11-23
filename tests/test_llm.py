from unittest import TestCase
from unittest.mock import MagicMock, patch

from backend.app import llm


def _fake_client(reply="Tap the More tab."):
    fake = MagicMock()
    fake.messages.create.return_value.content = [MagicMock(text=f"  {reply}  ")]
    return fake


def test_prompt_file_loads():
    assert "TransitHubNYC" in llm.load_prompt()


def test_chat_returns_reply_and_sends_system_prompt():
    fake = _fake_client()
    with patch.object(llm, "_client", return_value=fake):
        result = llm.chat("Where is the weather?")

    assert result == "Tap the More tab."
    kwargs = fake.messages.create.call_args.kwargs
    assert kwargs["system"] == llm.load_prompt()
    assert kwargs["messages"][-1] == {"role": "user", "content": "Where is the weather?"}


def test_chat_includes_history():
    fake = _fake_client()
    history = [
        {"role": "user", "content": "Hi"},
        {"role": "assistant", "content": "Hello! How can I help?"},
    ]
    with patch.object(llm, "_client", return_value=fake):
        llm.chat("How do I log in?", history=history)

    sent = fake.messages.create.call_args.kwargs["messages"]
    assert len(sent) == 3
    assert sent[0]["content"] == "Hi"


def test_chat_rejects_bad_input():
    for bad in ("", "   ", "x" * 5000):
        with TestCase().assertRaises(ValueError):
            llm.chat(bad)