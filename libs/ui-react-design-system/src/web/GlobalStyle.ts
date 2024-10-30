import { createGlobalStyle } from 'styled-components';
import { onest } from './theme';

const GlobalStyle = createGlobalStyle`
  :root {
    --adm-font-family: ${onest.style.fontFamily}
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${onest.style.fontFamily};
  }


  /* Scrollbar customization */
  /* width */
  ::-webkit-scrollbar {
    width: 0px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.secondaryButtonBg};
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondaryButtonBg};

  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondaryButtonBg};
  }
`;

export default GlobalStyle;
