import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Steps, Text } from '@dry-typescript/ui-react-design-system';
import styled from 'styled-components';

const StepsWrapper = styled.div``;

const StepsDetailWrapper = styled.div`
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

const StepsHeader = () => {
  return (
    <StepsWrapper>
      <Steps current={0} items={[{}, {}, {}]} />

      <StepsDetailWrapper>
        <Button icon={<ArrowLeftOutlined />} />
        <Text>Choose time</Text>
      </StepsDetailWrapper>
    </StepsWrapper>
  );
};

export default StepsHeader;
