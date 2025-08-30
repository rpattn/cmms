import React, { useEffect, useState } from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { themeCreator } from './base';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import { useTranslation } from 'react-i18next';

const cacheRtl = createCache({
  key: 'bloom-ui',
  prepend: true,
  // @ts-ignore
  stylisPlugins: [stylisRTLPlugin]
});

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

const ThemeProviderWrapper: React.FC = (props) => {
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const { i18n } = useTranslation();
  const rtl = i18n.dir() === 'rtl';
  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };

  useEffect(() => {
    if (rtl) document.documentElement.setAttribute('dir', 'rtl');
    else document.documentElement.removeAttribute('dir');
  }, [rtl]);

  const providers = (
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
  return (
    <StyledEngineProvider injectFirst>
      {rtl ? (
        <CacheProvider value={cacheRtl}>{providers}</CacheProvider>
      ) : (
        providers
      )}
    </StyledEngineProvider>
  );
};

export default ThemeProviderWrapper;
