import { Flex } from "@chakra-ui/react";
import { Header, Footer } from "src/components";

export default function TemplateAuth({ ...props }) {
  return (
    <>
      <Flex direction="column" justify="space-between">
        <Header auth />
        {props.children}
        <Footer />
      </Flex>
    </>
  );
}
