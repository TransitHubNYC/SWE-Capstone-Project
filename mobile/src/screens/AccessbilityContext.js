import React, { createContext, useContext, useState } from 'react';

const AccessibilityContext = createContext(null);

export function AccessibilityProvider({ children }) {
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  return (
    <AccessibilityContext.Provider
      value={{
        largeText,
        setLargeText,
        highContrast,
        setHighContrast,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}

