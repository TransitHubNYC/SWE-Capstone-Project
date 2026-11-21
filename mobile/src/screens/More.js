import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { api } from '../api';
import BottomNav from '../BottomNav';
import Top from '../Top';
import { colors } from '../theme';
import AIButton from '../AIButton';

export default function More({ go, session, setSession }) {
  const [soon, setSoon] = useState('');
  const rows = [
    ['Bike Locations', null],
    ['Weather', 'weather'],
    ['Carbon Footprint', null],
    ['Emergency Contacts', 'emergency'],
    ['Tutorial & Guide', null],
    ['Trip History', 'history'],
    ['Accessibility', 'accessibility'],
  ];
  if (session && session.user.role === 'admin') rows.push(['Admin Dashboard', 'admin']);

  async function logout() {
    try {
      await api('/api/logout/', { method: 'POST', token: session && session.token });
    } catch (e) {}
    setSession(null);
    go('welcome');
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#cbeaf3' }}>
      <ScrollView>
        <Top title="More" bg="#2c4262" color="#cbeaf3" height={134} onBack={() => go('home')} />
        <View style={s.list}>
          {session ? <Text style={s.who}>Signed in as {session.user.display_name}</Text> : null}
          {soon ? <Text style={s.soon}>{soon}</Text> : null}
          {rows.map(([label, to]) => (
            <Pressable
              key={label}
              style={s.row}
              onPress={() => (to ? go(to) : setSoon(label + ' is coming in a later sprint.'))}
            >
              <Text style={s.text}>{label}</Text>
            </Pressable>
          ))}
          <Pressable style={[s.row, s.logout]} onPress={logout}>
            <Text style={[s.text, { color: '#ffffff' }]}>Log out</Text>
          </Pressable>
        </View>
      </ScrollView>
      <AIButton top={140} />
      <BottomNav active="more" go={go} />
    </View>
  );
}

const s = StyleSheet.create({
  list: { paddingHorizontal: 23, paddingTop: 40, paddingBottom: 24 },
  row: {
    backgroundColor: '#ffffff', height: 61, justifyContent: 'center', paddingHorizontal: 24, marginBottom: 22,
    borderWidth: 1, borderColor: 'rgba(3, 31, 56, 0.1)', borderRadius: 2,
  },
  logout: { backgroundColor: '#2c4262', borderColor: '#031f38', marginTop: 8 },
  text: { fontSize: 24, color: '#2c4262' },
  who: { textAlign: 'center', fontSize: 16, color: colors.text, marginBottom: 18 },
  soon: { textAlign: 'center', color: colors.text, backgroundColor: '#faf4c0', padding: 8, marginBottom: 20 },
});