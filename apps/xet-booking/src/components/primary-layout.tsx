import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.overlayBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 767px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 12px 24px;
  box-sizing: border-box;
`;

const PrimaryLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default PrimaryLayout;
