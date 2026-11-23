import pytest  # pyright: ignore[reportMissingImports]

from backend.app import llm


@pytest.fixture(autouse=True)
def _block_real_api(monkeypatch):
    def _blocked(*args, **kwargs):
        raise AssertionError("Unit tests must mock the AI call, never use the real API.")
    monkeypatch.setattr(llm, "_client", _blocked)