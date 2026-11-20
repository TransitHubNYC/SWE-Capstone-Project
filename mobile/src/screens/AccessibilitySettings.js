import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Switch,
  ScrollView,
} from 'react-native';
import { colors } from '../theme';

const AccessibilitySettings = ({ go }) => {
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [voiceNavigation, setVoiceNavigation] = useState(false);
  const [accessibleRoutes, setAccessibleRoutes] = useState(false);

  const background = highContrast ? '#000000' : colors.sky;
  const card = highContrast ? '#222222' : colors.white;
  const textColor = highContrast ? '#ffffff' : colors.navy;
  const fontSize = largeText ? 28 : 22;

  const Setting = ({ title, value, onChange, description }) => (
    <View style={[styles.setting, { backgroundColor: card }]}>
      <View style={styles.settingText}>
        <Text style={[styles.settingTitle, { color: textColor, fontSize }]}>
          {title}
        </Text>
        <Text style={[styles.description, { color: textColor }]}>
          {description}
        </Text>
      </View>
      <Switch
        value={value}
        onValueChange={onChange}
        accessibilityLabel={title}
      />
    </View>
  );

  return (
    <ScrollView
      style={[styles.screen, { backgroundColor: background }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Pressable
          onPress={() => go?.('more')}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Text style={styles.back}>← Accessibility</Text>
        </Pressable>
      </View>

      <Text style={[styles.heading, { color: textColor }]}>
        Accessibility Settings
      </Text>

      <Setting
        title="Larger Text"
        description="Make text easier to read"
        value={largeText}
        onChange={setLargeText}
      />

      <Setting
        title="High Contrast"
        description="Improve color contrast"
        value={highContrast}
        onChange={setHighContrast}
      />

      <Setting
        title="Screen Reader"
        description="Enable screen-reader-friendly controls"
        value={screenReader}
        onChange={setScreenReader}
      />

      <Setting
        title="Voice Navigation"
        description="Voice navigation support"
        value={voiceNavigation}
        onChange={setVoiceNavigation}
      />

      <Setting
        title="Accessible Routes Only"
        description="Prefer accessible transit routes"
        value={accessibleRoutes}
        onChange={setAccessibleRoutes}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 18,
    paddingTop: 55,
    paddingBottom: 35,
  },
  header: {
    backgroundColor: colors.navy,
    padding: 18,
    borderRadius: 10,
  },
  back: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 24,
  },
  setting: {
    minHeight: 85,
    borderRadius: 10,
    marginBottom: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#9aafc0',
  },
  settingText: {
    flex: 1,
    paddingRight: 10,
  },
  settingTitle: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 13,
    marginTop: 5,
  },
});

export default AccessibilitySettings;
