import { useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { api } from '../api';
import BottomNav from '../BottomNav';
import { colors } from '../theme';

const GREETING = { id: 1, from: 'ai', text: 'Hello. This is TransitHub NY AI assistant. How can I help you?' };
const FALLBACK = "Sorry, the assistant isn't available right now. Please try again in a moment.";

export default function TransitAI({ go, session }) {
  const [messages, setMessages] = useState([GREETING]);
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef(null);

  async function send() {
    const text = draft.trim();
    if (!text || busy) return;
    // Earlier turns (without the greeting) go to the backend as history.
    const history = messages
      .filter((m) => m.id !== GREETING.id)
      .map((m) => ({ role: m.from === 'ai' ? 'assistant' : 'user', content: m.text }));
    setMessages((m) => [...m, { id: Date.now(), from: 'user', text }]);
    setDraft('');
    setBusy(true);
    let reply = FALLBACK;
    try {
      const out = await api('/api/chatbot/', {
        method: 'POST',
        body: { message: text, history },
        token: session && session.token,
      });
      if (out && out.reply) reply = out.reply;
    } catch (e) {
      // keep the friendly fallback message
    }
    setMessages((m) => [...m, { id: Date.now() + 1, from: 'ai', text: reply }]);
    setBusy(false);
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#cbeaf3' }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={s.header}>
          <Pressable onPress={() => go('home')} accessibilityRole="button" accessibilityLabel="End chat and go home">
            <Text style={s.endChat}>{'\u2190'}  End Chat</Text>
          </Pressable>
        </View>

        <ScrollView
          ref={scrollRef}
          style={{ flex: 1 }}
          contentContainerStyle={s.chat}
          onContentSizeChange={() => scrollRef.current && scrollRef.current.scrollToEnd({ animated: true })}
        >
          {messages.map((m) =>
            m.from === 'ai' ? (
              <View key={m.id} style={s.aiRow}>
                <View style={s.avatar}>
                  <Text style={{ fontSize: 34 }}>{'\u{1F916}'}</Text>
                </View>
                <View style={[s.bubble, s.aiBubble]}>
                  <Text style={s.bubbleText}>{m.text}</Text>
                </View>
              </View>
            ) : (
              <View key={m.id} style={s.userRow}>
                <View style={[s.bubble, s.userBubble]}>
                  <Text style={s.bubbleText}>{m.text}</Text>
                </View>
              </View>
            )
          )}
        </ScrollView>

        <View style={s.inputRow}>
          <TextInput
            style={s.input}
            value={draft}
            onChangeText={setDraft}
            placeholder={busy ? 'Thinking...' : 'Type your message...'}
            placeholderTextColor="#4f6267"
            maxLength={1000}
            editable={!busy}
            returnKeyType="send"
            onSubmitEditing={send}
          />
          <Pressable style={s.send} onPress={send} accessibilityRole="button" accessibilityLabel="Send message">
            <Text style={s.sendText}>Send</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>

      <BottomNav active="home" go={go} />
    </View>
  );
}

const s = StyleSheet.create({
  header: { paddingTop: 40, paddingHorizontal: 15, paddingBottom: 12 },
  endChat: { color: '#2c4262', fontSize: 24, fontWeight: '700' },
  chat: { paddingHorizontal: 12, paddingVertical: 16 },
  aiRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 24 },
  userRow: { flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 24 },
  avatar: {
    width: 70, height: 70, borderRadius: 35, backgroundColor: '#ffffff',
    alignItems: 'center', justifyContent: 'center', marginRight: 8,
  },
  bubble: { borderRadius: 30, paddingHorizontal: 20, paddingVertical: 16, maxWidth: '75%' },
  aiBubble: { backgroundColor: '#ffffff', flexShrink: 1 },
  userBubble: { backgroundColor: '#d3f2ca' },
  bubbleText: { fontSize: 20, color: '#000205' },
  inputRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10 },
  input: {
    flex: 1, height: 44, borderRadius: 30, backgroundColor: '#ffffff',
    borderWidth: 1, borderColor: 'rgba(3, 31, 56, 0.1)', paddingHorizontal: 16, fontSize: 16, color: colors.text,
  },
  send: {
    marginLeft: 8, height: 44, paddingHorizontal: 18, borderRadius: 30,
    backgroundColor: '#2c4262', alignItems: 'center', justifyContent: 'center',
  },
  sendText: { color: '#ffffff', fontSize: 16, fontWeight: '700' },
});