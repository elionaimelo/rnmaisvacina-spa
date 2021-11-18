import React from "react";

import {
  Box,
  Container,
  Heading,
  useBreakpointValue,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { About } from "src/components/Covid/Cidadao";

export function AboutComponent() {
  const cardAbout = useBreakpointValue({ base: "250px", md: "300px" });
  const gridColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
  });

  return (
    <About
      maxW={"100vw"}
      bg={"#FFFFFF"}
      py={"120px"}
      px={"80px"}
      display={"flex"}
      justifyContent={"space-between"}
      id="#about"
    >
      <Box pe={"30px"} mb={"12"}>
        <Heading size="3xl" fontWeight={300}>
          Sobre o
        </Heading>
        <Heading size="3xl" fontWeight={700} color={"#00B3F3"}>
          +vacina
        </Heading>
      </Box>
      <Grid templateColumns={gridColumns} gap={"30px"} h={"fit-content"}>
        <GridItem h={"fit-content"}>
          <Container maxW={cardAbout} p={0}>
            <Heading fontSize={"3xl"} color={"#fd7d4e"}>
              +Vacinação
            </Heading>
            <Box mt={2}>
              Permite maior controle sobre as doses de vacinas, reduzindo
              desperdícios e ampliando a governança dos processos, centrado na
              experiência do profissional de saúde e cidadão.
            </Box>
          </Container>
        </GridItem>
        <GridItem h={"fit-content"}>
          <Container maxW={cardAbout} p={0}>
            <Heading fontSize={"3xl"} color={"#26c962"}>
              +Transparente
            </Heading>
            <Box mt={2}>
              Cartão virtual de vacina para o cidadão e sistema de monitoramento
              das doses aplicadas, movimentação de estoque, rastreio das vacinas
              em tempo real, na palma da mão.
            </Box>
          </Container>
        </GridItem>
        <GridItem h={"fit-content"}>
          <Container maxW={cardAbout} p={0}>
            <Heading fontSize={"3xl"} color={"#ebd543"}>
              +Simples
            </Heading>
            <Box mt={2}>
              Sistema integrado que permite o rastreio da vacina, desde seu
              recebimento na Central Estadual de Rede de Frio até aplicação na
              sala de vacina em uma interface web intituitiva e acessível.
            </Box>
          </Container>
        </GridItem>
        <GridItem h={"fit-content"}>
          <Container maxW={cardAbout} p={0}>
            <Heading fontSize={"3xl"} color={"#007d91"}>
              +Inteligente
            </Heading>
            <Box mt={2}>
              Cruzamento de dados que identifica incidentes, gera alertas e
              relatórios inteligentes centrados na experiência do cidadão e
              profissional da saúde.
            </Box>
          </Container>
        </GridItem>
      </Grid>
    </About>
  );
}
