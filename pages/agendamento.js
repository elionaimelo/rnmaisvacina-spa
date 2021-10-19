import Head from "next/head";
import Link from "next/link";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Wrap,
  useBreakpointValue,
} from "@chakra-ui/react";

import {
  Header,
  Footer,
  TabTitle,
  CardContact,
  CardVacina,
} from "src/components";
import { Content, TabPage } from "src/styles/agendamento.style";
import Vacinas from "src/objects/Agendamento/Vacinas.json";

export default function Agendamento() {
  const vacinas = Vacinas.vacinas;
  const justifyWrap = useBreakpointValue({ base: "center", md: "row" });

  return (
    <>
      <Head>
        <title>Agendamento</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header auth />
      <Content>
        <Tabs variant="enclosed">
          <TabList bg="#00B3F3" color="#fff">
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
                      segundaDose={el.segunda_dose}
                      dataVacinacaoSegundaDose={el.data_vacinacao_segunda_dose}
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
              <section className="data-source">
                <h5>Fonte dos dados:</h5>
                <div className="data-source-links">
                  {" "}
                  <Link href={"https://www.cosemsrn.org.br/secretarias/"}>
                    <a>COSEMS/RN</a>
                  </Link>
                  <Link href={"http://www.saude.rn.gov.br/"}>
                    <a>SESAP/RN</a>
                  </Link>
                </div>
              </section>
            </TabPage>
            <TabPage>
              <TabTitle>Dependentes</TabTitle>
            </TabPage>
          </TabPanels>
        </Tabs>
      </Content>
      <Footer />
    </>
  );
}
