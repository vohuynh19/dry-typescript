import { useMemo } from 'react';

export const useImagePath = () => {
  return useMemo(
    () => ({
      BACKGROUND_URL: '/images/background.png',
      LOGO_URL: '/images/logo.png',
    }),
    [],
  );
};
