import { ArrowLeftOutlined } from '@ant-design/icons';
import {
  Button,
  SimpleSteps,
  Text,
} from '@dry-typescript/ui-react-design-system';

import { StepsDetailWrapper, StepsWrapper } from './steps-header.styled';

type Props = {
  step: number;
  maxStep: number;
  label: string;
  onGoBack?: () => void;
};

const StepsHeader = ({ label, maxStep, step, onGoBack }: Props) => {
  return (
    <StepsWrapper>
      <SimpleSteps maxStep={maxStep} currentStep={step} />

      <StepsDetailWrapper>
        <Button icon={<ArrowLeftOutlined />} onClick={onGoBack} />
        <Text>{label}</Text>
      </StepsDetailWrapper>
    </StepsWrapper>
  );
};

export default StepsHeader;
