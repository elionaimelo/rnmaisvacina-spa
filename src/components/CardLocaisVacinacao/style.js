import styled from "styled-components";
import { Box, Button } from "@chakra-ui/react";

export const CardLocal = styled(Box)`
  display: flex;
  flex-direction: ${(props) => props.direction};
  padding: 10px;
  border-radius: 3px 3px 0px 0px !important;
  border-width: 2px 2px 2px 10px;
  border-color: ${({ theme }) => theme.colors.primary.main.color};
  margin: 15px 0;
`;
