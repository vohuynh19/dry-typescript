import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageNotFoundScreen = () => {
  return <Container>404 - Page Not Found</Container>;
};
