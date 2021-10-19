import Image from "next/image";
import { Box, Text, Flex, HStack } from "@chakra-ui/react";
import { TimeIcon, CheckIcon } from "@chakra-ui/icons";

import "./style";
import { Content, BoxVacina, ButtonVacina } from "./style";

export function CardVacina() {
  return (
    <Content>
      <BoxVacina color="#fff">
        <Flex justify="start" align="center" mb={8}>
          <Image
            src="/assets/images/seringa.png"
            layout="fixed"
            height={33}
            width={33}
            alt=""
          />
          <Flex align="start" direction="column" ms={2}>
            <Text fontSize="md" fontWeight={600}>
              Vacina:
            </Text>
            <Text fontSize="md">COVID-19 - Pfizer</Text>
          </Flex>
        </Flex>
        <Box p={3} borderRadius={3} bg="#fff" color="#79cef7">
          <Flex align="center" justify="space-between">
            <HStack spacing="10px">
              <Image
                src="/assets/images/remedio.png"
                alt=""
                layout="fixed"
                height={25}
                width={15}
              />
              <Text fontSize="sm">1ª Dose: 10/08/2021</Text>
            </HStack>
            {/* <Text fontSize="sm">✔</Text> */}
            <CheckIcon color="#79cef7" />
          </Flex>
        </Box>
        <Box p={3} borderRadius={3} mt={1} bg="#FFDE00" color="#79cef7">
          <Flex align="center" justify="space-between">
            <HStack spacing="10px">
              <Image
                src="/assets/images/remedio.png"
                alt=""
                layout="fixed"
                height={25}
                width={15}
              />
              <Flex align="start" direction="column">
                <Text fontSize="sm" fontWeight={600}>
                  Data prevista para segunda dose:
                </Text>
                <Text fontSize="sm">entre 05/10 e 08/11/2021</Text>
              </Flex>
            </HStack>
            <TimeIcon color="#000000" />
          </Flex>
        </Box>
      </BoxVacina>
      <ButtonVacina>Ver Detalhes</ButtonVacina>
    </Content>
  );
}
