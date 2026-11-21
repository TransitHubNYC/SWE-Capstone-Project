import { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { api } from '../api';
import BottomNav from '../BottomNav';
import { colors } from '../theme';

const options = [
  { key: 'largerText', label: 'Larger Text' },
  { key: 'highContrast', label: 'High Contrast' },
  { key: 'screenReader', label: 'Screen reader' },
  { key: 'voiceNavigation', label: 'Voice Navigation' },
  { key: 'accessibleRoutes', label: 'Accessible Routes Only' },
];

export default function Accessibility({ go, session, setSession }) {
  const [prefs, setPrefs] = useState({
    largerText: false,
    highContrast: false,
    screenReader: false,
    voiceNavigation: false,
    accessibleRoutes: false,
  });

  function toggle(key) {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  }

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
        <Pressable onPress={() => go('more')} accessibilityRole="button" accessibilityLabel="Back to settings">
          <Text style={s.back}>{'\u2190'} Settings</Text>
        </Pressable>
      </View>

      <View style={s.body}>
        {options.map((o) => (
          <View key={o.key} style={s.row}>
            <Text style={s.rowText}>{o.label}</Text>
            <Switch
              value={prefs[o.key]}
              onValueChange={() => toggle(o.key)}
              trackColor={{ false: '#b8c4d4', true: colors.navy }}
              thumbColor="#ffffff"
              accessibilityLabel={o.label}
            />
          </View>
        ))}

        <Pressable style={s.logOut} onPress={logout}>
          <Text style={s.logOutText}>Log Out</Text>
        </Pressable>
      </View>

      <BottomNav active="more" go={go} />
    </View>
  );
}

const s = StyleSheet.create({
  header: { backgroundColor: colors.navy, paddingTop: 20, paddingHorizontal: 22, paddingBottom: 24 },
  back: { color: '#d0e0f8', fontSize: 24, fontWeight: '700' },
  body: { flex: 1, backgroundColor: colors.sky, paddingHorizontal: 23, paddingTop: 24 },
  row: {
    minHeight: 61,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(3, 31, 56, 0.1)',
    borderRadius: 2,
    paddingHorizontal: 24,
    marginBottom: 22,
  },
  rowText: { fontSize: 20, color: '#2c4262', flexShrink: 1, paddingRight: 12 },
  logOut: {
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 24,
    width: 152,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c4262',
    borderWidth: 1,
    borderColor: '#031f38',
    borderRadius: 2,
  },
  logOutText: { color: '#ffffff', fontSize: 20 },
});