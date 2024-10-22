import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Step = styled.div<{ $active: boolean }>`
  flex: 1;
  height: 4px;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.divider};
  margin: 0 4px;
`;

const SimpleSteps = (props: { currentStep: number; maxStep: number }) => {
  const { currentStep, maxStep } = props;
  return (
    <Wrapper>
      {Array.from({ length: maxStep }, (_, index) => (
        <Step
          key={index}
          style={{
            margin: index === 0 ? '0' : '0 4px',
            marginRight: index === maxStep - 1 ? '0' : '4px',
          }}
          $active={index < currentStep}
        />
      ))}
    </Wrapper>
  );
};

export default SimpleSteps;
