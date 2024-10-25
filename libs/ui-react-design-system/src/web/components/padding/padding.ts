import styled from 'styled-components';

export const Padding = styled.div<{
  p?: number;

  t?: number;
  r?: number;
  b?: number;
  l?: number;
}>`
  padding: ${({ p }) => `${p}px`};
  padding-top: ${({ t }) => `${t}px`};
  padding-right: ${({ r }) => `${r}px`};
  padding-bottom: ${({ b }) => `${b}px`};
  padding-left: ${({ l }) => `${l}px`};
`;
