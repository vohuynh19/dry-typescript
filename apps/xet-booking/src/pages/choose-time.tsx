import { useEffect } from 'react';
import { Controller, useForm, UseFormSetValue } from 'react-hook-form';
import { CheckOutlined } from '@ant-design/icons';
import { SizedBox } from '@dry-typescript/ui-react-design-system';
import { dehydrateQueryClient } from '@dry-typescript/util-helpers';
import moment from 'moment';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DatePicker, { useDateColums } from '../components/date-picker';
import {
  StepLayoutAction,
  StepLayoutBody,
  StepLayoutContainer,
} from '../components/step-layout';
import StepsDoneButton from '../components/steps-done-button';
import StepsHeader from '../components/steps-header';
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

export default function ChooseTime() {
  const { t } = useTranslation('common');
  const validationRules = useValidationRules();
  const { control, handleSubmit, setValue } = useForm<FormData>();
  const { preservedTime, onNext } = usePageController({
    setFormValue: setValue,
  });

  return (
    <StepLayoutContainer>
      <StepsHeader label={t('pageTitle.chooseTime')} step={1} maxStep={4} />

      <StepLayoutBody>
        <Controller
          defaultValue={preservedTime ? new Date(preservedTime) : undefined}
          control={control}
          name="preservedTime"
          rules={{
            required: validationRules.required(t('form.field.phone')),
          }}
          render={({ field: { value, onChange } }) => (
            <DatePicker date={value} onChange={onChange} />
          )}
        />
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
    preservedTime,
    actions: { setPreservedTime },
  } = usePreservationStore();

  const hydrated = usePreservationStoreHydration();

  const { getDefaultDate, getDefaultTime } = useDateColums();

  const onNext = (data: FormData) => {
    setPreservedTime(data.preservedTime);
    router.push(Routes.fillDetail());
  };

  useEffect(() => {
    if (hydrated && preservedTime) {
      const defaultValue = preservedTime
        ? preservedTime
        : moment(getDefaultDate())
            .add(getDefaultTime().hour, 'hour')
            .add(getDefaultTime().minute, 'minute')
            .toDate();
      setFormValue('preservedTime', new Date(defaultValue));
    }
  }, [getDefaultDate, getDefaultTime, setFormValue, hydrated, preservedTime]);

  return { hydrated, preservedTime, onNext };
};

/**
 * Constant Region
 */

type FormData = {
  preservedTime: Date;
};

/**
 * Styled Region
 */
