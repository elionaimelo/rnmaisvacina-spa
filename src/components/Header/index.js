import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalHeader,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  FlexCustom,
  Title,
  ButtonHeader,
  Flag,
  ContentModal,
} from "./header.style";

export const Header = ({ auth }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const direction = useBreakpointValue({ base: "column", lg: "row" });
  const size = useBreakpointValue({ base: "full", lg: "min" });

  const style = {
    marginRight: 10,
    color: router.pathname === "/recuperar_senha" ? true : false,
  };

  const goToDoc = (flag) => {
    if (typeof window !== "undefined") {
      if (flag === "es") {
        document.location.assign(
          "/document/certificado_vacinacao?language=es_es"
        );
      } else if (flag === "us") {
        document.location.assign(
          "/document/certificado_vacinacao?language=en_us"
        );
      } else {
        document.location.assign("/document/certificado_vacinacao");
      }
    }
  };

  return (
    <>
      <Box className="header-top" bg="#fff" w="100%" color="#00B3F3">
        <Container maxW="container.xl">
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              width={170}
              height={60}
              layout="fixed"
              alt=""
            />
          </Link>
        </Container>
      </Box>
      {!auth ? (
        <Box
          className="header-bottom"
          bg="#00B3F3"
          w="100%"
          color="#fff"
          minH="220px"
          py={5}
        >
          <Container maxW="container.xl" h="100%">
            <FlexCustom direction="column" justifyContent="center">
              <div>
                <Breadcrumb
                  spacing="8px"
                  mb={6}
                  separator={<ChevronRightIcon boxSize={5} color="#fff" />}
                >
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                      <Box
                        as="button"
                        py={1}
                        px={3}
                        borderRadius="3"
                        bg="#fff"
                        color="#00B3F3"
                      >
                        Início
                      </Box>
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem
                    isCurrentPage={router.pathname == "/" ? true : false}
                  >
                    <BreadcrumbLink href="/">
                      {" "}
                      <Box
                        as="button"
                        py={1}
                        px={1}
                        borderRadius="3"
                        bg="#00B3F3"
                        color="#fff"
                      >
                        Cidadão
                      </Box>
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  {style.color && (
                    <BreadcrumbItem isCurrentPage>
                      <BreadcrumbLink href="/recuperar_senha">
                        {" "}
                        <Box
                          as="button"
                          py={1}
                          px={1}
                          borderRadius="3"
                          bg="#00B3F3"
                          color="#fff"
                        >
                          Redefinição de senha
                        </Box>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  )}
                </Breadcrumb>
              </div>
              <div className="header-bottom-text">
                <Title>Bem-vindo ao RN + Vacina Cidadão,</Title>
                <span>
                  Acompanhe os detalhes de suas vacinas e saiba quando tomar as
                  próximas doses.
                </span>
              </div>
            </FlexCustom>
          </Container>
        </Box>
      ) : (
        <Box
          className="header-bottom"
          bg="#00B3F3"
          w="100%"
          color="#fff"
          minH="220px"
          py={5}
        >
          <Container maxW="container.xl" h="100%">
            <FlexCustom
              w={{ sm: "90%", md: "70%", lg: "auto" }}
              mx={{ base: "auto", lg: "0" }}
              direction="column"
              justifyContent="center"
            >
              <div>
                <Breadcrumb
                  spacing="8px"
                  mb={6}
                  separator={<ChevronRightIcon boxSize={5} color="#fff" />}
                >
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                      <Box
                        as="button"
                        py={1}
                        px={3}
                        borderRadius="3"
                        bg="#fff"
                        color="#00B3F3"
                      >
                        Início
                      </Box>
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbItem
                    isCurrentPage={router.pathname == "/painel" ? true : false}
                  >
                    <BreadcrumbLink href="/painel">
                      {" "}
                      <Box
                        as="button"
                        py={1}
                        px={1}
                        borderRadius="3"
                        bg="#00B3F3"
                        color="#fff"
                      >
                        Cartão Digital de Vacinação
                      </Box>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              </div>
              <Flex
                align={{ base: "flex-start", lg: "center" }}
                justify="flex-start"
                direction={direction}
              >
                <Flex align="center" mb={{ base: "4", lg: "0" }}>
                  <Image
                    src="/assets/icons/profile.png"
                    layout="fixed"
                    width={80}
                    height={80}
                    alt=""
                  />
                  <Flex direction="column" ms={4} me={20}>
                    <span>Olá,</span>
                    <span>Nome do usuário</span>
                  </Flex>
                </Flex>
                <ButtonHeader boxSize={size} bg="#fff" color="#00b3f3">
                  Perfil
                </ButtonHeader>
                <ButtonHeader
                  boxSize={size}
                  colorScheme="#00b3f3"
                  variant="outline"
                >
                  <Link href="/document/declaracao_autocadastro">
                    <a>Declaração de Autocadastro</a>
                  </Link>
                </ButtonHeader>
                <ButtonHeader
                  boxSize={size}
                  colorScheme="#00b3f3"
                  variant="outline"
                  onClick={onOpen}
                >
                  Certificado de Vacinação
                </ButtonHeader>
                <ButtonHeader
                  boxSize={size}
                  colorScheme="#00b3f3"
                  variant="outline"
                >
                  Sair
                </ButtonHeader>
              </Flex>
              <div className="header-bottom-text">
                <Title>Cartão Digital de Vacinação</Title>
              </div>
            </FlexCustom>
          </Container>
        </Box>
      )}
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ContentModal>
          <ModalHeader>Selecione o idioma desejado:</ModalHeader>
          <Flex>
            <Flag onClick={() => goToDoc("br")}>
              <Image
                src="/assets/images/flag-br.svg"
                layout="fixed"
                width={75}
                height={55}
                alt=""
              />
            </Flag>
            <Flag onClick={() => goToDoc("us")}>
              <Image
                src="/assets/images/flag-us.svg"
                layout="fixed"
                width={75}
                height={55}
                alt=""
              />
            </Flag>
            <Flag onClick={() => goToDoc("es")}>
              <Image
                src="/assets/images/flag-es.svg"
                layout="fixed"
                width={75}
                height={55}
                alt=""
              />
            </Flag>
          </Flex>
        </ContentModal>
      </Modal>
    </>
  );
};
