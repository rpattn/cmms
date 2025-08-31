"use client";

import { useEffect, useMemo, useState } from 'react';
import { api } from '@/lib/api';
import { Box, Chip, Divider, IconButton, Stack, Typography, Button, Tab, Tabs } from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import EditWorkOrderModal from '@/components/work-orders/EditWorkOrderModal';
import TasksList from '@/components/work-orders/details/TasksList';
import FilesList from '@/components/work-orders/details/FilesList';
import LinksList from '@/components/work-orders/details/LinksList';
import TimeCostList from '@/components/work-orders/details/TimeCostList';
import CloseIcon from '@mui/icons-material/Close';
import { useI18n } from '@/components/providers/I18nProvider';

type WorkOrder = {
  id: number;
  title?: string;
  description?: string;
  priority?: 'HIGH' | 'MEDIUM' | 'LOW' | 'NONE' | string;
  dueDate?: string;
  status?: string;
};

export default function WorkOrderDetailsPanel({ id, onClose }: { id: number; onClose?: () => void }) {
  const { t } = useI18n();
  const [wo, setWo] = useState<WorkOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [tab, setTab] = useState<'overview' | 'tasks' | 'files' | 'links' | 'entries'>('overview');

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);
    api<WorkOrder>(`work-orders/${id}`)
      .then((data) => {
        if (!active) return;
        setWo(data);
      })
      .catch((e: any) => {
        if (!active) return;
        setError(e?.message || 'Failed to load');
      })
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [id, reloadKey]);

  const due = useMemo(() => (wo?.dueDate ? new Date(wo.dueDate) : null), [wo?.dueDate]);
  const overdue = useMemo(() => (due ? due.getTime() < Date.now() : false), [due]);
  const priorityColor = wo?.priority === 'HIGH' ? 'error' : wo?.priority === 'MEDIUM' ? 'warning' : wo?.priority === 'LOW' ? 'success' : 'default';

  return (
    <Box sx={{ p: 2, width: 420, maxWidth: '100vw' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="h6">{wo ? `#${wo.id} ${wo.title || ''}` : t('loading')}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {wo && (
            <Button size="small" startIcon={<EditTwoToneIcon />} onClick={() => setEditOpen(true)}>
              {t('edit_work_order') || 'Edit'}
            </Button>
          )}
          <IconButton onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      {loading && <Typography variant="body2">{t('loading')}</Typography>}
      {error && <Typography color="error" variant="body2">{error}</Typography>}
      {!!wo && (
        <>
          <Tabs value={tab} onChange={(_e, v) => setTab(v)} sx={{ mb: 1 }}>
            <Tab label="Overview" value="overview" />
            <Tab label="Tasks" value="tasks" />
            <Tab label="Files" value="files" />
            <Tab label="Links" value="links" />
            <Tab label="Time & Cost" value="entries" />
          </Tabs>
          {tab === 'overview' && (
            <>
              <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                <Chip label={wo.priority || 'NONE'} color={priorityColor as any} size="small" />
                {wo.status && <Chip label={wo.status} size="small" />}
                {due && (
                  <Chip label={`${t('due_col')}: ${due.toLocaleDateString()}`} size="small" color={overdue ? 'error' : 'default'} variant={overdue ? 'filled' : 'outlined'} />
                )}
              </Stack>
              <Divider sx={{ my: 1 }} />
              {wo.description && (
                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>{wo.description}</Typography>
              )}
            </>
          )}
          {tab === 'tasks' && <TasksList workOrderId={wo.id} />}
          {tab === 'files' && <FilesList workOrderId={wo.id} />}
          {tab === 'links' && <LinksList workOrderId={wo.id} />}
          {tab === 'entries' && <TimeCostList workOrderId={wo.id} />}
        </>
      )}

      {/* Edit modal */}
      {wo && (
        <EditWorkOrderModal
          id={wo.id}
          open={editOpen}
          onClose={() => setEditOpen(false)}
          onSaved={() => {
            setEditOpen(false);
            setReloadKey((k) => k + 1);
          }}
        />
      )}
    </Box>
  );
}
