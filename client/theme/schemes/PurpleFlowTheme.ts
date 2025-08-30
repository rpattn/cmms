import { createTheme } from '@mui/material';
import type { ThemeColors } from '../types';

const base: ThemeColors = {
  primary: '#9b52e1',
  secondary: '#000000',
  success: '#57CA22',
  warning: '#FFA319',
  error: '#FF1943',
  info: '#33C2FF'
};

export function createPurpleFlowTheme(dir: 'ltr' | 'rtl', overrides?: Partial<ThemeColors>) {
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

