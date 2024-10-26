import { AiOutlineUserAdd } from 'react-icons/ai';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Text } from '@dry-typescript/ui-react-design-system';
import styled from 'styled-components';

import InputLabel from './input-label';

/**
 * Component Region
 */

type GuestInputProps = {
  value: number;
  onChange: (value: number) => void;
};

const GuestInput = ({ value, onChange }: GuestInputProps) => {
  const onIncrease = () => {
    if (value + 1 > MAXIMUM_GUEST) {
      return value;
    }
    onChange(value + 1);
    return value + 1;
  };

  const onDecrease = () => {
    if (value - 1 < MINIMUM_GUEST) {
      return value;
    }
    onChange(value - 1);
    return value - 1;
  };

  return (
    <Container>
      <InputLabel icon={<AiOutlineUserAdd />} label="Number of guests" />

      <InputContainer>
        <InputButton onClick={onDecrease} icon={<MinusOutlined />} />

        <InputAmount>
          <Text>{value}</Text>
        </InputAmount>

        <InputButton onClick={onIncrease} icon={<PlusOutlined />} />
      </InputContainer>
    </Container>
  );
};

export default GuestInput;

/**
 * Helper Region
 */

/**
 * Constant Region
 */

const MAXIMUM_GUEST = 6;
const MINIMUM_GUEST = 1;

/**
 * Styled region
 */

const Container = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

const InputButton = styled(Button)`
  width: 64px !important;
  height: 64px !important;
  border-radius: 50%;
  border-color: transparent !important;
`;

const InputAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary + '44'};

  ${Text} {
    font-size: 24px;
  }
`;
