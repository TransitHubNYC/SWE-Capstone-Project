import { Pressable, StyleSheet, Text, View } from 'react-native';
import BottomNav from '../BottomNav';
import { colors } from '../theme';
import AIButton from '../AiButton';

// Placeholder values from the Figma design; swap for real data from your API later.
const footprint = { amount: 2.8, unit: 'year', changePercent: -12 };

export default function CarbonFootprint({ go }) {
  const lower = footprint.changePercent < 0;
  const change = Math.abs(footprint.changePercent);

  return (
    <View style={{ flex: 1 }}>
      <View style={s.header}>
        <Pressable onPress={() => go('more')} accessibilityRole="button" accessibilityLabel="Back to settings">
          <Text style={s.back}>{'\u2190'} Carbon Footprint</Text>
        </Pressable>
      </View>

      <View style={s.body}>
        <View style={s.card}>
          <Text style={s.cardTitle}>Your Carbon Footprint</Text>

          <Text style={s.amountRow}>
            <Text style={s.amount}>{footprint.amount} </Text>
            <Text style={s.unit}>/ {footprint.unit}</Text>
          </Text>

          <Text style={s.change}>
            {lower ? '\u2193' : '\u2191'} {change}% {lower ? 'lower' : 'higher'} than last year
          </Text>
        </View>
      </View>

      <AIButton top={90} />
      <BottomNav active="more" go={go} />
    </View>
  );
}

const s = StyleSheet.create({
  header: { backgroundColor: colors.navy, paddingTop: 20, paddingHorizontal: 22, paddingBottom: 24 },
  back: { color: colors.sky, fontSize: 24, fontWeight: '700' },
  body: { flex: 1, backgroundColor: colors.sky, paddingHorizontal: 18, justifyContent: 'center' },
  card: {
    minHeight: 231,
    borderRadius: 30,
    backgroundColor: '#2c4262',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  cardTitle: { color: '#ffffff', fontSize: 24, fontWeight: '800', textAlign: 'center', marginBottom: 14 },
  amountRow: { color: '#ffffff', textAlign: 'center', marginBottom: 14 },
  amount: { fontSize: 40, fontWeight: '800' },
  unit: { fontSize: 24, fontWeight: '800' },
  change: { color: '#ffffff', fontSize: 20, fontWeight: '800', textAlign: 'center' },
});