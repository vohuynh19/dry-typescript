import { CheckOutlined } from '@ant-design/icons';
import { dehydrateQueryClient } from '@dry-typescript/util-helpers';
import { Swiper } from 'antd-mobile';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import { StepLayoutAction, StepLayoutBody } from '../components/step-layout';
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

export default function Preparation() {
  const { t } = useTranslation('common');

  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div style={{ background: color, height: '100%' }}>{index + 1}</div>
    </Swiper.Item>
  ));

  return (
    <Container>
      <StepsHeader label={t('label.preparation')} step={3} maxStep={4} />

      <StepLayoutBody>
        <Swiper
          style={{
            height: '100%',
          }}
        >
          {items}
        </Swiper>
      </StepLayoutBody>

      <StepLayoutAction>
        <Link href={Routes.deposit()}>
          <StepsDoneButton type="primary" icon={<CheckOutlined />} />
        </Link>
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
