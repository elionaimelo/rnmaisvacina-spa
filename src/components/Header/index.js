import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// import { Container } from "./header.style";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  FlexCustom,
  Title,
  ButtonHeader,
  ContainerHeader,
} from "./header.style";
// import logo from "src/assets/images/logo.svg";

export const Header = ({ auth }) => {
  const router = useRouter();
  const direction = useBreakpointValue({ base: "column", lg: "row" });
  const size = useBreakpointValue({ base: "full", lg: "min" });

  const style = {
    marginRight: 10,
    color: router.pathname === "/recuperar_senha" ? true : false,
  };

  return (
    <ContainerHeader>
      <Box className="header-top" bg="#fff" w="100%" color="#00B3F3">
        <Container maxW="container.xl">
          <Link href="/">
            <a>
              <Image
                src="/assets/images/logo.svg"
                width={170}
                height={60}
                layout="fixed"
                alt=""
              />
            </a>
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
                    isCurrentPage={
                      router.pathname == "/agendamento" ? true : false
                    }
                  >
                    <BreadcrumbLink href="/agendamento">
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
                    src="/assets/images/profile.png"
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
    </ContainerHeader>
  );
};

// export default index;
