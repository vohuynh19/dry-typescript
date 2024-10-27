import { CheckOutlined } from '@ant-design/icons';
import { dehydrateQueryClient } from '@dry-typescript/util-helpers';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

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

export default function Deposit() {
  const { t } = useTranslation('common');

  return (
    <Container>
      <StepsHeader
        label={t('label.time')}
        step={1}
        maxStep={3}
        onGoBack={() => {
          console.log('onGoBack');
        }}
      />

      <ActionButtonContainer>
        <Link href={Routes.deposit()}>
          <StepsDoneButton type="primary" icon={<CheckOutlined />} />
        </Link>
      </ActionButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 64px;
`;
