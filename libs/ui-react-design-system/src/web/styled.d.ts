import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      divider: string;
      primaryBackground: string;
      overlayBackground: string;
      background: string;
      text: string;
      secondaryButtonBg: string;

      //
      dateBtnBg: string;
      dateBtnBgActive: string;
      dateBtnText: string;
      dateBtnTextActive: string;

      //
    };
    devices: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
    };
  }
}
