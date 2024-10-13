import { Layout as AntdLayout } from "antd";
import styled from "styled-components";

export const Layout = styled(AntdLayout)`
  .ant-layout-header {
    padding: 0 24px;
    background-color: ${({ theme }) => theme.colors.headerBackground};
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.divider}`};
  }

  .ant-layout-sider {
    background-color: ${({ theme }) => theme.colors.bodyBackground};
    border-right: ${({ theme }) => `1px solid ${theme.colors.divider}`};
    position: absolute;
    height: 100%;

    @media ${({ theme }) => theme.devices.tablet} {
      position: static;
    }
  }

  .ant-layout-content {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.bodyBackground};
  }
`;
