"use client";

import { Card, Container, Typography, Box, Link } from '@mui/material';
import LoginForm from '@/components/auth/LoginForm';
import NextLink from 'next/link';

export default function AccountLoginPage() {
  return (
    <Container maxWidth="sm" sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', py: 6 }}>
      <Card sx={{ p: 4, my: 4, width: '100%' }}>
        <Box textAlign="center" sx={{ mb: 3 }}>
          <Typography variant="h2" sx={{ mb: 1 }}>Login</Typography>
          <Typography variant="h4" color="text.secondary" fontWeight="normal">Welcome back</Typography>
        </Box>
        <LoginForm />
        <Box my={4} textAlign="center">
          <Typography component="span" variant="subtitle2" color="text.primary" fontWeight="bold">No account yet?</Typography>{' '}
          <NextLink href="/account/register" passHref>
            <b>Sign up here</b>
          </NextLink>
        </Box>
      </Card>
    </Container>
  );
}

