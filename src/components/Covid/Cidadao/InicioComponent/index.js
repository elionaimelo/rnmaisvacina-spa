import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Inicio, Access } from "src/components/Covid/Cidadao";

import { ChevronDownIcon } from "@chakra-ui/icons";

export function InicioComponent({ headerBtn }) {
  const widthInicio = useBreakpointValue({ base: "100%", sm: "565px" });

  const sizeText = useBreakpointValue({
    base: "5vmin",
    sm: "4vmin",
    md: "3vmin",
  });
  const sizeNumber = useBreakpointValue({
    base: "8vmin",
    sm: "7vmin",
    md: "5vmin",
  });

  const { ...flexCenter } = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "70%",
    margin: "auto",
    textAlign: "center",
  };

  const clickBtn = (value) => {
    if (typeof headerBtn === "function") {
      headerBtn(value);
    }
  };
  return (
    <Inicio maxW={"100vw"} mt={"67px"} p={0} id="#home">
      <Access w={widthInicio}>
        <Flex {...flexCenter}>
          <Heading>Acesse agora</Heading>
          <Link href="/cidadao/painel">
            <Button
              color={"#fff"}
              fontSize="lg"
              leftIcon={
                <Image
                  src="/assets/icons/icon_user.png"
                  width={"20px"}
                  height={"22px"}
                  layout="fixed"
                  alt=""
                />
              }
              variant="outline"
              fontWeight={600}
              alignItems={"center"}
              w={"100%"}
              borderRadius={5}
              borderWidth={"3px"}
              h={"50px"}
              mt={"36px"}
              mb={"10px"}
            >
              Cidadão
            </Button>
          </Link>
          <Text fontSize="lg" lineHeight={5}>
            Acompanhe os detalhes de suas vacinas e saiba quando tomar as
            próximas doses.
          </Text>
        </Flex>
      </Access>
      <Box w={widthInicio} h={"40%"} bg={"#00B3F3"} color={"#fff"}>
        <Flex {...flexCenter}>
          <Box mb={"15px"}>
            <Text fontSize={sizeText}>PESSOAS CADASTRADAS</Text>
            <Text fontSize={sizeNumber} fontWeight={600}>
              2.711.701
            </Text>
          </Box>
          <Box>
            <Text fontSize={sizeText}>VAGAS DISPONÍVEIS</Text>
            <Text fontSize={sizeNumber} fontWeight={600}>
              908
            </Text>
          </Box>
          <Box w={"fit-content"} onClick={() => clickBtn("monitoring")}>
            {/* <Text fontSize="lg">Veja mais</Text> */}
            <ChevronDownIcon as={"span"} w={12} h={12} />
          </Box>
        </Flex>
      </Box>
    </Inicio>
  );
}
