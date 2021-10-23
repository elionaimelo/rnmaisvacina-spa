import Image from "next/image";
import { Flex, Container } from "@chakra-ui/react";
export default function TemplateDocs({ ...props }) {
  return (
    <Container maxW={"720px"} m={"auto"} py={10}>
      <Flex pb={10}>
        <Image
          src="/assets/images/sus.svg"
          layout="fixed"
          width={300}
          height={60}
          alt=""
        />
        <Image
          src="/assets/images/logo.svg"
          layout="fixed"
          width={300}
          height={60}
          alt=""
        />
        <Image
          src="/assets/images/gov.svg"
          layout="fixed"
          width={300}
          height={60}
          alt=""
        />
      </Flex>
      {props.children}
      <Flex pt={10} justify={"space-around"} align={"center"}>
        <Image
          src="/assets/images/ufrn.svg"
          layout="fixed"
          width={95}
          height={35}
          alt=""
        />
        <Image
          src="/assets/images/lais.svg"
          layout="fixed"
          width={95}
          height={25}
          alt=""
        />
        <Image
          src="/assets/images/navi.png"
          layout="fixed"
          width={95}
          height={25}
          alt=""
        />
        <Image
          src="/assets/images/digti.png"
          layout="fixed"
          width={95}
          height={25}
          alt=""
        />
        <Image
          src="/assets/images/ifrn.png"
          layout="fixed"
          width={95}
          height={25}
          alt=""
        />
      </Flex>
    </Container>
  );
}
