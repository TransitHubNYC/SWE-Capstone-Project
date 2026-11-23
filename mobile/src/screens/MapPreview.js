import { Pressable, StyleSheet, Text, View } from 'react-native';
import LeafletMap from '../LeafletMap';
import { colors } from '../theme';

export default function MapPreview({ go }) {
  return (
    <View style={s.screen}>
      <View style={s.header}>
        <Pressable onPress={() => go('welcome')} accessibilityRole="button" accessibilityLabel="Back to welcome">
          <Text style={s.back}>{'\u2190'} Back</Text>
        </Pressable>
        <Text style={s.title}>NYC Transit Map</Text>
        <Text style={s.description}>Pan and zoom to explore New York City. Transit routes will appear when data is connected.</Text>
      </View>
      <View style={s.map}>
        <LeafletMap stops={[]} routes={[]} style={{ flex: 1, alignSelf: 'stretch' }} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.sky },
  header: { backgroundColor: colors.navy, paddingTop: 24, paddingHorizontal: 20, paddingBottom: 16 },
  back: { color: colors.white, fontSize: 16, marginBottom: 14 },
  title: { color: colors.white, fontSize: 24, fontWeight: '700' },
  description: { color: colors.white, fontSize: 15, marginTop: 6 },
  map: { flex: 1 },
});
