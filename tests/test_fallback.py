from unittest.mock import MagicMock, patch

from backend.app import llm


def _client_returning(text):
    fake = MagicMock()
    fake.messages.create.return_value.content = [MagicMock(text=text)]
    return fake


def test_fallback_when_api_call_fails():
    fake = MagicMock()
    fake.messages.create.side_effect = TimeoutError("timed out")
    with patch.object(llm, "_client", return_value=fake):
        result = llm.safe_chat("How do I log in?")
    assert result == {"reply": llm.FALLBACK_REPLY, "fallback": True}


def test_fallback_when_response_has_no_content():
    fake = MagicMock()
    fake.messages.create.return_value.content = []
    with patch.object(llm, "_client", return_value=fake):
        assert llm.safe_chat("hi")["fallback"] is True


def test_fallback_on_invalid_output():
    for bad in ("", "   ", "x" * 5000):
        with patch.object(llm, "_client", return_value=_client_returning(bad)):
            result = llm.safe_chat("hi")
        assert result == {"reply": llm.FALLBACK_REPLY, "fallback": True}


def test_no_fallback_on_good_reply():
    with patch.object(llm, "_client", return_value=_client_returning("Open the Alerts tab.")):
        result = llm.safe_chat("Where are alerts?")
    assert result == {"reply": "Open the Alerts tab.", "fallback": False}


def test_bad_input_still_raises():
    try:
        llm.safe_chat("   ")
    except ValueError:
        return
    raise AssertionError("Expected ValueError for blank input")