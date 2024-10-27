import { ArrowLeftOutlined } from '@ant-design/icons';
import {
  Button,
  SimpleSteps,
  Text,
} from '@dry-typescript/ui-react-design-system';
import { useRouter } from 'next/router';
import styled from 'styled-components';

/**
 * Component Region
 */

type Props = {
  step: number;
  maxStep: number;
  label: string;
  onGoBack?: () => void;
};

const StepsHeader = ({ label, maxStep, step, onGoBack }: Props) => {
  const router = useRouter();
  return (
    <StepsWrapper>
      <SimpleSteps maxStep={maxStep} currentStep={step} />
      <StepsDetailWrapper>
        <Button
          variant="outlined"
          icon={<ArrowLeftOutlined />}
          onClick={() => {
            router.back();
            onGoBack?.();
          }}
        />
        <Text>{label}</Text>
      </StepsDetailWrapper>
    </StepsWrapper>
  );
};

export default StepsHeader;

/**
 * Helper Region
 */

/**
 * Constant Region
 */

/**
 * Styled region
 */

export const StepsWrapper = styled.div`
  width: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.secondaryButtonBg + 'dd'};
  z-index: 1000000;
  padding: 12px 24px;
`;

export const StepsDetailWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  button {
    margin-right: 24px;
    width: 64px !important;
    height: 64px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.text};
    /* 
    border-color: ${({ theme }) => theme.colors.secondaryButtonBg}; */
  }

  .ant-typography {
    font-size: 32px;
    width: 120px;
    line-height: 38px;
  }
`;
