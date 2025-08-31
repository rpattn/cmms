"use client";

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Link, List, ListItem, ListItemText, Typography } from '@mui/material';

type FileItem = { id: number; name?: string; url?: string };

export default function FilesList({ workOrderId }: { workOrderId: number }) {
  const [files, setFiles] = useState<FileItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let active = true;
    api<FileItem[]>(`work-orders/${workOrderId}/files`)
      .then((data) => active && setFiles(data))
      .catch(() => active && setError('Failed to load files'));
    return () => { active = false; };
  }, [workOrderId]);
  if (error) return <Typography color="error" variant="body2">{error}</Typography>;
  if (!files) return <Typography variant="body2">Loading...</Typography>;
  if (!files.length) return <Typography variant="body2">No files</Typography>;
  return (
    <List dense>
      {files.map((f) => (
        <ListItem key={f.id} disableGutters>
          <ListItemText primary={f.name || `File #${f.id}`} secondary={f.url ? <Link href={f.url} target="_blank" rel="noreferrer">{f.url}</Link> : undefined} />
        </ListItem>
      ))}
    </List>
  );
}

