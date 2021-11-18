import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Doses } from "src/components/Covid/Cidadao";

export function DosesComponent() {
  const templateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(3, 1fr)",
  });

  return (
    <Doses id="#doses" maxW={"100vw"} p={0} color={"#345b77"}>
      <Heading align={"center"} mb={4} fontSize={"3xl"} fontWeight={500}>
        DOSES RECEBIDAS E DISTRIBUÍDAS PELO RIO GRANDE DO NORTE
      </Heading>
      <Divider borderWidth={2} borderColor={"#00B3F3"} w={"100vw"} />
      <Container maxW={"container.lg"} mb={12} mt={12}>
        <Grid templateColumns={templateColumns} gap={5}>
          <GridItem>
            <Box
              borderColor={"#00B3F3"}
              borderWidth={1}
              borderRadius={3}
              align={"center"}
            >
              <Box bg={"#00B3F3"} color={"#fff"} fontSize={"lg"} p={4}>
                DOSES RECEBIDAS
              </Box>
              <Box p={4}>
                <Flex direction={"column"}>
                  <Text fontWeight={500} color={"#00B3F3"} fontSize={"lg"}>
                    Vacina X
                  </Text>
                  <Text fontSize={"2xl"} fontWeight={700}>
                    511
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Text>
              Legenda: D1 - Primeira Dose; D2 - Segunda Dose; <br />
              Du - Dose Única; Dr - Dose Reforço.
            </Text>
          </GridItem>
          <GridItem>
            <Box
              borderColor={"#00B3F3"}
              borderWidth={1}
              borderRadius={3}
              align={"center"}
            >
              <Box bg={"#00B3F3"} color={"#fff"} fontSize={"lg"} p={4}>
                DOSES DISTRIBUíDAS PARA OS MUNICÍPIOS
              </Box>
              <Box p={4}>
                <Flex direction={"column"}>
                  <Text fontWeight={500} color={"#00B3F3"} fontSize={"lg"}>
                    Vacina X
                  </Text>
                  <Text fontSize={"2xl"} fontWeight={700}>
                    511
                  </Text>
                </Flex>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              borderColor={"#00B3F3"}
              borderWidth={1}
              borderRadius={3}
              align={"center"}
            >
              <Box bg={"#00B3F3"} color={"#fff"} fontSize={"lg"} p={4}>
                DOSES DISPONÍVEIS/ESTOQUE
              </Box>
              <Box p={4}>
                <Flex direction={"column"}>
                  <Text fontWeight={500} color={"#00B3F3"} fontSize={"lg"}>
                    Vacina X
                  </Text>
                  <Text fontSize={"2xl"} fontWeight={700}>
                    511
                  </Text>
                </Flex>
              </Box>
            </Box>
          </GridItem>
        </Grid>
        <Flex justify={"flex-end"}>
          <Text align={"end"}>
            Fonte dos dados: SESAP/RN <br /> Atualizado em: 04/11/2021 às 15:10
          </Text>
        </Flex>
      </Container>
    </Doses>
  );
}
