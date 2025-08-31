"use client";

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Link, List, ListItem, ListItemText, Typography } from '@mui/material';

type LinkItem = { id: number; label?: string; url?: string };

export default function LinksList({ workOrderId }: { workOrderId: number }) {
  const [items, setItems] = useState<LinkItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let active = true;
    api<LinkItem[]>(`work-orders/${workOrderId}/links`)
      .then((data) => active && setItems(data))
      .catch(() => active && setError('Failed to load links'));
    return () => { active = false; };
  }, [workOrderId]);
  if (error) return <Typography color="error" variant="body2">{error}</Typography>;
  if (!items) return <Typography variant="body2">Loading...</Typography>;
  if (!items.length) return <Typography variant="body2">No links</Typography>;
  return (
    <List dense>
      {items.map((l) => (
        <ListItem key={l.id} disableGutters>
          <ListItemText primary={l.label || l.url || `Link #${l.id}`} secondary={l.url ? <Link href={l.url} target="_blank" rel="noreferrer">{l.url}</Link> : undefined} />
        </ListItem>
      ))}
    </List>
  );
}

