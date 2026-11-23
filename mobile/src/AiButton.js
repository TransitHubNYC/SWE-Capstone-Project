import { Pressable, StyleSheet, Text } from 'react-native';

// Floating AI assistant button from the Figma designs (top right, under the header).
// When it's ready, pass onPress={() => go('ai')} from each screen, or set the default below.
export default function AIButton({ top = 140, onPress = () => {} }) {
  return (
    <Pressable
      style={[s.button, { top }]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="AI assistant"
    >
      <Text style={s.icon}>{'\u{1F916}'}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 16,
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(3, 31, 56, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    elevation: 4,
  },
  icon: { fontSize: 38 },
});