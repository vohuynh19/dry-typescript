import styled from 'styled-components';

export const SizedBox = styled.div<{ $width?: number; $height?: number }>`
  width: ${({ $width }) => `${$width || 0}px`};
  height: ${({ $height }) => `${$height || 0}px`};
`;
