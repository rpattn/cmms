import {
  Box,
  Button,
  Card, CardContent, CircularProgress,
  Divider,
  Grid,
  Stack, TextField,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '../../../../store';
import { useContext, useEffect, useState } from 'react';
import { CompanySettingsContext } from '../../../../contexts/CompanySettingsContext';
import { getAssetDetailsOverview } from '../../../../slices/analytics/asset';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import DatePicker from '@mui/lab/DatePicker';
import Loading from '../../Analytics/Loading';

interface PropsType {
  id: number;
}

const AssetDowntimes = ({ id }: PropsType) => {
  const { t }: { t: any } = useTranslation();
  const dispatch = useDispatch();
  const { getFormattedCurrency } = useContext(CompanySettingsContext);
  const { assetDetailsOverview, loading } = useSelector(state => state.assetAnalytics);
  const [end, setEnd] = useState(new Date());
  const nowMinusMonth = new Date();
  nowMinusMonth.setMonth(nowMinusMonth.getMonth() - 1);
  const [start, setStart] = useState(nowMinusMonth);

  useEffect(() => {
    if (id && start && end) dispatch(getAssetDetailsOverview(id, start, end));
  }, [id]);
  const datas: {
    label: string;
    value: string;
  }[] = [
    {
      label: t('MTBF'),
      value: assetDetailsOverview.mtbf.toString()
    },
    {
      label: t('MTTR'),
      value: assetDetailsOverview.mttr.toString()
    },
    {
      label: t('downtime_hours'),
      value: (assetDetailsOverview.downtime / 3600).toFixed(2)
    },
    {
      label: t('uptime_hours'),
      value: (assetDetailsOverview.uptime / 3600).toFixed(2)
    },
    {
      label: t('total_cost'),
      value: getFormattedCurrency(assetDetailsOverview.totalCost.toString())
    }
  ];
  return (
    <Box sx={{ px: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Box sx={{ height: 550, width: '95%' }}>
              <Stack direction="row" justifyContent="space-between" py={3}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={start}
                    onChange={(newValue) => {
                      if (newValue) {
                        const v: any = newValue as any;
                        setStart(v?.toDate ? v.toDate() : (newValue as unknown as Date));
                      }
                    }}
                    renderInput={(params) => <TextField {...params} label={t('start')} />}
                  />
                  <Box sx={{ mx: 2 }}> {t('to')} </Box>
                  <DatePicker
                    value={end}
                    onChange={(newValue) => {
                      if (newValue) {
                        const v: any = newValue as any;
                        setEnd(v?.toDate ? v.toDate() : (newValue as unknown as Date));
                      }
                    }}
                    renderInput={(params) => <TextField {...params} label={t('end')} />}
                  />
                </LocalizationProvider>
                <Button disabled={loading.assetDetailsOverview}
                        onClick={() => dispatch(getAssetDetailsOverview(id, start, end))}
                        startIcon={loading.assetDetailsOverview && <CircularProgress size="1rem" />}
                        variant={'contained'} color={'primary'}>{t('show')}</Button>
              </Stack>
              <Divider sx={{ mb: 2 }} />
              <Card>
                <CardContent>
                  <Stack sx={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    {loading.assetDetailsOverview ? (
                      <Loading />
                    ) : (
                      <Stack direction="row" spacing={2}>
                        {datas.map((data) => (
                          <Stack key={data.label} alignItems="center">
                            <Typography
                              variant="h2"
                              fontWeight="bold"
                            >
                              {data.value}
                            </Typography>
                            <Typography>{data.label}</Typography>
                          </Stack>
                        ))}
                      </Stack>)}</Stack>
                </CardContent>
              </Card>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AssetDowntimes;
