import React from "react";

import {
  Box,
  Container,
  Flex,
  Button,
  Heading,
  Text,
  Divider,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { AvailableCities } from "src/components/Covid/Cidadao";

export function AvailableCitiesComponent() {
  const groupedOptions = [
    { value: "VT", label: "Vermont" },
    { value: "VI", label: "Virgin Islands" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
  ];
  return (
    <AvailableCities
      id="#availableCities"
      maxW={"100vw"}
      p={0}
      color={"#345b77"}
    >
      <Heading align={"center"} mb={4} fontSize={"3xl"} fontWeight={500}>
        MUNICÍPIOS DISPONÍVEIS PARA AGENDAMENTO
      </Heading>
      <Divider borderWidth={2} borderColor={"#00B3F3"} w={"100vw"} />
      <Container maxW={"container.lg"} mb={12}>
        <Text my={5}>Se preferir, digite o nome do município desejado.</Text>
        <FormControl mb={10} maxW={"400px"}>
          {/* <FormLabel>chakra-react-select demo</FormLabel> */}
          <Select
            name="city"
            options={groupedOptions}
            placeholder="Digite o nome do município"
            closeMenuOnSelect={false}
            selectedOptionStyle="check"
          />
        </FormControl>
        <Box
          borderColor={"#00B3F3"}
          borderWidth={1}
          borderRadius={3}
          maxW={"210px"}
          align={"center"}
        >
          <Box
            bg={"#00B3F3"}
            color={"#fff"}
            fontSize={"xl"}
            fontWeight={500}
            p={4}
          >
            CIDADE
          </Box>
          <Box p={4}>
            <Flex justify={"space-around"}>
              <Flex direction={"column"}>
                <Text fontWeight={300}>COVID-19</Text>
                <Text fontSize={"2xl"} fontWeight={700}>
                  511
                </Text>
              </Flex>
              <Flex direction={"column"}>
                <Text fontWeight={300}>INFLUENZA</Text>
                <Text fontSize={"2xl"} fontWeight={700}>
                  0
                </Text>
              </Flex>
            </Flex>
            <Text mt={5} fontSize={"lg"}>
              Vagas disponíveis
            </Text>
          </Box>
        </Box>
        <Flex w={"100%"} justify={"flex-end"}>
          <Button
            mt={5}
            px={12}
            py={7}
            bg={"#00B3F3"}
            borderRadius={3}
            color={"#fff"}
          >
            Ver mais
          </Button>
        </Flex>
      </Container>
    </AvailableCities>
  );
}