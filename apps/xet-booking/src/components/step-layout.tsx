import styled from 'styled-components';

export const StepLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const StepLayoutBody = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 132px 24px 44px 24px;
`;

export const StepLayoutAction = styled.div`
  display: flex;
  justify-content: center;
  height: 76px;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 10000000000;
`;
