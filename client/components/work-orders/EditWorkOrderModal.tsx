"use client";

import { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem, Stack } from '@mui/material';
import { api } from '@/lib/api';
import { useI18n } from '@/components/providers/I18nProvider';

type WorkOrder = {
  id: number;
  title?: string;
  description?: string;
  priority?: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | string;
  dueDate?: string;
};

export default function EditWorkOrderModal({ id, open, onClose, onSaved }: { id: number; open: boolean; onClose: () => void; onSaved?: () => void }) {
  const { t } = useI18n();
  const [form, setForm] = useState<WorkOrder | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;
    let active = true;
    (async () => {
      try {
        const data = await api<WorkOrder>(`work-orders/${id}`);
        if (!active) return;
        setForm({
          id,
          title: data.title || '',
          description: data.description || '',
          priority: (data.priority as any) || 'LOW',
          dueDate: data.dueDate ? (data.dueDate as string).substring(0, 10) : ''
        });
      } catch (e) {
        console.error(e);
      }
    })();
    return () => {
      active = false;
    };
  }, [id, open]);

  const onChange = (patch: Partial<WorkOrder>) => setForm((prev) => ({ ...(prev || ({} as WorkOrder)), ...patch }));

  const submit = async () => {
    if (!form) return;
    setSubmitting(true);
    try {
      const payload: any = { title: form.title, priority: form.priority, description: form.description };
      payload.dueDate = form.dueDate || null;
      await api(`work-orders/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
      onClose();
      onSaved?.();
    } catch (e) {
      alert('Failed to save work order');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{t('edit_work_order') || 'Edit Work Order'}</DialogTitle>
      <DialogContent>
        {!form ? (
          <div style={{ padding: 16 }}>{t('loading')}</div>
        ) : (
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField label={t('title_col') || 'Title'} value={form.title} onChange={(e) => onChange({ title: e.target.value })} fullWidth required />
            <TextField label={t('priority_col') || 'Priority'} value={form.priority} onChange={(e) => onChange({ priority: e.target.value })} select fullWidth>
              {['NONE','LOW','MEDIUM','HIGH'].map((p) => (
                <MenuItem key={p} value={p}>{p}</MenuItem>
              ))}
            </TextField>
            <TextField label={t('due_col') || 'Due'} type="date" value={form.dueDate || ''} onChange={(e) => onChange({ dueDate: e.target.value })} fullWidth InputLabelProps={{ shrink: true }} />
            <TextField label={t('description') || 'Description'} value={form.description} onChange={(e) => onChange({ description: e.target.value })} fullWidth multiline minRows={3} />
          </Stack>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={submitting}>{t('cancel') || 'Cancel'}</Button>
        <Button variant="contained" onClick={submit} disabled={submitting || !form || !form.title?.trim()}>{t('save') || 'Save'}</Button>
      </DialogActions>
    </Dialog>
  );
}

