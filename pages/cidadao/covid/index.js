import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Flex,
  Button,
  Heading,
  Text,
  useBreakpointValue,
  Grid,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import {
  Doses,
  Monitoring,
  PriorityGroups,
} from "src/components/Covid/Cidadao";
import {
  AboutComponent,
  AvailableCitiesComponent,
  InicioComponent,
  MonitoringComponent,
  PriorityGroupsComponent,
  DosesComponent,
} from "src/components";

import { HamburgerIcon } from "@chakra-ui/icons";

export default function HomePage() {
  const [active, setActive] = useState("home");
  const mobile = useBreakpointValue({ base: true, sm: false });

  const styleButton = {
    color: "#345b77",
    variant: "ghost",
    borderRadius: 0,
    _hover: { bg: "none" },
    _focus: { borderColor: "none" },
    px: 3,
  };

  const styleButtonActive = {
    color: "#00B3F3",
    variant: "ghost",
    borderRadius: 0,
    _hover: { bg: "none" },
    _focus: { borderColor: "none" },
    borderColor: "#00B3F3",
    borderBottomWidth: "3px",
    px: 3,
  };

  const btnHeader = (value) => {
    setActive(value);

    document.getElementById(`#${value}`).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>RN + Vacina Cidadão</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box
        className="header-top"
        bg="#fff"
        w="100%"
        color="#00B3F3"
        position={"fixed"}
        zIndex={99}
        display={"flex"}
        alignItems={"center"}
        pe={4}
      >
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
        {!mobile ? (
          <Flex>
            <Button
              {...(active === "home" ? styleButtonActive : styleButton)}
              onClick={() => btnHeader("home")}
            >
              Início
            </Button>
            <Button
              {...(active === "about" ? styleButtonActive : styleButton)}
              onClick={() => btnHeader("about")}
            >
              Sobre o +Vacina
            </Button>
            <Button
              {...(active === "monitoring" ? styleButtonActive : styleButton)}
              onClick={() => btnHeader("monitoring")}
            >
              Monitoramento
            </Button>
          </Flex>
        ) : (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              px={4}
            />
            <MenuList w={"100vw"}>
              <MenuItem
                onClick={() => btnHeader("home")}
                {...(active === "home" ? styleButtonActive : styleButton)}
                fontWeight={600}
                py={2}
              >
                Início
              </MenuItem>
              <MenuItem
                onClick={() => btnHeader("about")}
                {...(active === "about" ? styleButtonActive : styleButton)}
                fontWeight={600}
                py={2}
              >
                Sobre o +Vacina
              </MenuItem>
              <MenuItem
                onClick={() => btnHeader("monitoring")}
                {...(active === "monitoring" ? styleButtonActive : styleButton)}
                fontWeight={600}
                py={2}
              >
                Monitoramento
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>

      <InicioComponent headerBtn={btnHeader} />
      <AboutComponent />
      <AvailableCitiesComponent />

      <DosesComponent />
      <MonitoringComponent />
      <PriorityGroupsComponent />
    </>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      layout: "campaign",
    },
  };
};
