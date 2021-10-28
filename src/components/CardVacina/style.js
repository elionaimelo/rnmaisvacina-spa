import styled from "styled-components";
import { Box, Button, AlertDialog } from "@chakra-ui/react";

export const Content = styled.div`
  margin: 10px auto;

  .boxes-info {
    margin: ${(props) => (props.moreDoses ? "30px 0 auto 0" : "auto 0")};
  }
`;

export const BoxVacina = styled(Box)`
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  padding: 15px;
  width: 300px;
  height: 250px;
  border-radius: 3px 3px 0px 0px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonVacina = styled(Button)`
  color: ${({ theme }) => theme.colors.primary.main.color};
  background-color: #fff !important;
  width: 100% !important;
  border-radius: 0px 0px 3px 3px !important;
`;

export const ModalContent = styled(AlertDialog)`
  .modal-form-label {
    width: 100% !important;
  }
`;

export const FieldModal = styled.div`
  width: 100%;
`;
