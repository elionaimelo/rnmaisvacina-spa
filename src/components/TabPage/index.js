import styled from "styled-components";
import { TabPanel, Button } from "@chakra-ui/react";

export const TabPage = styled(TabPanel)`
  padding: 30px 40px !important;
`;

TabPage.Title = styled.div`
  color: ${({ theme }) => theme.colors.secondary.main.color};
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

TabPage.AddButton = styled(Button)`
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  background-color: ${({ theme }) =>
    theme.colors.primary.main.color} !important;
  height: 60px !important;
`;
