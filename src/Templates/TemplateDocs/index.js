import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { Flex, Container } from "@chakra-ui/react";
import { useReactToPrint } from "react-to-print";

export default function TemplateDocs({ ...props }) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  useEffect(() => {
    handlePrint();
  }, []);
  return (
    <Container maxW={"720px"} m={"auto"} py={10} ref={componentRef}>
      <Flex pb={10}>
        <Image
          priority
          src="/assets/images/sus.svg"
          layout="fixed"
          width={300}
          height={60}
          alt=""
        />
        <Image
          priority
          src="/assets/images/logo.svg"
          layout="fixed"
          width={300}
          height={60}
          alt=""
        />
        <Image
          priority
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
          priority
          src="/assets/images/ufrn.svg"
          layout="fixed"
          width={95}
          height={35}
          alt=""
        />
        <Image
          priority
          src="/assets/images/lais.svg"
          layout="fixed"
          width={95}
          height={25}
          alt=""
        />
        <Image
          priority
          src="/assets/images/navi.png"
          layout="fixed"
          width={95}
          height={25}
          alt=""
        />
        <Image
          priority
          src="/assets/images/digti.png"
          layout="fixed"
          width={95}
          height={25}
          alt=""
        />
        <Image
          priority
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
