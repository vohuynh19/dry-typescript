import { ReactNode } from 'react';
import { Text } from '@dry-typescript/ui-react-design-system';
import styled from 'styled-components';

/**
 * Component Region
 */

type InputLabelProps = {
  icon: ReactNode;
  label: string;
};

const InputLabel = ({ icon, label }: InputLabelProps) => {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Label>{label}</Label>
    </Container>
  );
};

export default InputLabel;

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
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 24px;
  margin-right: 16px;
`;

const Label = styled(Text)`
  font-size: 18px;
`;
