"use client";

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

type Entry = { id: number; type?: 'TIME' | 'COST' | string; hours?: number; amount?: number; note?: string; date?: string };

export default function TimeCostList({ workOrderId }: { workOrderId: number }) {
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let active = true;
    api<Entry[]>(`work-orders/${workOrderId}/entries`)
      .then((data) => active && setEntries(data))
      .catch(() => active && setError('Failed to load entries'));
    return () => { active = false; };
  }, [workOrderId]);
  if (error) return <Typography color="error" variant="body2">{error}</Typography>;
  if (!entries) return <Typography variant="body2">Loading...</Typography>;
  if (!entries.length) return <Typography variant="body2">No time/cost entries</Typography>;
  return (
    <List dense>
      {entries.map((e) => (
        <ListItem key={e.id} disableGutters>
          <ListItemText
            primary={`${e.type || ''} ${e.hours != null ? `${e.hours}h` : e.amount != null ? `$${e.amount}` : ''}`.trim()}
            secondary={e.date ? new Date(e.date).toLocaleString() : e.note}
          />
        </ListItem>
      ))}
    </List>
  );
}

