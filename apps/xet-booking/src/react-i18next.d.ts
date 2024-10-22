import common from '../public/locales/en/common.json';
import { resources } from './locales';

export const resources = {
  en: {
    translation: en,
  },
} as const;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
    };
    returnNull: false;
  }
}
