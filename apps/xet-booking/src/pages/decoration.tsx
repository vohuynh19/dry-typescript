import { useRef, useState } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import { dehydrateQueryClient } from '@dry-typescript/util-helpers';
import { ImageViewer, Swiper } from 'antd-mobile';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import { StepLayoutAction, StepLayoutBody } from '../components/step-layout';
import StepsDoneButton from '../components/steps-done-button';
import StepsHeader from '../components/steps-header';
import { DecorationOption, useDecorationOptions } from '../hooks';
import { Routes } from '../routes';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      ...(await dehydrateQueryClient()),
    },
  };
}

export default function Decoration() {
  const { t } = useTranslation('common');
  const [imagePreviewVisible, setImagePreviewVisible] = useState(false);
  const [listDecoration, setListDecoration] = useState<DecorationOption[]>([]);
  const imgPreviewRef = useRef<{
    swipeTo: (index: number, immediate?: boolean) => void;
  }>(null);

  const decorationOptions = useDecorationOptions();

  const items = decorationOptions.map(({ name, items }, index) => {
    return (
      <Swiper.Item key={index}>
        <ItemContainer
          onClick={() => {
            setListDecoration(items);
            setImagePreviewVisible(true);
          }}
        >
          <Image
            src={items[0].url}
            alt="decoration image"
            width={800}
            height={800}
          />

          <ItemLabel>{name}</ItemLabel>
        </ItemContainer>
      </Swiper.Item>
    );
  });

  return (
    <Container>
      {!imagePreviewVisible && (
        <StepsHeader label={t('label.decoration')} step={3} maxStep={4} />
      )}

      <StepLayoutBody
        style={{
          padding: 0,
        }}
      >
        <Swiper
          style={{
            height: '100%',
          }}
        >
          {items}
        </Swiper>

        <ImageViewer.Multi
          ref={imgPreviewRef}
          images={listDecoration.map((item) => item.url)}
          visible={imagePreviewVisible}
          defaultIndex={1}
          onClose={() => {
            setImagePreviewVisible(false);
            imgPreviewRef.current?.swipeTo(0, true);
          }}
          renderFooter={(_, index) => (
            <FooterImageLabel>{listDecoration?.[index]?.name}</FooterImageLabel>
          )}
        />
      </StepLayoutBody>

      {!imagePreviewVisible && (
        <StepLayoutAction>
          <Link href={Routes.deposit()}>
            <StepsDoneButton type="primary" icon={<CheckOutlined />} />
          </Link>
        </StepLayoutAction>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  .adm-image-viewer-image-wrapper {
    z-index: 10000000000;
  }
`;

const ItemContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
`;

const ItemLabel = styled.div`
  margin-top: 180px;
  padding: 24px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.background + 'aa'};
  color: ${({ theme }) => theme.colors.text};
  z-index: 2;
  font-size: 32px;
`;

const FooterImageLabel = styled.div`
  color: ${({ theme }) => theme.colors.text};
  padding: 24px;
  text-align: center;
`;
