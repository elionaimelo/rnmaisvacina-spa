import styled from "styled-components";
import { Flex, Button, Box, ModalContent } from "@chakra-ui/react";

export const FlexCustom = styled(Flex)`
  height: 100%;

  .header-bottom-text {
    margin: 3rem 0;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const ButtonHeader = styled(Button)`
  margin-right: 15px;
  margin-bottom: 10px;
  padding: 10px;
  /* width: 100% !important; */
`;

export const Flag = styled(Box)`
  border-radius: 5px;
  overflow: hidden;
  width: 75px;
  height: 55px;

  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const ContentModal = styled(ModalContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  margin: auto 15px;
`;
