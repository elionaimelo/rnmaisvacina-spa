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
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FlexCustom, Title } from "./header.style";
// import logo from "src/assets/images/logo.svg";

export const Header = ({ auth }) => {
  const router = useRouter();

  const style = {
    marginRight: 10,
    color: router.pathname === "/recuperar_senha" ? true : false,
  };

  return (
    <>
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
          h="220px"
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
                    <BreadcrumbLink href="/inicio">
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
          h="220px"
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
                    <BreadcrumbLink href="/inicio">
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
              <div className="header-bottom-text">
                <Title>Cartão Digital de Vacinação</Title>
              </div>
            </FlexCustom>
          </Container>
        </Box>
      )}
    </>
  );
};

// export default index;
