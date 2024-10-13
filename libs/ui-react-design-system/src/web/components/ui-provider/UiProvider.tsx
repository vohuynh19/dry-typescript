import { PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';

import { antdTheme, appTheme } from '../../theme';

export const UiProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={appTheme}>
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </ThemeProvider>
  );
};
