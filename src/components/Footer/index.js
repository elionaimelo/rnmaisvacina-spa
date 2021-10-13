import { ContainerFooter } from "./style";
import Image from "next/image";
import { Flex, Box } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

export const Footer = () => {
  const direction = useBreakpointValue({ base: "column", md: "row" });
  return (
    <ContainerFooter>
      <h5>Realização</h5>
      <div className="footer-separator"></div>
      <Flex justifyContent="center" alignItems="center">
        <Box
          maxW="md"
          display="flex"
          flexDirection={direction}
          justifyContent="center"
          style={{ gap: 20 }}
        >
          <Image
            src="/assets/images/sus.svg"
            layout="fixed"
            width={150}
            height={40}
            alt=""
          />
          <Image
            src="/assets/images/gov.svg"
            layout="fixed"
            width={190}
            height={50}
            alt=""
          />
          <Image
            src="/assets/images/ufrn.svg"
            layout="fixed"
            width={210}
            height={50}
            alt=""
          />
          <Image
            src="/assets/images/lais.svg"
            layout="fixed"
            width={200}
            height={40}
            alt=""
          />
        </Box>
      </Flex>
      <Flex justifyContent="center" alignItems="center" my={25} mb={35}>
        <Box
          maxW="md"
          display="flex"
          justifyContent="center"
          alignItems="end"
          flexDirection={direction}
          style={{ gap: 20 }}
        >
          <Image
            src="/assets/images/navi.png"
            layout="fixed"
            width={150}
            height={40}
            alt=""
          />
          <Image
            src="/assets/images/ifrn.png"
            layout="fixed"
            width={160}
            height={42}
            alt=""
          />
          <Image
            src="/assets/images/digti.png"
            layout="fixed"
            width={121}
            height={30}
            alt=""
          />
        </Box>
      </Flex>
      <span style={{ marginTop: 40 }}>
        2021 © Laboratório de Inovação Tecnológica em Saúde - UFRN. Todos os
        direitos reservados.
      </span>
      <span className="footer-code">j2hv34j32h4v</span>
    </ContainerFooter>
  );
};
