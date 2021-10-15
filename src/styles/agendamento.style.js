import styled from "styled-components";
import { TabPanel } from "@chakra-ui/react";

export const Content = styled.div`
  .data-source {
    display: flex;
    margin-top: 20px;

    h5 {
      font-weight: 600;
      color: #808080;
    }
  }

  .data-source-links {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.links.main.color};
  }
`;

export const TabPage = styled(TabPanel)`
  padding: 30px 40px !important;
`;
