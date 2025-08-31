"use client";

import { useState } from 'react';
import { Autocomplete, Box, Button, Checkbox, CircularProgress, FormControlLabel, FormHelperText, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
// Avoid Grid for wider compatibility; use simple flex layout
import VisibilityIcon from '@mui/icons-material/Visibility';
import countries from '@/lib/countries';

type Country = { code: string; label: string; phone: string };

export default function RegisterForm({ presetEmail, subscriptionPlanId }: { presetEmail?: string; subscriptionPlanId?: string }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(presetEmail || '');
  const [country, setCountry] = useState<Country | null>(null);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [employeesCount, setEmployeesCount] = useState<number>(5);
  const [terms, setTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!email || !firstName || !lastName || !password || !companyName || !terms) {
      setError('Please complete all required fields and accept Terms.');
      return;
    }
    setLoading(true);
    const payload: any = {
      email,
      firstName,
      lastName,
      companyName,
      employeesCount,
      password,
      terms: true,
      language: (typeof navigator !== 'undefined' ? navigator.language : 'en').toUpperCase(),
      subscriptionPlanId,
      phone: (country ? `+${country.phone}` : '') + phone
    };
    const res = await fetch('/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data = await res.json().catch(() => ({}));
    setLoading(false);
    if (!res.ok) {
      setError(data?.message || data?.error || 'Registration failed');
      return;
    }
    const msg: string | undefined = data?.message;
    if (typeof msg === 'string' && msg.startsWith('Successful')) {
      setSuccess('Please check your email to verify your account.');
    } else {
      // Cookie is set by API route; user is logged in already. We can show success.
      setSuccess('Account created. Redirecting...');
      setTimeout(() => {
        if (typeof window !== 'undefined') window.location.href = '/app/work-orders';
      }, 800);
    }
  };

  return (
    <form noValidate onSubmit={onSubmit}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 1 }}>
        <TextField fullWidth margin="normal" label="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <TextField fullWidth margin="normal" label="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </Box>
      <TextField fullWidth margin="normal" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!!presetEmail} />
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Autocomplete
          sx={{ width: 275 }}
          options={countries as any}
          autoHighlight
          value={country}
          onChange={(_e, v) => setCountry(v)}
          getOptionLabel={(o: any) => o?.label || ''}
          renderInput={(params) => <TextField {...params} label="Country" />}
        />
        <TextField fullWidth margin="normal" label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </Box>
      <TextField
        fullWidth
        margin="normal"
        label="Password"
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
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 1 }}>
        <TextField fullWidth margin="normal" label="Company" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        <TextField fullWidth margin="normal" type="number" label="Employees count" value={employeesCount} onChange={(e) => setEmployeesCount(parseInt(e.target.value || '0', 10))} />
      </Box>
      <FormControlLabel control={<Checkbox checked={terms} onChange={(e) => setTerms(e.target.checked)} />} label={<Typography variant="body2">I accept the Terms and Conditions.</Typography>} />
      {!terms && <FormHelperText error sx={{ mt: -1, mb: 1 }}>You must accept terms to continue.</FormHelperText>}
      {error && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
      {loading && <CircularProgress size={24} sx={{ mt: 2 }} />}
      <Button sx={{ mt: 3 }} variant="contained" fullWidth size="large" type="submit" disabled={loading}>
        Create your account
      </Button>
      {success && (
        <Typography color="success.main" variant="body2" sx={{ mt: 2 }}>
          {success}
        </Typography>
      )}
    </form>
  );
}
