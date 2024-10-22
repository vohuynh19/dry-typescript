import React, { useCallback, useEffect, useState } from 'react';
import { Text } from '@dry-typescript/ui-react-design-system';
import { DatePickerView, PickerView } from 'antd-mobile';
import moment from 'moment';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

/**
 * Component Region
 */

type Props = {
  onChange: (date: Date) => void;
};

const DatePicker = ({ onChange }: Props) => {
  const { t } = useTranslation('common');

  const labelRenderer = useCallback((type: string, data: number) => {
    switch (type) {
      case 'year':
        return data;
      case 'month':
        return 'Tháng ' + data;
      case 'day':
        return 'Ngày ' + data;

      default:
        return data;
    }
  }, []);

  const defaultTime = getDefaultTime();
  const [date, setDate] = useState(moment());
  const [hour, setHour] = useState(defaultTime.hour);
  const [minute, setMinute] = useState(defaultTime.minute);

  useEffect(() => {
    onChange(date.add(hour, 'hour').add(minute, 'minute').toDate());
  }, [date, hour, minute, onChange]);

  return (
    <DatePickerContainer>
      <DatePickerLabel>{t('label.date')}</DatePickerLabel>

      <DatePickerContent>
        <DatePickerView
          precision="day"
          renderLabel={labelRenderer}
          min={new Date()}
          max={moment().add(2, 'years').toDate()}
          value={date.toDate()}
          onChange={(value) => setDate(moment(value))}
        />
      </DatePickerContent>

      <DatePickerLabel>{t('label.time')}</DatePickerLabel>

      <DatePickerContent>
        <PickerView
          value={[hour, minute]}
          columns={[hourColumns, minuteColumns]}
          onChange={(value) => {
            setHour(value[0] as number);
            setMinute(value[1] as number);
          }}
        />
      </DatePickerContent>
    </DatePickerContainer>
  );
};

export default DatePicker;

/**
 * Helper Region
 */

const getDefaultTime = () => {
  const now = moment();
  const minValidHour = hourColumns[0].value; // Minimum valid hour from hourColumns
  const maxValidHour = hourColumns[hourColumns.length - 1].value; // Maximum valid hour from hourColumns
  const currentHour = now.hour();
  const currentMinute = now.minute();

  let hour = currentHour;
  let minute = currentMinute;

  // If hour is less than the minimum valid hour, set to minimum
  if (hour < minValidHour) {
    hour = minValidHour;
    minute = minuteColumns[0].value; // Set minute to the first valid minute
  }
  // If hour is greater than the maximum valid hour, set to maximum
  else if (hour > maxValidHour) {
    hour = maxValidHour;
    minute = minuteColumns[0].value; // Set minute to the first valid minute
  }
  // If hour is within valid range
  else {
    // If minute is greater than the maximum valid minute, increase hour by 1 and set minute to the first valid minute
    if (minute > minuteColumns[minuteColumns.length - 1].value) {
      hour += 1;
      minute = minuteColumns[0].value; // Set minute to the first valid minute
    }
    // If minute is less than the first valid minute, set to the first valid minute
    else if (minute < minuteColumns[0].value) {
      minute = minuteColumns[0].value;
    }
    // Round up to the nearest valid minute
    else {
      for (let i = 0; i < minuteColumns.length; i++) {
        if (minute < minuteColumns[i].value) {
          minute = minuteColumns[i].value;
          break;
        }
      }
    }
  }
  return { hour, minute };
};

/**
 * Constant Region
 */

const hourColumns = [
  { label: '07', value: 7 },
  { label: '08', value: 8 },
  { label: '09', value: 9 },
  { label: '10', value: 10 },
  { label: '11', value: 11 },
  { label: '12', value: 12 },
  { label: '13', value: 13 },
  { label: '14', value: 14 },
  { label: '15', value: 15 },
  { label: '16', value: 16 },
  { label: '17', value: 17 },
  { label: '18', value: 18 },
  { label: '19', value: 19 },
  { label: '20', value: 20 },
  { label: '21', value: 21 },
];

const minuteColumns = [
  { label: '00', value: 0 },
  { label: '15', value: 15 },
  { label: '30', value: 30 },
  { label: '45', value: 45 },
];

/**
 * Styled region
 */
export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;

  padding-bottom: 24px;

  .adm-picker-view {
    color: white;
    height: 200px;
  }

  .adm-picker-view-column {
    background-color: ${({ theme }) => theme.colors.background};
  }

  .adm-picker-view-mask-top {
    background-color: ${({ theme }) => theme.colors.background};
  }

  .adm-picker-view-mask-middle {
    border-color: ${({ theme }) => theme.colors.divider};
  }

  .adm-picker-view-column-item-active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
  }

  .adm-picker-view-mask-bottom {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const DatePickerLabel = styled(Text)`
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

export const DatePickerContent = styled.div`
  height: 200px;
`;

export const StyledDatePicker = styled(DatePickerView)``;
