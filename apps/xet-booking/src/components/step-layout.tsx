import styled from 'styled-components';

export const StepLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

export const StepLayoutBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 132px 16px 0px 16px;
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
