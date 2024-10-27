import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

/**
 * Component Region
 */

const AppContainer = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Head>
        <title>{t('metaTitle.default')}</title>
        <meta
          property="og:title"
          content={t('metaTitle.default')}
          key="title"
        />
        <link rel="icon" type="image/x-icon" href="/images/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Content>{children}</Content>
    </Container>
  );
};

export default AppContainer;

/**
 * Helper Region
 */

/**
 * Constant Region
 */

/**
 * Styled region
 */

const Container = styled.div`
  width: 100vw;
  height: 100svh;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/images/brand-bg.png);
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 550px;
  background-color: ${({ theme }) => theme.colors.background};
  box-sizing: border-box;
  overflow: hidden;
`;
