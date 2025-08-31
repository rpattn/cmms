"use client";

import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem, Stack } from '@mui/material';
import { api } from '@/lib/api';
import { useI18n } from '@/components/providers/I18nProvider';

export default function CreateWorkOrderModal({ open, onClose, onCreated }: { open: boolean; onClose: () => void; onCreated?: () => void }) {
  const { t } = useI18n();
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'NONE' | 'LOW' | 'MEDIUM' | 'HIGH'>('LOW');
  const [dueDate, setDueDate] = useState<string>('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    setSubmitting(true);
    try {
      const payload: any = { title, priority, description };
      if (dueDate) payload.dueDate = dueDate;
      await api('work-orders', { method: 'POST', body: JSON.stringify(payload) });
      onClose();
      onCreated?.();
      setTitle(''); setDescription(''); setDueDate(''); setPriority('LOW');
    } catch (e) {
      alert('Failed to create work order');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{t('add_work_order') || 'Add Work Order'}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField label={t('title_col') || 'Title'} value={title} onChange={(e) => setTitle(e.target.value)} fullWidth required />
          <TextField label={t('priority_col') || 'Priority'} value={priority} onChange={(e) => setPriority(e.target.value as any)} select fullWidth>
            {['NONE','LOW','MEDIUM','HIGH'].map((p) => (
              <MenuItem key={p} value={p}>{p}</MenuItem>
            ))}
          </TextField>
          <TextField label={t('due_col') || 'Due'} type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} fullWidth InputLabelProps={{ shrink: true }} />
          <TextField label={t('description') || 'Description'} value={description} onChange={(e) => setDescription(e.target.value)} fullWidth multiline minRows={3} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={submitting}>{t('cancel') || 'Cancel'}</Button>
        <Button variant="contained" onClick={submit} disabled={submitting || !title.trim()}>{t('add_work_order') || 'Add Work Order'}</Button>
      </DialogActions>
    </Dialog>
  );
}

