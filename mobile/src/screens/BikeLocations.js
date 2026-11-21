import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import BottomNav from '../BottomNav';
import Weather from '../Weather';
import { colors } from '../theme';
import AIButton from '../AiButton';

export default function BikeLocations({ go }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={s.header}>
        <Pressable onPress={() => go('home')} accessibilityRole="button" accessibilityLabel="Back to home">
          <Text style={s.back}>{'\u2190'} Bike Locations</Text>
        </Pressable>

        <View style={s.route}>
          <Text style={s.routeText}>
            <Text style={s.routeLabel}>From</Text>: Current Location
          </Text>
          <Text style={s.routeText}>
            <Text style={s.routeLabel}>To</Text>: Closest Bicycle Location
          </Text>
        </View>

        <TextInput
          style={s.search}
          placeholder="Search for a route, stop, or location..."
          placeholderTextColor="#5f7388"
        />
      </View>

      <View style={s.map}>
        <Weather />
        <Text style={s.mapText}>Map with bike locations pinned</Text>
      </View>

      <Pressable style={s.nearbyStops} onPress={() => go('stops')}>
        <Text style={s.nearbyStopsText}>Nearby Stops</Text>
      </Pressable>

      <AIButton top={205} />
      <BottomNav active="map" go={go} />
    </View>
  );
}

const s = StyleSheet.create({
  header: { backgroundColor: colors.navy, paddingTop: 20, paddingHorizontal: 22, paddingBottom: 16 },
  back: { color: colors.sky, fontSize: 24, fontWeight: '700', marginBottom: 12 },
  route: { marginBottom: 14 },
  routeText: { color: colors.sky, fontSize: 20 },
  routeLabel: { fontWeight: '800' },
  search: {
    height: 42, borderRadius: 21, borderWidth: 1, borderColor: '#0b1a2e',
    backgroundColor: colors.sky, paddingHorizontal: 14, fontSize: 16, color: colors.text,
  },
  map: { flex: 1, backgroundColor: colors.sky, alignItems: 'center', justifyContent: 'center' },
  mapText: { fontSize: 24, color: '#000000', textAlign: 'center', paddingHorizontal: 24 },
  nearbyStops: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3f2ca',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(3, 31, 56, 0.1)',
  },
  nearbyStopsText: { fontSize: 24, fontWeight: '700', color: '#2c4262' },
});