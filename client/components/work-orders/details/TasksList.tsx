"use client";

import { useEffect, useState } from 'react';
import { api } from '@/lib/api';
import { Box, Checkbox, List, ListItem, ListItemText, Typography } from '@mui/material';

type Task = {
  id: number;
  title?: string;
  completed?: boolean;
  assigneeName?: string;
};

export default function TasksList({ workOrderId }: { workOrderId: number }) {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let active = true;
    api<Task[]>(`work-orders/${workOrderId}/tasks`)
      .then((data) => active && setTasks(data))
      .catch(() => active && setError('Failed to load tasks'));
    return () => { active = false; };
  }, [workOrderId]);
  if (error) return <Typography color="error" variant="body2">{error}</Typography>;
  if (!tasks) return <Typography variant="body2">Loading...</Typography>;
  if (!tasks.length) return <Typography variant="body2">No tasks</Typography>;
  return (
    <List dense>
      {tasks.map((t) => (
        <ListItem key={t.id} disableGutters>
          <Checkbox edge="start" checked={!!t.completed} readOnly sx={{ mr: 1 }} />
          <ListItemText primary={t.title || `Task #${t.id}`} secondary={t.assigneeName ? `@${t.assigneeName}` : undefined} />
        </ListItem>
      ))}
    </List>
  );
}

