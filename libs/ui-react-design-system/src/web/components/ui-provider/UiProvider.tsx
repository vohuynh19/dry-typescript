import { PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';

import { antdTheme, appTheme } from '../../theme';
import GlobalStyle from '../../GlobalStyle';

export const UiProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyle />
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </ThemeProvider>
  );
};
