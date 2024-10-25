import { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Text } from '@dry-typescript/ui-react-design-system';
import styled from 'styled-components';

import InputLabel from './input-label';

/**
 * Component Region
 */

const GuestInput = () => {
  const [amount, setAmount] = useState(0);

  const onIncrease = () => {
    setAmount((prev) => prev + 1);
  };

  const onDecrease = () => {
    setAmount((prev) => prev - 1);
  };

  return (
    <Container>
      <InputLabel icon={<AiOutlineUserAdd />} label="Number of guests" />

      <InputContainer>
        <InputButton onClick={onIncrease} icon={<PlusOutlined />} />

        <InputAmount>
          <Text>{amount}</Text>
        </InputAmount>

        <InputButton onClick={onDecrease} icon={<MinusOutlined />} />
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
  border-color: transparent;
`;

const InputAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};

  ${Text} {
    font-size: 24px;
  }
`;
