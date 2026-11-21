import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { api } from '../api';
import Top from '../Top';
import { colors } from '../theme';
import AIButton from '../AiButton';

const options = ['Larger Text', 'High Contrast', 'Screen reader', 'Voice Navigation', 'Accessible Routes Only'];

export default function Accessibility({ go, session, setSession }) {
  const [on, setOn] = useState({});

  async function logout() {
    try {
      await api('/api/logout/', { method: 'POST', token: session && session.token });
    } catch (e) {}
    setSession(null);
    go('welcome');
  }

  return (
    <ScrollView>
      <Top title="Accessibility" bg={colors.navy} color="#cbe9f5" height={136} onBack={() => go('more')} />
      <AIButton top={140} />

      <View style={s.body}>
        {options.map((label) => (
          <View key={label} style={s.row}>
            <Text style={s.text}>{label}</Text>
            <Switch value={!!on[label]} onValueChange={(v) => setOn({ ...on, [label]: v })} />
          </View>
        ))}

        <Pressable style={s.logOut} onPress={logout}>
          <Text style={s.logOutText}>Log Out</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  body: { paddingHorizontal: 23, paddingTop: 40, paddingBottom: 40 },
  row: {
    backgroundColor: '#ffffff', height: 61, paddingHorizontal: 24, marginBottom: 22,
    borderWidth: 1, borderColor: 'rgba(3, 31, 56, 0.1)', borderRadius: 2,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  text: { fontSize: 22, color: colors.text },
  logOut: {
    alignSelf: 'center', marginTop: 40, width: 152, height: 46,
    backgroundColor: '#2c4262', borderWidth: 1, borderColor: '#031f38', borderRadius: 2,
    alignItems: 'center', justifyContent: 'center',
  },
  logOutText: { color: '#ffffff', fontSize: 24 },
});