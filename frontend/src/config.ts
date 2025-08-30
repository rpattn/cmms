const getEnvValue = (key: string, defaultValue = ''): string => {
  const v = (import.meta as any).env?.[`VITE_${key}`];
  if (typeof v === 'string') return v;
  return defaultValue;
};

export const firebaseConfig = {
  apiKey: getEnvValue('API_KEY'),
  authDomain: getEnvValue('AUTH_DOMAIN'),
  databaseURL: getEnvValue('DATABASE_URL'),
  projectId: getEnvValue('PROJECT_ID'),
  storageBucket: getEnvValue('STORAGE_BUCKET'),
  messagingSenderId: getEnvValue('MESSAGING_SENDER_ID'),
  appId: getEnvValue('ID'),
  measurementId: getEnvValue('MEASUREMENT_ID')
};

export const googleMapsConfig = {
  apiKey: getEnvValue('GOOGLE_KEY')
};

const rawApiUrl = getEnvValue('API_URL');
export const apiUrl = rawApiUrl
  ? rawApiUrl.endsWith('/')
    ? rawApiUrl
    : rawApiUrl + '/'
  : 'http://localhost:8080/';

export const muiLicense = getEnvValue('MUI_X_LICENSE');

export const zendeskKey = '';

export const googleTrackingId = getEnvValue('GOOGLE_TRACKING_ID');
export const oauth2Provider = getEnvValue('OAUTH2_PROVIDER') as
  | 'GOOGLE'
  | 'MICROSOFT';

export const isEmailVerificationEnabled =
  getEnvValue('INVITATION_VIA_EMAIL') === 'true';

export const isCloudVersion = getEnvValue('CLOUD_VERSION') === 'true';

const apiHostName = new URL(apiUrl).hostname;
export const IS_LOCALHOST =
  apiHostName === 'localhost' || apiHostName === '127.0.0.1';

export const isSSOEnabled = getEnvValue('ENABLE_SSO') === 'true';

export const customLogoPaths: { white?: string; dark: string } =
  getEnvValue('LOGO_PATHS') ? JSON.parse(getEnvValue('LOGO_PATHS')) : null;
type ThemeColors = {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  black: string;
  white: string;
  primaryAlt: string;
};

export const customColors: ThemeColors = getEnvValue('CUSTOM_COLORS')
  ? JSON.parse(getEnvValue('CUSTOM_COLORS'))
  : null;

export interface BrandRawConfig {
  name: string;
  shortName: string;
  website: string;
  mail: string;
  addressStreet: string;
  phone: string;
  addressCity: string;
}
export const brandRawConfig: BrandRawConfig = getEnvValue('BRAND_CONFIG')
  ? JSON.parse(getEnvValue('BRAND_CONFIG'))
  : null;

export const isWhiteLabeled: boolean = !!(customLogoPaths || brandRawConfig);
