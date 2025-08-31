"use client";

import { MenuItem, Select, InputLabel, FormControl, Stack, FormControlLabel, Checkbox, TextField } from '@mui/material';
import { useI18n } from '@/components/providers/I18nProvider';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const priorities = ['ALL', 'HIGH', 'MEDIUM', 'LOW', 'NONE'] as const;

export default function WorkOrdersFilters({
  value,
  onPriorityChange,
  statuses = ['OPEN','IN_PROGRESS','ON_HOLD'],
  onStatusesChange,
  hideArchived = true,
  onHideArchivedChange,
  dueFrom,
  dueTo,
  onDueFromChange,
  onDueToChange
}: {
  value?: string;
  onPriorityChange?: (value: string) => void;
  statuses?: string[];
  onStatusesChange?: (values: string[]) => void;
  hideArchived?: boolean;
  onHideArchivedChange?: (val: boolean) => void;
  dueFrom?: string | null;
  dueTo?: string | null;
  onDueFromChange?: (val: string | null) => void;
  onDueToChange?: (val: string | null) => void;
}) {
  const { t } = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = (value || searchParams.get('priority') || 'ALL').toUpperCase();

  const onChange = (v: string) => {
    if (onPriorityChange) {
      onPriorityChange(v);
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    if (v === 'ALL') params.delete('priority');
    else params.set('priority', v);
    params.set('page', '0');
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Stack direction="column" spacing={2} sx={{ mb: 2 }}>
      <FormControl size="small" sx={{ minWidth: 180 }}>
        <InputLabel id="priority-label">{t('priority_col')}</InputLabel>
        <Select
          labelId="priority-label"
          label={t('priority_col')}
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
      <div>
        <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 6 }}>{t('status') || 'Status'}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(120px,1fr))' }}>
          {['OPEN','IN_PROGRESS','ON_HOLD','CLOSED'].map((s) => (
            <FormControlLabel
              key={s}
              control={
                <Checkbox
                  checked={statuses.includes(s)}
                  onChange={(e) => {
                    if (!onStatusesChange) return;
                    const next = new Set(statuses);
                    if (e.target.checked) next.add(s);
                    else next.delete(s);
                    onStatusesChange(Array.from(next));
                  }}
                />
              }
              label={s}
            />
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 6 }}>Due date</div>
        <Stack direction="row" spacing={2}>
          <TextField
            type="date"
            label="From"
            size="small"
            value={dueFrom || ''}
            onChange={(e) => onDueFromChange?.(e.target.value || null)}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            type="date"
            label="To"
            size="small"
            value={dueTo || ''}
            onChange={(e) => onDueToChange?.(e.target.value || null)}
            InputLabelProps={{ shrink: true }}
          />
        </Stack>
      </div>
      <FormControlLabel
        control={<Checkbox checked={hideArchived} onChange={(e) => onHideArchivedChange?.(e.target.checked)} />}
        label={t('hide_archived') || 'Hide archived'}
      />
    </Stack>
  );
}
