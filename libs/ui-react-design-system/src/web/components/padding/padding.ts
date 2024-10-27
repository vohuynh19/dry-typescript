import styled from 'styled-components';

export const Padding = styled.div<{
  $p?: number;
  $t?: number;
  $r?: number;
  $b?: number;
  $l?: number;
}>`
  padding: ${({ $p }) => ($p ? `${$p}px` : $p)};
  padding-top: ${({ $t }) => ($t ? `${$t}px` : '')};
  padding-right: ${({ $r }) => ($r ? `${$r}px` : '')};
  padding-bottom: ${({ $b }) => ($b ? `${$b}px` : $b)};
  padding-left: ${({ $l }) => ($l ? `${$l}px` : $l)};
`;
