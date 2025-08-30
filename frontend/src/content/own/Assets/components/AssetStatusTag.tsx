import { AssetStatus, assetStatuses } from '../../../../models/owns/asset';
import { Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
const LabelWrapper = styled(Box)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    text-transform: uppercase;
    border-radius: ${theme.general.borderRadiusSm};
    padding: ${theme.spacing(0.9, 1.5, 0.7)};
    line-height: 1;
  `
);
export default function AssetStatusTag({ status }: { status: AssetStatus }) {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
    <LabelWrapper
      sx={{
        background: assetStatuses
          .find((statusConfig) => status === statusConfig.status)
          ?.color(theme),
        color: `white`,
        justifySelf: 'left',
      }}
    >
      {t(status)}
    </LabelWrapper>
    </Box>
  );
}
