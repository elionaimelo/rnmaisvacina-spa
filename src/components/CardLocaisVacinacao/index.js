import { useState } from "react";
import {
  Text,
  Divider,
  Flex,
  Heading,
  Box,
  Wrap,
  WrapItem,
  useBreakpointValue,
  Collapse,
  Button,
} from "@chakra-ui/react";
import Drive from "../../../public/assets/icons/icone-drive-thru-dark.svg";
import Pontos from "../../../public/assets/icons/icone-pontos-fixos-dark.svg";
import { CardLocal } from "./style";

export function CardLocaisVacinacao({
  local,
  tipo,
  endereco,
  vacina,
  datasDisponiveis,
}) {
  const direction = useBreakpointValue({ base: "column", md: "row" });
  const directionInverse = useBreakpointValue({ base: "column", md: "row" });
  const alignment = useBreakpointValue({ base: "center", md: "auto" });
  const width = useBreakpointValue({ base: "100%", md: "45%" });
  const borderWidth = useBreakpointValue({ base: 0, md: 1 });
  const marginText = useBreakpointValue({ base: 7, md: "auto" });
  const justify = useBreakpointValue({ base: "center", md: "auto" });

  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      {datasDisponiveis.map((el) => (
        <CardLocal direction={direction}>
          <Flex direction={"column"}>
            <Flex direction={directionInverse} alignItems={"center"}>
              <Box
                borderColor={"#345b77"}
                borderRadius={3}
                borderWidth={"1px"}
                px={4}
                py={"2px"}
                me={2}
              >
                {tipo === "ponto fixo" ? <Pontos /> : <Drive />}
              </Box>
              <Heading color={"#00b3f3"} fontSize="md">
                {vacina.nome} | {el.data}
              </Heading>
            </Flex>
            <Text fontWeight={600} mt={"4px"} align={alignment}>
              {local}
            </Text>
            <Text my={1} align={alignment}>
              {endereco}
            </Text>
            <Box my={1}>
              <Text>Grupos Prioritários:</Text>
              <Text fontWeight={600} align={alignment}>
                {vacina.grupoPrioritario}
              </Text>
            </Box>
            <Box my={1}>
              <Text>Faixa etária:</Text>
              <Text fontWeight={600} align={alignment}>
                {vacina.faixaEtaria}
              </Text>
            </Box>
            <Box my={1}>
              <Text>Vacina:</Text>
              <Text fontWeight={600} align={alignment}>
                {vacina.fabricante}
              </Text>
            </Box>
          </Flex>

          <Divider
            orientation="vertical"
            borderWidth={borderWidth}
            mx={4}
            h={"auto"}
          />
          <Flex direction={"column"} maxW={width}>
            <Text align={"center"} fontWeight={600} my={marginText}>
              Data indisponível devido ao prazo mínimo para a próxima dose.
            </Text>
            <Heading my={5} fontWeight={500} fontSize="lg" align={"center"}>
              Horários disponíveis
            </Heading>
            <Collapse startingHeight={"200px"} in={show}>
              <Wrap spacing="20px" justify={justify}>
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
            </Collapse>
            <Button
              mx={"auto"}
              w={"fit-content"}
              bg={"#345b77"}
              color={"#fff"}
              onClick={handleToggle}
              mt={4}
            >
              Ver {show ? "menos" : "mais"}
            </Button>
          </Flex>
        </CardLocal>
      ))}
    </>
  );
}
