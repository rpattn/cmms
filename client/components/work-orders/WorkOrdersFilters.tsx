"use client";

import { MenuItem, Select, InputLabel, FormControl, Stack } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const priorities = ['ALL', 'HIGH', 'MEDIUM', 'LOW', 'NONE'] as const;

export default function WorkOrdersFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = (searchParams.get('priority') || 'ALL').toUpperCase();

  const onChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'ALL') params.delete('priority');
    else params.set('priority', value);
    params.set('page', '0');
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
      <FormControl size="small" sx={{ minWidth: 180 }}>
        <InputLabel id="priority-label">Priority</InputLabel>
        <Select
          labelId="priority-label"
          label="Priority"
          value={current}
          onChange={(e) => onChange(e.target.value)}
        >
          {priorities.map((p) => (
            <MenuItem key={p} value={p}>
              {p}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}

