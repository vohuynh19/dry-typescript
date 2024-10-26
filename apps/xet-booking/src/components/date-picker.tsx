import React, { useCallback, useMemo, useState } from 'react';
import {
  DatePickerView,
  PickerView,
  Text,
} from '@dry-typescript/ui-react-design-system';
import moment from 'moment';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

/**
 * Component Region
 */

type Props = {
  date: Date;
  onChange: (date: Date) => void;
};

const DatePicker = ({ date, onChange }: Props) => {
  const { t } = useTranslation('common');
  const { columns } = useDateColums();

  const labelRenderer = useCallback(
    (type: string, data: number) => {
      switch (type) {
        case 'year':
          return t('date.renderYear', {
            value: data,
          });
        case 'month':
          return t('date.renderMonth', {
            value: data,
          });
        case 'day':
          return t('date.renderDay', {
            value: data,
          });
        default:
          return data;
      }
    },
    [t],
  );

  const [hour, setHour] = useState(moment(date).hour());
  const [minute, setMinute] = useState(moment(date).minute());

  return (
    <DatePickerContainer>
      <DatePickerLabel>{t('label.date')}</DatePickerLabel>

      <DatePickerContent>
        <DatePickerView
          precision="day"
          renderLabel={labelRenderer}
          min={new Date()}
          max={moment().add(2, 'years').toDate()}
          value={date}
          onChange={(value) =>
            onChange(
              moment(value)
                .clone()
                .startOf('day')
                .add(hour, 'hour')
                .add(minute, 'minute')
                .toDate(),
            )
          }
        />
      </DatePickerContent>

      <DatePickerLabel>{t('label.time')}</DatePickerLabel>

      <DatePickerContent>
        <PickerView
          value={[hour, minute]}
          columns={[columns.hourColumns, columns.minuteColumns]}
          onChange={(value) => {
            setHour(value[0] as number);
            setMinute(value[1] as number);
            onChange(
              moment(date)
                .clone()
                .startOf('day')
                .add(value[0], 'hour')
                .add(value[1], 'minute')
                .toDate(),
            );
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

/**
 * Constant Region
 */

export const useDateColums = () => {
  const { t } = useTranslation('common');

  const columns = useMemo(() => {
    const hourColumns = [
      {
        label: t('date.renderHour', {
          value: '07',
        }),
        value: 7,
      },
      {
        label: t('date.renderHour', {
          value: '08',
        }),
        value: 8,
      },
      {
        label: t('date.renderHour', {
          value: '09',
        }),
        value: 9,
      },
      {
        label: t('date.renderHour', {
          value: '10',
        }),
        value: 10,
      },
      {
        label: t('date.renderHour', {
          value: '11',
        }),
        value: 11,
      },
      {
        label: t('date.renderHour', {
          value: '12',
        }),
        value: 12,
      },
      {
        label: t('date.renderHour', {
          value: '13',
        }),
        value: 13,
      },
      {
        label: t('date.renderHour', {
          value: '14',
        }),
        value: 14,
      },
      {
        label: t('date.renderHour', {
          value: '15',
        }),
        value: 15,
      },
      {
        label: t('date.renderHour', {
          value: '16',
        }),
        value: 16,
      },
      {
        label: t('date.renderHour', {
          value: '17',
        }),
        value: 17,
      },
      {
        label: t('date.renderHour', {
          value: '18',
        }),
        value: 18,
      },
      {
        label: t('date.renderHour', {
          value: '19',
        }),
        value: 19,
      },
      {
        label: t('date.renderHour', {
          value: '20',
        }),
        value: 20,
      },
      {
        label: t('date.renderHour', {
          value: '21',
        }),
        value: 21,
      },
    ];

    const minuteColumns = [
      {
        label: t('date.renderMinute', {
          value: '00',
        }),
        value: 0,
      },
      {
        label: t('date.renderMinute', {
          value: '15',
        }),
        value: 15,
      },
      {
        label: t('date.renderMinute', {
          value: '30',
        }),
        value: 30,
      },
      {
        label: t('date.renderMinute', {
          value: '45',
        }),
        value: 45,
      },
    ];

    return { hourColumns, minuteColumns };
  }, [t]);

  const getDefaultDate = useCallback(() => {
    const { hourColumns } = columns;
    const maxValidHour = hourColumns[hourColumns.length - 1].value; // Maximum valid hour from hourColumns
    const now = moment();

    if (now.hour() < maxValidHour) {
      return moment().startOf('day').toDate();
    }
    return moment().startOf('day').add(1, 'day').toDate();
  }, [columns]);

  const getDefaultTime = useCallback(() => {
    const { hourColumns, minuteColumns } = columns;
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
  }, [columns]);

  return {
    getDefaultDate,
    getDefaultTime,
    columns,
  };
};

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
    color: ${({ theme }) => theme.colors.text};
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
    color: ${({ theme }) => theme.colors.text};
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
