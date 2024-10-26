import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

export const useValidationRules = () => {
  const { t } = useTranslation('common');
  return useMemo(() => {
    return {
      required: (fieldName: string) => ({
        value: true,
        message: t('form.errors.required', { field: fieldName }),
      }),
    };
  }, [t]);
};
