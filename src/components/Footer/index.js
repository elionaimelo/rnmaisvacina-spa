import { ContainerFooter } from "./style";
import Image from "next/image";
import { Grid, Box } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <ContainerFooter maxW="container.md">
      <h5>Realização</h5>
      <div className="footer-separator"></div>
      <Box maxW="lg">
        <Grid templateColumns="repeat(4, 1fr)" gap={1}>
          <Image
            src="/assets/images/sus.svg"
            layout="fixed"
            width={150}
            height={70}
            alt=""
          />

          <Image
            src="/assets/images/rn.svg"
            layout="fixed"
            width={150}
            height={70}
            alt=""
          />

          <Image
            src="/assets/images/ufrn.svg"
            layout="fixed"
            width={150}
            height={70}
            alt=""
          />
        </Grid>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Image
            src="/assets/images/navi.png"
            layout="fixed"
            width={150}
            height={70}
            alt=""
          />

          <Image
            src="/assets/images/ifrn.png"
            layout="fixed"
            width={150}
            height={70}
            alt=""
          />

          <Image
            src="/assets/images/digti.png"
            layout="fixed"
            width={150}
            height={70}
            alt=""
          />
        </Grid>
      </Box>

      <span>
        2021 © Laboratório de Inovação Tecnológica em Saúde - UFRN. Todos os
        direitos reservados.
      </span>
      <span className="footer-code">j2hv34j32h4v</span>
    </ContainerFooter>
  );
};
