import styled from 'styled-components';

const TimingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const TimingButton = styled.button`
  background-color: #444;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  flex: 1 0 30%; /* Adjusted to allow more buttons in a row */
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const TimePickerContainer = styled.div``;

const TimePicker = () => {
  return (
    <TimePickerContainer>
      <TimingsContainer>
        {[
          '12:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
        ].map((time) => (
          <TimingButton key={time}>{time}</TimingButton>
        ))}
      </TimingsContainer>
    </TimePickerContainer>
  );
};

export default TimePicker;
