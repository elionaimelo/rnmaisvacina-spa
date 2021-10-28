import Head from "next/head";
import Link from "next/link";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Wrap,
  useBreakpointValue,
  Flex,
  Heading,
  Container,
} from "@chakra-ui/react";

import { CardContact, CardVacina } from "src/components";
import { TabPage, TabTitle } from "@/components/Agendamento/style";
import Vacinas from "src/objects/Agendamento/Vacinas.json";

export default function Agendamento() {
  const vacinas = Vacinas.vacinas;
  const justifyWrap = useBreakpointValue({ base: "center", md: "row" });
  const overflow = useBreakpointValue({ base: "auto", md: "hidden" });

  return (
    <>
      <Head>
        <title>Agendamento</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxW="container.xl">
        <Tabs variant="enclosed" mt={"-41px"}>
          <TabList
            bg="#00B3F3"
            color="#fff"
            border={"none"}
            overflowX={overflow}
            overflowY={"hidden"}
          >
            <Tab _selected={{ color: "#00B3F3", bg: "#fff" }}>Agendamentos</Tab>
            <Tab _selected={{ color: "#00B3F3", bg: "#fff" }}>Vacinas</Tab>
            <Tab _selected={{ color: "#00B3F3", bg: "#fff" }}>Contatos</Tab>
            <Tab _selected={{ color: "#00B3F3", bg: "#fff" }}>Dependentes</Tab>
          </TabList>
          <TabPanels>
            <TabPage>
              <TabTitle>Agendamentos</TabTitle>
            </TabPage>
            <TabPage>
              <TabTitle>Vacinas</TabTitle>
              <Wrap spacing="20px" justify={justifyWrap}>
                {vacinas.map((el) => {
                  return (
                    <CardVacina
                      nome={el.nome}
                      dataVacinacao={el.data_vacinacao}
                      segundaDose={el.dose_complementar}
                      dataVacinacaoSegundaDose={
                        el.data_vacinacao_dose_complementar
                      }
                      inicioPrevisao={el.inicio_previsao}
                      fimPrevisao={el.fim_previsao}
                      fabricante={el.fabricante}
                      lote={el.lote}
                      profissionalAplicador={el.profissional_aplicador}
                      estabelecimentoSaude={el.estabelecimento_saude}
                    />
                  );
                })}
              </Wrap>
            </TabPage>
            <TabPage>
              <TabTitle>Contatos</TabTitle>
              <CardContact municipio="Natal" />
              <Flex mt={"20px"} className="data-source">
                <Heading size="sm" color="#808080" fontWeight={"600"}>
                  Fonte dos dados:
                </Heading>
                <Flex ms={"8px"} direction="column" color="#007bff">
                  {" "}
                  <Link href={"https://www.cosemsrn.org.br/secretarias/"}>
                    <a>COSEMS/RN</a>
                  </Link>
                  <Link href={"http://www.saude.rn.gov.br/"}>
                    <a>SESAP/RN</a>
                  </Link>
                </Flex>
              </Flex>
            </TabPage>
            <TabPage>
              <TabTitle>Dependentes</TabTitle>
            </TabPage>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
}
