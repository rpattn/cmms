import { DataGrid, type DataGridProps } from '@mui/x-data-grid';
import { Stack, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import gridLocaleText from './GridLocaleText';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

// Accept deprecated v5/v6 props (components/componentsProps) for backward compatibility
export interface CommunityDataGridProps
  extends Omit<DataGridProps, 'components' | 'componentsProps'> {
  notClickable?: boolean;
  // accept apiRef to ease migration, but ignore it in community grid
  apiRef?: any;
  // deprecated aliases mapped to slots/slotProps internally
  components?: any;
  componentsProps?: any;
}

function CommunityDataGrid(props: CommunityDataGridProps) {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const { height } = useWindowDimensions();
  const tableRef = useRef<HTMLDivElement>(null);
  const [tableHeight, setTableHeight] = useState<number>(500);

  const getTableHeight = () => {
    if (tableRef.current) {
      const viewportOffset = tableRef.current.getBoundingClientRect();
      const top = viewportOffset.top;
      return height - top - 15;
    }
    return 500;
  };

  useEffect(() => {
    setTableHeight(getTableHeight());
  }, [height]);

  const translatedGridLocaleText = Object.fromEntries(
    Object.entries(gridLocaleText).map(([key, value]) => {
      if (typeof value === 'function') {
        return [key, value];
      }
      return [key, t(value)];
    })
  );

  const { notClickable, apiRef: _ignored, ...rest } = props;
  // Normalize deprecated `components/componentsProps` to `slots/slotProps`
  // and translate PascalCase keys to new camelCase slot names
  let incomingSlots: any = (rest as any).slots;
  if (!incomingSlots) {
    const c = (rest as any).components;
    if (c) {
      incomingSlots = { ...c };
      if (c.NoRowsOverlay) incomingSlots.noRowsOverlay = c.NoRowsOverlay;
      if (c.NoResultsOverlay) incomingSlots.noResultsOverlay = c.NoResultsOverlay;
      if (c.Toolbar) incomingSlots.toolbar = c.Toolbar;
      if (c.ColumnMenu) incomingSlots.columnMenu = c.ColumnMenu;
      if (c.Pagination) incomingSlots.pagination = c.Pagination;
      if (c.Footer) incomingSlots.footer = c.Footer;
      if (c.BaseCheckbox) incomingSlots.baseCheckbox = c.BaseCheckbox;
    }
  }
  let incomingSlotProps: any = (rest as any).slotProps;
  if (!incomingSlotProps) {
    const cp = (rest as any).componentsProps;
    if (cp) {
      incomingSlotProps = { ...cp };
      if (cp.NoRowsOverlay) incomingSlotProps.noRowsOverlay = cp.NoRowsOverlay;
      if (cp.NoResultsOverlay) incomingSlotProps.noResultsOverlay = cp.NoResultsOverlay;
      if (cp.Toolbar) incomingSlotProps.toolbar = cp.Toolbar;
      if (cp.ColumnMenu) incomingSlotProps.columnMenu = cp.ColumnMenu;
      if (cp.Pagination) incomingSlotProps.pagination = cp.Pagination;
      if (cp.Footer) incomingSlotProps.footer = cp.Footer;
    }
  }

  return (
    <div ref={tableRef} style={{ height: tableHeight, width: '100%' }}>
      <DataGrid
        sx={{
          ' .MuiDataGrid-columnHeader': {
            fontWeight: 'bold',
            textTransform: 'uppercase',
            backgroundColor: theme.colors.alpha.black[10]
          },
          '.MuiDataGrid-row': {
            cursor: notClickable ? 'auto' : 'pointer'
          }
        }}
        slots={{
          ...incomingSlots,
          noRowsOverlay:
            incomingSlots?.noRowsOverlay ?? (() => (
              <Stack height="100%" alignItems="center" justifyContent="center">
                <Typography variant="h3">{t('no_content')}</Typography>
              </Stack>
            )),
          noResultsOverlay:
            incomingSlots?.noResultsOverlay ?? (() => (
              <Stack height="100%" alignItems="center" justifyContent="center">
                <Typography variant="h3">{t('no_result_criteria')}</Typography>
              </Stack>
            ))
        }}
        slotProps={incomingSlotProps}
        disableRowSelectionOnClick
        localeText={translatedGridLocaleText as any}
        {...rest}
      />
    </div>
  );
}

export default CommunityDataGrid;
