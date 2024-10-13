import React, { useMemo } from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { UiProvider } from '@dry-typescript/ui-react-design-system';
import { ReactQueryProvider } from '@dry-typescript/util-helpers';

import '../styles/globals.css';
import { useGlobalListenerInjection } from '../hooks/useGlobalListenerInjection';
import PrimaryLayout from '../components/primary-layout';

const App = ({ Component, pageProps }: AppProps) => {
  useGlobalListenerInjection();

  const Layout = useMemo(() => PrimaryLayout, []);

  return (
    <ReactQueryProvider dehydratedState={pageProps.dehydratedState}>
      <UiProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UiProvider>
    </ReactQueryProvider>
  );
};
export default appWithTranslation(App);
