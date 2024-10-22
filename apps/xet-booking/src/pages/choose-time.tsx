import { CheckOutlined } from '@ant-design/icons';
import { dehydrateQueryClient } from '@dry-typescript/util-helpers';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import DatePicker from '../components/date-picker';
import {
  StepLayoutAction,
  StepLayoutBody,
  StepLayoutContainer,
} from '../components/step-layout';
import StepsDoneButton from '../components/steps-done-button';
import StepsHeader from '../components/steps-header';
import { Routes } from '../routes';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...(await dehydrateQueryClient()),
    },
  };
}

export default function ChooseTime() {
  const { t } = useTranslation('common');

  return (
    <StepLayoutContainer>
      <StepsHeader label={t('label.time')} step={1} maxStep={4} />

      <StepLayoutBody>
        <DatePicker
          onChange={(date) => {
            console.log('date chnage', date);
          }}
        />
      </StepLayoutBody>

      <StepLayoutAction>
        <Link href={Routes.fillDetail()}>
          <StepsDoneButton type="primary" icon={<CheckOutlined />} />
        </Link>
      </StepLayoutAction>
    </StepLayoutContainer>
  );
}
