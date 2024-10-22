import { Text } from '@dry-typescript/ui-react-design-system';
import { DatePickerView } from 'antd-mobile';
import styled from 'styled-components';

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

export const StyledDatePicker = styled(DatePickerView)`
  /* background-color: #000; */
`;
