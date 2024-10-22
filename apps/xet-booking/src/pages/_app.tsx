import React, { useMemo } from 'react';
import { UiProvider } from '@dry-typescript/ui-react-design-system';
import { ReactQueryProvider } from '@dry-typescript/util-helpers';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import AppContainer from '../components/app-container';
import { useGlobalListenerInjection } from '../hooks/useGlobalListenerInjection';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  useGlobalListenerInjection();

  const Container = useMemo(() => AppContainer, []);

  return (
    <ReactQueryProvider dehydratedState={pageProps.dehydratedState}>
      <UiProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </UiProvider>
    </ReactQueryProvider>
  );
};
export default appWithTranslation(App);
