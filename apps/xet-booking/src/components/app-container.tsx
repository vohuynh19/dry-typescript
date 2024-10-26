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
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.background};
  box-sizing: border-box;
  overflow: hidden;
`;
