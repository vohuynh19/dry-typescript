import { type ThemeConfig } from 'antd';
import { type DefaultTheme } from 'styled-components';
import { Onest } from 'next/font/google';

export const onest = Onest({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
} as const;

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS}px)`,
  mobileM: `(min-width: ${sizes.mobileM}px)`,
  mobileL: `(min-width: ${sizes.mobileL}px)`,
  tablet: `(min-width: ${sizes.tablet}px)`,
  laptop: `(min-width: ${sizes.laptop}px)`,
  laptopL: `(min-width: ${sizes.laptopL}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
} as const;

const colors = {
  primary: {
    '50': '#FDE2E2',
    '100': '#FBA3A3',
    '200': '#F76464',
    '300': '#F53D3D',
    '400': '#F31A1A',
    '500': '#B61F1F',
    '600': '#A61C1C',
    '700': '#961A1A',
    '800': '#861818',
    '900': '#6C1414',
  },
  secondary: {
    '50': '#FFFEDD',
    '100': '#FFFCBE',
    '200': '#F2F1A8',
    '300': '#D1D18F',
    '400': '#B0B076',
    '500': '#848365',
    '600': '#7A7B5A',
    '700': '#70724F',
    '800': '#666645',
    '900': '#5C5B3A',
  },
  neutral: {
    '50': '#FAFAFA',
    '100': '#F5F5F5',
    '200': '#EEEEEE',
    '300': '#E0E0E0',
    '400': '#BDBDBD',
    '500': '#9E9E9E',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
  },
  success: {
    '50': '#E8F5E9',
    '100': '#C8E6C9',
    '200': '#A5D6A7',
    '300': '#81C784',
    '400': '#66BB6A',
    '500': '#4CAF50',
    '600': '#43A047',
    '700': '#388E3C',
    '800': '#2E7D32',
    '900': '#1B5E20',
  },
  warning: {
    '50': '#FFF3E0',
    '100': '#FFE0B2',
    '200': '#FFCC80',
    '300': '#FFB74D',
    '400': '#FFA726',
    '500': '#FF9800',
    '600': '#FB8C00',
    '700': '#F57C00',
    '800': '#EF6C00',
    '900': '#E65100',
  },
  error: {
    '50': '#FFEBEE',
    '100': '#FFCDD2',
    '200': '#EF9A9A',
    '300': '#E57373',
    '400': '#EF5350',
    '500': '#F44336',
    '600': '#E53935',
    '700': '#C62828',
    '800': '#B71C1C',
    '900': '#B71C1C',
  },
  white: {
    '50': '#FFFFFF',
    '100': '#FEFEFE',
    '200': '#FDFDFD',
    '300': '#FBFBFB',
    '400': '#F9F9F9',
    '500': '#F5F5F5',
    '600': '#E0E0E0',
    '700': '#D6D6D6',
    '800': '#CFCFCF',
    '900': '#BDBDBD',
  },
  black: {
    '50': '#E0E0E0',
    '100': '#B0B0B0',
    '200': '#7A7A7A',
    '300': '#545454',
    '400': '#3B3B3B',
    '500': '#2E2E2E',
    '600': '#1A1A1A',
    '700': '#0D0D0D',
    '800': '#050505',
    '900': '#000000',
  },
};

export const antdTheme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorFillSecondary: colors.white[500],
    colorFillContent: colors.neutral[900],
    colorBorder: colors.neutral[700],
    colorPrimary: colors.primary[500],
    colorSplit: colors.neutral[900],
    colorBgContainer: colors.neutral[900],
    colorText: colors.white[500],
    colorTextSecondary: colors.neutral[500],
    fontFamily: onest.style.fontFamily,
  },
  components: {
    Steps: {
      iconSize: 40,
      iconFontSize: 18,
    },
  },
};

export const appTheme: DefaultTheme = {
  colors: {
    primary: colors.primary[500],
    secondary: colors.secondary[500],
    divider: colors.neutral[600],
    primaryBackground: colors.neutral[200],
    overlayBackground: colors.neutral[50],
    background: colors.black[700],
    text: colors.white[500],
    secondaryButtonBg: colors.neutral[900],

    //
    dateBtnBg: colors.primary[900],
    dateBtnBgActive: colors.primary[500],
    dateBtnText: colors.black[100],
    dateBtnTextActive: colors.white[500],
  },
  devices,
};
