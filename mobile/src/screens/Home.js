import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { api } from '../api';
import BottomNav from '../BottomNav';
import Weather from '../Weather';
import { colors } from '../theme';
import AIButton from '../AIButton';

const tiles = [
  { label: 'Plan a Trip', bg: '#d0e0f8', to: 'plan' },
  { label: 'Nearby Stops', bg: '#d3f2ca', to: 'stops' },
  { label: 'Real-Time Updates', bg: '#f5e0f2', to: 'updates', small: true },
  { label: 'Buy Tickets', bg: '#ece0f3', to: 'tickets' },
];

export default function Home({ go, session, setSession }) {
  const [soon, setSoon] = useState('');

  async function logout() {
    try {
      await api('/api/logout/', { method: 'POST', token: session && session.token });
    } catch (e) {}
    setSession(null);
    go('welcome');
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={s.header}>
        <View style={s.topRow}>
          <Text style={s.greeting}>Hi, {session && session.user.display_name}</Text>
          <Pressable onPress={() => go('more')} style={s.gear} accessibilityRole="button" accessibilityLabel="Settings">
            <Text style={{ fontSize: 34 }}>{'\u2699\uFE0F'}</Text>
          </Pressable>
        </View>
        <TextInput style={s.search} placeholder="Search for a route, stop, or location..." placeholderTextColor="#4f6267" />
      </View>

      <View style={s.map}>
        <Weather />
        <Text style={s.mapText}>MAP</Text>
      </View>

      {soon ? <Text style={s.soon}>{soon}</Text> : null}
      <View style={s.grid}>
        {tiles.map((t) => (
          <Pressable
            key={t.label}
            style={[s.tile, { backgroundColor: t.bg }]}
            onPress={() => (t.to ? go(t.to) : setSoon(t.label + ' is coming in the next sprint.'))}
          >
            <Text style={[s.tileText, t.small && { fontSize: 20 }]}>{t.label}</Text>
          </Pressable>
        ))}
      </View>

      <AIButton top={150} />
      <BottomNav active="home" go={go} />
    </View>
  );
}

const s = StyleSheet.create({
  header: {
    backgroundColor: '#2c4262', paddingTop: 20, paddingHorizontal: 22, paddingBottom: 16,
    borderWidth: 1, borderColor: 'rgba(3, 31, 56, 0.1)',
  },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  greeting: { color: colors.white, fontSize: 18 },
  gear: { width: 46, height: 46, alignItems: 'center', justifyContent: 'center' },
  search: {
    height: 42, borderRadius: 30, borderWidth: 1, borderColor: 'rgba(3, 31, 56, 0.1)',
    backgroundColor: '#cbeaf3', paddingHorizontal: 16, fontSize: 16, color: colors.text,
  },
  map: { flex: 1, backgroundColor: '#cbeaf3', alignItems: 'center', justifyContent: 'center' },
  mapText: { fontSize: 96, color: '#000000' },
  soon: { textAlign: 'center', color: colors.text, backgroundColor: '#ffffff', padding: 8 },
  grid: {
    flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#ffffff', padding: 8,
    borderWidth: 1, borderColor: 'rgba(44, 66, 98, 0.1)',
  },
  tile: {
    width: '48%', margin: '1%', height: 102, borderRadius: 10, borderWidth: 1, borderColor: 'rgba(3, 31, 56, 0.1)',
    alignItems: 'center', justifyContent: 'center',
  },
  tileText: { fontSize: 24, fontWeight: '700', color: '#2c4262', textAlign: 'center' },
});