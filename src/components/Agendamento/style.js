import styled from "styled-components";
import { TabPanel } from "@chakra-ui/react";

export const TabPage = styled(TabPanel)`
  padding: 30px 40px !important;
`;

export const TabTitle = styled.div`
  color: ${({ theme }) => theme.colors.secondary.main.color};
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;
