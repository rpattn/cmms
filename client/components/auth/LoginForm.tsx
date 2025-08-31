"use client";

import { useState } from 'react';
import { Box, Button, CircularProgress, IconButton, InputAdornment, Link, TextField, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NextLink from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = (searchParams && searchParams.get('next')) || '/app/work-orders';
  const [email, setEmail] = useState<string>(searchParams?.get('email') || '');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch('/api/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data?.error || 'Login failed');
      return;
    }
    router.replace(next);
  };

  return (
    <form noValidate onSubmit={onSubmit}>
      <TextField
        fullWidth
        margin="normal"
        autoFocus
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword((s) => !s)}>
                <VisibilityIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <Box display={{ xs: 'block', md: 'flex' }} justifyContent="space-between" alignItems="center">
        <NextLink href="/account/recover-password" passHref>
          Forgot password?
        </NextLink>
      </Box>
      {error && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
      <Button sx={{ mt: 3 }} variant="contained" fullWidth size="large" type="submit" disabled={loading} startIcon={loading ? <CircularProgress size="1rem" /> : null}>
        Sign in
      </Button>
    </form>
  );
}

