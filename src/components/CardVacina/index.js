import React from "react";
import Image from "next/image";
import {
  Box,
  Text,
  Flex,
  Button,
  HStack,
  Wrap,
  WrapItem,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogOverlay,
  AlertDialogContent,
  useDisclosure,
  FormLabel,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react";
import { TimeIcon, CheckIcon } from "@chakra-ui/icons";

import "./style";
import {
  Content,
  BoxVacina,
  ButtonVacina,
  ModalContent,
  FieldModal,
} from "./style";

export function CardVacina({
  nome,
  dataVacinacao,
  segundaDose,
  dataVacinacaoSegundaDose,
  inicioPrevisao,
  fimPrevisao,
  fabricante,
  lote,
  profissionalAplicador,
  estabelecimentoSaude,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const size = useBreakpointValue({
    base: "lg",
    md: "3xl",
    sm: "md",
  });
  //   const widthField = "48%";
  const widthField = useBreakpointValue({
    base: "90%",
    md: "48%",
    sm: "48%",
  });

  return (
    <>
      <WrapItem>
        <Content segundaDose={segundaDose}>
          <BoxVacina color="#fff" boxShadow="2xl">
            <Flex justify="start" align="center">
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
                <Text fontSize="md">{nome}</Text>
              </Flex>
            </Flex>
            <section className="boxes-info">
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
                    <Text fontSize="sm">1ª Dose: {dataVacinacao}</Text>
                  </HStack>
                  <CheckIcon color="#79cef7" />
                </Flex>
              </Box>
              {segundaDose && (
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
                        <Text fontSize="sm">
                          entre {inicioPrevisao} e {fimPrevisao}
                        </Text>
                      </Flex>
                    </HStack>
                    <TimeIcon color="#000000" />
                  </Flex>
                </Box>
              )}
            </section>
          </BoxVacina>
          <ButtonVacina onClick={onOpen}>Ver Detalhes</ButtonVacina>
        </Content>
      </WrapItem>

      {dataVacinacaoSegundaDose !== null && (
        <WrapItem>
          <Content segundaDose={segundaDose}>
            <BoxVacina color="#fff" boxShadow="2xl">
              <Flex justify="start" align="center">
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
                  <Text fontSize="md">{nome}</Text>
                </Flex>
              </Flex>
              <section className="boxes-info">
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
                      <Text fontSize="sm">
                        2ª Dose: {dataVacinacaoSegundaDose}
                      </Text>
                    </HStack>
                    <CheckIcon color="#79cef7" />
                  </Flex>
                </Box>
              </section>
            </BoxVacina>
            <ButtonVacina onClick={onOpen}>Ver Detalhes</ButtonVacina>
          </Content>
        </WrapItem>
      )}

      <ModalContent
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size={size}
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <Box bg="#00b3f3" color="#fff">
            <AlertDialogHeader p={3}>
              <Flex align="center" justify="space-between">
                <Flex>
                  <Image
                    src="/assets/images/seringa.png"
                    layout="fixed"
                    height={33}
                    width={33}
                    alt=""
                  />
                  <Text fontSize="2xl" fontWeight={600}>
                    Vacina:
                  </Text>
                </Flex>
                <Button
                  ref={cancelRef}
                  onClick={onClose}
                  color="#00b3f3"
                  bg="#fff"
                  borderRadius={3}
                  fontWeight={400}
                >
                  Fechar
                </Button>
              </Flex>
            </AlertDialogHeader>
          </Box>
          <AlertDialogBody color="#345b77">
            <HStack spacing="10px" mt={2}>
              <Image
                src="/assets/images/remedio.png"
                alt=""
                layout="fixed"
                height={25}
                width={15}
              />
              <Text fontSize="md" fontWeight={600}>
                {nome}
              </Text>
            </HStack>
            <Wrap justify="space-around" align="flex-end" my={8}>
              <WrapItem width={widthField}>
                <FieldModal>
                  <FormLabel className="modal-form-label">
                    DATA DIGITAÇÃO:
                  </FormLabel>
                  <Input isReadOnly variant="filled" value={dataVacinacao} />
                </FieldModal>
              </WrapItem>
              <WrapItem width={widthField}>
                <FieldModal>
                  <FormLabel className="modal-form-label">
                    DATA VACINAÇÃO:
                  </FormLabel>
                  <Input isReadOnly variant="filled" value={dataVacinacao} />
                </FieldModal>
              </WrapItem>
              <WrapItem width={widthField}>
                <FieldModal>
                  <FormLabel className="modal-form-label">
                    FABRICANTE DA VACINA:
                  </FormLabel>
                  <Input isReadOnly variant="filled" value={fabricante} />
                </FieldModal>
              </WrapItem>
              <WrapItem width={widthField}>
                <FieldModal>
                  <FormLabel className="modal-form-label">LOTE:</FormLabel>
                  <Input isReadOnly variant="filled" value={lote} />
                </FieldModal>
              </WrapItem>
              <WrapItem width={widthField}>
                <FieldModal>
                  <FormLabel className="modal-form-label">
                    PROFISSIONAL APLICADOR:
                  </FormLabel>
                  <Input
                    isReadOnly
                    variant="filled"
                    value={profissionalAplicador}
                  />
                </FieldModal>
              </WrapItem>
              <WrapItem width={widthField}>
                <FieldModal>
                  <FormLabel className="modal-form-label">
                    ESTABELECIMENTO DE SAÚDE:
                  </FormLabel>
                  <Input
                    isReadOnly
                    variant="filled"
                    value={estabelecimentoSaude}
                  />
                </FieldModal>
              </WrapItem>
            </Wrap>
          </AlertDialogBody>
        </AlertDialogContent>
      </ModalContent>
    </>
  );
}
