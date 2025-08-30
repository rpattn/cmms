import { DataGrid, type DataGridProps } from '@mui/x-data-grid';
import { Stack, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import gridLocaleText from './GridLocaleText';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

export interface CommunityDataGridProps extends DataGridProps {
  notClickable?: boolean;
  // accept apiRef to ease migration, but ignore it in community grid
  apiRef?: any;
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
      console.log(height - top - 15)
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
  const incomingSlots = (rest as any).slots ?? (rest as any).components;
  const incomingSlotProps = (rest as any).slotProps ?? (rest as any).componentsProps;

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
