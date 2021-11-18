import styled from "styled-components";
import { Container, Box } from "@chakra-ui/react";

export const Inicio = styled(Container)`
  height: calc(100vh - 67px);
  width: 100%;
  background-image: url("/assets/images/vacinas_esquistossomose.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom 0 right 30%;
`;

export const Access = styled(Box)`
  height: 60%;
  color: #fff;
  background-image: url("/assets/images/bg-acessar.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const About = styled(Container)`
  @media (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`;

export const AvailableCities = styled(Container)``;

export const Doses = styled(Container)``;

export const Monitoring = styled(Container)``;

export const PriorityGroups = styled(Container)``;
