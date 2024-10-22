import styled from 'styled-components';

export const StepsWrapper = styled.div``;

export const StepsDetailWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;

  button {
    margin-right: 24px;
    width: 64px !important;
    height: 64px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.secondaryButtonBg};
  }

  .ant-typography {
    font-size: 32px;
    width: 120px;
    line-height: 38px;
  }
`;
