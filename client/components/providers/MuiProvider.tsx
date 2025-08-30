"use client";

import { PropsWithChildren } from 'react';
import { ThemeProvider, createTheme, CssBaseline, StyledEngineProvider } from '@mui/material';

const theme = createTheme({});

export default function MuiProvider({ children }: PropsWithChildren) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

