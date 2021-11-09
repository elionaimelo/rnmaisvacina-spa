import {
  Text,
  Divider,
  Flex,
  Heading,
  Box,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Drive from "../../../public/assets/icons/icone-drive-thru.svg";
import Pontos from "../../../public/assets/icons/icone-pontos-fixos.svg";
import { CardLocal } from "./style";

export function CardLocaisVacinacao({
  local,
  tipo,
  endereco,
  vacina,
  datasDisponiveis,
}) {
  return (
    <>
      {datasDisponiveis.map((el) => (
        <CardLocal>
          <Flex direction={"column"}>
            <Heading color={"#00b3f3"} fontSize="md">
              {vacina.nome} | {el.data}
            </Heading>
            <Text fontWeight={600}>{local}</Text>
            <Text my={1}>{endereco}</Text>
            <Box my={1}>
              <Text>Grupos Prioritários:</Text>
              <Text fontWeight={600}>{vacina.grupoPrioritario}</Text>
            </Box>
            <Box my={1}>
              <Text>Faixa etária:</Text>
              <Text fontWeight={600}>{vacina.faixaEtaria}</Text>
            </Box>
            <Box my={1}>
              <Text>Vacina:</Text>
              <Text fontWeight={600}>{vacina.fabricante}</Text>
            </Box>
          </Flex>

          <Divider orientation="vertical" borderWidth={1} mx={4} h={"auto"} />
          <Flex direction={"column"} maxW={"45%"}>
            <Text align={"center"} fontWeight={600}>
              Data indisponível devido ao prazo mínimo para a próxima dose.
            </Text>
            <Heading my={5} fontWeight={500} fontSize="lg" align={"center"}>
              Horários disponíveis
            </Heading>
            <Wrap spacing="20px">
              {el.horariosDisponiveis.map((item) => (
                <Flex direction={"column"}>
                  <Text fontSize="xs" align={"end"} pe={2}>
                    Vagas
                  </Text>
                  <WrapItem
                    borderColor={"#345b77"}
                    borderRadius={3}
                    borderWidth={"1px"}
                    fontSize={"15px"}
                  >
                    <Box px={2} py={1}>
                      {item.horario}h
                    </Box>
                    <Box px={2} py={1} bg={"#345b77"} color={"#fff"}>
                      {item.vagas}
                    </Box>
                  </WrapItem>
                </Flex>
              ))}
            </Wrap>
          </Flex>
        </CardLocal>
      ))}
    </>
  );
}
