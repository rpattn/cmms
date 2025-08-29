import { Box, Card, CardContent, TextField } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import DatePicker from '@mui/lab/DatePicker';
import { useTranslation } from 'react-i18next';

interface OwnProps {
  start: Date;
  end: Date;
  setStart: (date: Date) => void;
  setEnd: (date: Date) => void;
}

export default function({ start, end, setEnd, setStart }: OwnProps) {
  const { t }: { t: any } = useTranslation();

  return (
    <Card>
      <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
      </CardContent>
    </Card>
  );
}
