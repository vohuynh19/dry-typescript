import { CheckOutlined } from '@ant-design/icons';
import { dehydrateQueryClient } from '@dry-typescript/util-helpers';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import GuestInput from '../components/guest-input';
import OccasionPicker from '../components/occasion-picker';
import { StepLayoutAction, StepLayoutBody } from '../components/step-layout';
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

export default function FillDetail() {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <Container>
      <StepsHeader label={t('pageTitle.fillDetail')} step={2} maxStep={4} />

      <StepLayoutBody>
        <GuestInput />
        <OccasionPicker />
      </StepLayoutBody>

      <StepLayoutAction>
        <StepsDoneButton type="primary" icon={<CheckOutlined />} />
      </StepLayoutAction>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;
