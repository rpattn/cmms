"use client";

import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline, StyledEngineProvider } from '@mui/material';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import { themeCreator } from '@/theme';

const rtlCache = createCache({ key: 'mui-rtl', stylisPlugins: [stylisRTLPlugin] });

export default function AppThemeProvider({ children }: PropsWithChildren) {
  const [themeName, setThemeName] = useState<string>(() =>
    typeof window !== 'undefined' ? localStorage.getItem('appTheme') || 'PureLightTheme' : 'PureLightTheme'
  );
  const [dir, setDir] = useState<'ltr' | 'rtl'>(() =>
    typeof document !== 'undefined' ? (document.documentElement.getAttribute('dir') as 'ltr' | 'rtl') || 'ltr' : 'ltr'
  );

  useEffect(() => {
    localStorage.setItem('appTheme', themeName);
  }, [themeName]);

  useEffect(() => {
    if (dir === 'rtl') document.documentElement.setAttribute('dir', 'rtl');
    else document.documentElement.removeAttribute('dir');
  }, [dir]);

  const theme = useMemo(() => themeCreator(themeName as any, dir), [themeName, dir]);

  const providers = (
    <ThemeContext.Provider value={{ themeName, setThemeName, dir, setDir }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );

  return (
    <StyledEngineProvider injectFirst>
      {dir === 'rtl' ? <CacheProvider value={rtlCache}>{providers}</CacheProvider> : providers}
    </StyledEngineProvider>
  );
}

export const ThemeContext = (
  // minimal context to toggle theme and dir later if needed
  // matches rough shape of existing app's usage
  require('react') as typeof import('react')
).createContext<{ themeName: string; setThemeName: (n: string) => void; dir: 'ltr' | 'rtl'; setDir: (d: 'ltr' | 'rtl') => void }>({
  themeName: 'PureLightTheme',
  setThemeName: () => {},
  dir: 'ltr',
  setDir: () => {}
});
