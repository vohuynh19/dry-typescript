import { CheckOutlined } from '@ant-design/icons';
import { dehydrateQueryClient } from '@dry-typescript/util-helpers';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import DatePicker from '../components/date-picker';
import StepsDoneButton from '../components/steps-done-button';
import StepsHeader from '../components/steps-header';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...(await dehydrateQueryClient()),
    },
  };
}

export default function Home() {
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

      <DatePicker
        onChange={(date) => {
          console.log('date chnage', date);
        }}
      />

      <ActionButtonContainer>
        <StepsDoneButton type="primary" icon={<CheckOutlined />} />
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
