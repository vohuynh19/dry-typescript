import { Menu as AntdMenu, MenuProps as AntdMenuProps } from "antd";
import styled from "styled-components";

export const Menu = styled(AntdMenu)`
  background-color: ${({ theme }) => theme.colors.bodyBackground};
`;
export type MenuProps = AntdMenuProps;
