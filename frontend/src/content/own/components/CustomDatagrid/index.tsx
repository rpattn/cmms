import { DataGrid, type DataGridProps } from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';
import { Stack, Typography, useTheme } from '@mui/material';
import gridLocaleText from './GridLocaleText';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { useEffect, useRef, useState } from 'react';
import { UiConfiguration } from '../../../../models/owns/uiConfiguration';
import type { GridEnrichedColDef } from '@mui/x-data-grid/models/colDef/gridColDef';
import useAuth from '../../../../hooks/useAuth';

export type CustomDatagridColumn = GridEnrichedColDef & {
  uiConfigKey?: keyof Omit<UiConfiguration, 'id'>;
};
interface CustomDatagridProps extends DataGridProps {
  notClickable?: boolean;
  columns: CustomDatagridColumn[];
}

function CustomDataGrid(props: CustomDatagridProps) {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const { height } = useWindowDimensions();
  const tableRef = useRef<HTMLDivElement>();
  const [tableHeight, setTableHeight] = useState<number>(500);
  const { user } = useAuth();

  const getTableHeight = () => {
    if (tableRef.current) {
      const viewportOffset = tableRef.current.getBoundingClientRect();
      // these are relative to the viewport, i.e. the window
      const top = viewportOffset.top;
      console.log(height - top - 15)
      return height - top - 15;
    }
    return 500;
  };

  useEffect(() => {
    setTableHeight(getTableHeight());
  }, [tableRef.current]);

  const translatedGridLocaleText = Object.fromEntries(
    Object.entries(gridLocaleText).map(([key, value]) => {
      if (typeof value === 'function') {
        return [key, value];
      }
      return [key, t(value)];
    })
  );
  return (
    <div ref={tableRef} style={{ height: tableHeight, width: '100%' }}>
      {/*@ts-ignore*/}
      <DataGrid
        sx={{
          ' .MuiDataGrid-columnHeader': {
            fontWeight: 'bold',
            textTransform: 'uppercase',
            backgroundColor: theme.colors.alpha.black[10]
          },
          '.MuiDataGrid-row': {
            cursor: props.notClickable ? 'auto' : 'pointer'
          }
        }}
        // Normalize deprecated `components/componentsProps` to `slots/slotProps`
        slots={{
          ...((props as any).slots ?? (props as any).components),
          noRowsOverlay:
            ((props as any).slots ?? (props as any).components)?.noRowsOverlay ??
            (() => (
              <Stack height="100%" alignItems="center" justifyContent="center">
                <Typography variant="h3">{t('no_content')}</Typography>
              </Stack>
            )),
          noResultsOverlay:
            ((props as any).slots ?? (props as any).components)?.noResultsOverlay ??
            (() => (
              <Stack height="100%" alignItems="center" justifyContent="center">
                <Typography variant="h3">{t('no_result_criteria')}</Typography>
              </Stack>
            ))
        }}
        slotProps={(props as any).slotProps ?? (props as any).componentsProps}
        {...props}
        columns={props.columns.filter((col) =>
          col.uiConfigKey ? user.uiConfiguration[col.uiConfigKey] : true
        )}
        disableRowSelectionOnClick
        localeText={translatedGridLocaleText}
      />
    </div>
  );
}

export default CustomDataGrid;
