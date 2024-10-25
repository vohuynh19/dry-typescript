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
  padding: 0px 12px;
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
