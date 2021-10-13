import styled from "styled-components";
import { Form } from "formik";
import { Input } from "@chakra-ui/react";

export const FormCustom = styled(Form)`
  .agendamento-form {
    max-width: 330px;
  }

  .agendamento-form input {
    height: 60px;
  }

  .agendamento-form > div {
    margin-bottom: 15px;
  }

  .form-button {
    background-color: ${({ theme }) => theme.colors.primary} !important;
    color: #fff;
    height: 60px;
  }

  .forgot-password {
    color: #007bff;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const StylishInput = styled(Input)`
  border-color: ${({ theme }) => theme.colors.borders.main.color} !important;
  height: 60px !important;
`;
