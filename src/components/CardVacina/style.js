import styled from "styled-components";
import { Box, Button } from "@chakra-ui/react";

export const Content = styled.div`
  margin: 30px auto;
`;

export const BoxVacina = styled(Box)`
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  padding: 15px;
  max-width: 300px;
  border-radius: 3px 3px 0px 0px !important;
`;

export const ButtonVacina = styled(Button)`
  color: ${({ theme }) => theme.colors.primary.main.color};
  background-color: #fff !important;
  width: 100% !important;
  max-width: 300px;
  border-radius: 0px 0px 3px 3px !important;
`;
