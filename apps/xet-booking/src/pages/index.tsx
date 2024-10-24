import { CheckOutlined } from '@ant-design/icons';
import { dehydrateQueryClient } from '@dry-typescript/util-helpers';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  StepLayoutAction,
  StepLayoutContainer,
} from '../components/step-layout';
import StepsDoneButton from '../components/steps-done-button';
import { Routes } from '../routes';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...(await dehydrateQueryClient()),
    },
  };
}

export default function Splash() {
  const { t } = useTranslation('common');

  return (
    <StepLayoutContainer>
      <StepLayoutAction>
        <Link href={Routes.chooseTime()}>
          <StepsDoneButton type="primary" icon={<CheckOutlined />}>
            {t('start')}
          </StepsDoneButton>
        </Link>
      </StepLayoutAction>
    </StepLayoutContainer>
  );
}
