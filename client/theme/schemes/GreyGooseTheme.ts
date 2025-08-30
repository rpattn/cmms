import { createTheme } from '@mui/material';
import type { ThemeColors } from '../types';

const base: ThemeColors = {
  primary: '#2442AF',
  secondary: '#6E759F',
  success: '#57CA22',
  warning: '#FFA319',
  error: '#FF1943',
  info: '#33C2FF'
};

export function createGreyGooseTheme(dir: 'ltr' | 'rtl', overrides?: Partial<ThemeColors>) {
  const colors = { ...base, ...(overrides || {}) };
  return createTheme({
    direction: dir,
    palette: {
      mode: 'light',
      primary: { main: colors.primary },
      secondary: { main: colors.secondary },
      success: { main: colors.success },
      warning: { main: colors.warning },
      error: { main: colors.error },
      info: { main: colors.info }
    },
    shape: { borderRadius: 10 }
  });
}

