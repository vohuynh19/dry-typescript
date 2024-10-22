import React, { useMemo } from 'react';
import { UiProvider } from '@dry-typescript/ui-react-design-system';
import { ReactQueryProvider } from '@dry-typescript/util-helpers';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import PrimaryLayout from '../components/primary-layout';
import { useGlobalListenerInjection } from '../hooks/useGlobalListenerInjection';
import '../styles/globals.css';

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
