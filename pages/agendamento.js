//import gerais (react/next etc)
import Head from "next/head";

//components
import { Header, Footer } from "src/components";
import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
export default function Agendamento() {
  return (
    <>
      <Head>
        <title>Agendamento</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header auth />
      <Tabs variant="enclosed">
        <TabList bg="#00B3F3" color="#fff">
          <Tab _selected={{ color: "#00B3F3", bg: "#fff" }}>Agendamentos</Tab>
          <Tab _selected={{ color: "#00B3F3", bg: "#fff" }}>Vacinas</Tab>
          <Tab _selected={{ color: "#00B3F3", bg: "#fff" }}>Contatos</Tab>
          <Tab _selected={{ color: "#00B3F3", bg: "#fff" }}>Dependentes</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Agendamentos</p>
          </TabPanel>
          <TabPanel>
            <p>Vacinas</p>
          </TabPanel>
          <TabPanel>
            <p>Contatos</p>
          </TabPanel>
          <TabPanel>
            <p>Dependentes</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Footer />
    </>
  );
}
