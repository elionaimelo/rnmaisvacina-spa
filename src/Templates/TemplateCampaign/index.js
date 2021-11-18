import { Flex } from "@chakra-ui/react";
import { Footer } from "src/components";

export default function TemplateCampaign({ ...props }) {
  return (
    <>
      <Flex direction="column" justify="space-between">
        {props.children}
        <Footer />
      </Flex>
    </>
  );
}
