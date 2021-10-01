import { useState } from "react";
import { useRouter } from "next/router";
import { Header } from "./header";
import {
  Flex,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

function index() {
  const router = useRouter();
  return (
    <Header>
      <Box className="header-top" bg="#fff" w="100%" color="#00B3F3">
        <h1>RN + VACINA</h1>
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
                    px={router.pathname == "/inicio" ? 1 : 3}
                    borderRadius="3"
                    bg={router.pathname == "/inicio" ? "#00B3F3" : "#fff"}
                    color={router.pathname == "/inicio" ? "#fff" : "#00B3F3"}
                  >
                    Início
                  </Box>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">
                  {" "}
                  <Box
                    as="button"
                    py={1}
                    px={router.pathname == "/" ? 1 : 3}
                    borderRadius="3"
                    bg={router.pathname == "/" ? "#00B3F3" : "#fff"}
                    color={router.pathname == "/" ? "#fff" : "#00B3F3"}
                  >
                    Cidadão
                  </Box>
                </BreadcrumbLink>
              </BreadcrumbItem>
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
    </Header>
  );
}

export default index;
