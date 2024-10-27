import { useEffect } from 'react';
import { Controller, useForm, UseFormSetValue } from 'react-hook-form';
import { CheckOutlined } from '@ant-design/icons';
import { Padding, SizedBox } from '@dry-typescript/ui-react-design-system';
import { dehydrateQueryClient } from '@dry-typescript/util-helpers';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import GuestInput from '../components/guest-input';
import OccasionPicker from '../components/occasion-picker';
import {
  StepLayoutAction,
  StepLayoutBody,
  StepLayoutContainer,
} from '../components/step-layout';
import StepsDoneButton from '../components/steps-done-button';
import StepsHeader from '../components/steps-header';
import { OccasionType } from '../constants/OccasionType';
import { usePreservationStoreHydration, useValidationRules } from '../hooks';
import { Routes } from '../routes';
import { usePreservationStore } from '../stores';

/**
 * Next Server Side Region
 */

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...(await dehydrateQueryClient()),
    },
  };
}

/**
 * Component Region
 */

export default function FillDetail() {
  const { t } = useTranslation('common');
  const validationRules = useValidationRules();
  const { control, handleSubmit, setValue } = useForm<FormData>();
  const { guestAmount, occasionType, onNext } = usePageController({
    setFormValue: setValue,
  });

  return (
    <StepLayoutContainer>
      <StepsHeader label={t('pageTitle.fillDetail')} step={2} maxStep={4} />

      <StepLayoutBody>
        <SizedBox $height={16} />

        <Controller
          defaultValue={guestAmount}
          control={control}
          name="guestAmount"
          rules={{
            required: validationRules.required(t('form.field.phone')),
          }}
          render={({ field: { value, onChange } }) => (
            <GuestInput value={value} onChange={onChange} />
          )}
        />

        <SizedBox $height={40} />

        <Controller
          defaultValue={occasionType}
          control={control}
          name="occasionType"
          rules={{
            required: validationRules.required(t('form.field.phone')),
          }}
          render={({ field: { value, onChange } }) => (
            <OccasionPicker occasionType={value} onChange={onChange} />
          )}
        />

        <SizedBox $height={40} />
      </StepLayoutBody>

      <StepLayoutAction>
        <StepsDoneButton
          type="primary"
          icon={<CheckOutlined />}
          onClick={handleSubmit(onNext)}
        />
      </StepLayoutAction>
    </StepLayoutContainer>
  );
}

/**
 * Helper Region
 */

const usePageController = ({
  setFormValue,
}: {
  setFormValue: UseFormSetValue<FormData>;
}) => {
  const router = useRouter();
  const {
    guestAmount,
    occasionType,
    actions: { setGuestAmount, setOccasionType },
  } = usePreservationStore();

  const hydrated = usePreservationStoreHydration();

  const onNext = (data: FormData) => {
    setGuestAmount(data.guestAmount);
    setOccasionType(data.occasionType);

    router.push(Routes.preparation());
  };

  useEffect(() => {
    if (hydrated) {
      guestAmount && setFormValue('guestAmount', guestAmount);
      occasionType && setFormValue('occasionType', occasionType);
    }
  }, [hydrated, setFormValue, guestAmount, occasionType]);

  return { guestAmount, occasionType, onNext };
};

/**
 * Constant Region
 */

type FormData = {
  guestAmount: number;
  occasionType: OccasionType;
};

/**
 * Styled Region
 */
