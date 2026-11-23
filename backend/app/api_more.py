from rest_framework.decorators import api_view, permission_classes  # pyright: ignore[reportMissingImports]
from rest_framework.permissions import IsAuthenticated  # pyright: ignore[reportMissingImports]
from rest_framework.response import Response  # pyright: ignore[reportMissingImports]
from . import llm

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def chatbot(request):
    """POST /api/chatbot/  {message, history}  - ask the assistant how the app works."""
    raw = request.data.get("history")
    raw = raw if isinstance(raw, list) else []
    history = [{"role": m["role"], "content": m["content"]} for m in raw
               if isinstance(m, dict) and m.get("role") in ("user", "assistant")
               and isinstance(m.get("content"), str)][-10:]
    while history and history[0]["role"] == "assistant":
        history.pop(0)  # the conversation must start with a user message
    try:
        result = llm.safe_chat(request.data.get("message") or "", history)
    except ValueError as e:
        return Response({"error": str(e)}, status=400)
    return Response(result)