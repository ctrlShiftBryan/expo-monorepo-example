import { useColorScheme as useNativeColorScheme } from 'react-native';
import * as React from 'react';

export function useColorScheme() {
  const nativeColorScheme = useNativeColorScheme();
  const [colorScheme, setColorScheme] = React.useState<'light' | 'dark'>(
    nativeColorScheme ?? 'light'
  );

  React.useEffect(() => {
    setColorScheme(nativeColorScheme ?? 'light');
  }, [nativeColorScheme]);

  return {
    colorScheme,
    isDarkColorScheme: colorScheme === 'dark',
  };
} 
