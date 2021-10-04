import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container } from "./header.style";
import {
  Flex,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import logo from "src/assets/images/logo.svg";

export const Header = () => {
  const router = useRouter();
  return (
    <Container>
      <Box className="header-top" bg="#fff" w="100%" color="#00B3F3">
        <Image unsized src={logo} alt="" />
      </Box>
      <Box
        className="header-bottom"
        bg="#00B3F3"
        w="100%"
        color="#fff"
        h="15vh"
      >
        <Flex direction="column">
          <div>
            <Breadcrumb
              spacing="8px"
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

              {router.pathname == "/recuperar_senha" && (
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
            <h1>Bem-vindo ao RN + Vacina Cidadão,</h1>
            <span>
              Acompanhe os detalhes de suas vacinas e saiba quando tomar as
              próximas doses.
            </span>
          </div>
        </Flex>
      </Box>
    </Container>
  );
};

// export default index;
