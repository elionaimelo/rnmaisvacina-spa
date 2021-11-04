import styled from "styled-components";
import { Button, Input, FormControl, Container } from "@chakra-ui/react";

export const Forms = styled(Container)`
  color: #345b77;
  /* & a {
    color: #007bff !important;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
  } */
`;

Forms.Button = styled(Button)`
  background-color: ${({ theme }) =>
    theme.colors.primary.main.color} !important;
  color: #fff;
  height: 60px !important;
  width: 100% !important;
`;

Forms.StylishInput = styled(Input)`
  border-color: ${({ theme }) => theme.colors.borders.main.color} !important;
  height: 60px !important;
`;

Forms.Link = styled.a`
  color: #007bff;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

Forms.FormControl = styled(FormControl)`
  margin-bottom: 15px;
`;
