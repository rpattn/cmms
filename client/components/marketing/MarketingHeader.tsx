"use client";

import Link from 'next/link';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { brand } from '@/lib/brand';

export default function MarketingHeader() {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Typography variant="h6" color="inherit">{brand.name}</Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
            <Button component={Link as any} href="/pricing" color="inherit">Pricing</Button>
            <Button component={Link as any} href="/login" color="inherit">Login</Button>
            <Button component={Link as any} href="/account/register" variant="contained">Register</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

