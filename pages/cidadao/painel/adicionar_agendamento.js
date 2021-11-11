import Head from "next/head";
import { useState } from "react";
import {
  FormLabel,
  Select,
  Text,
  Box,
  Heading,
  Container,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Formik, Field, Form } from "formik";

import { Forms, CardLocaisVacinacao } from "src/components";

import initialValuesForm from "src/objects/AdicionarAgendamento/initialValuesForm.json";
import locaisVacinacao from "src/objects/AdicionarAgendamento/locaisVacinacao.json";
import Drive from "../../../public/assets/icons/icone-drive-thru.svg";
import Pontos from "../../../public/assets/icons/icone-pontos-fixos.svg";

export default function AdicionarAgendamento() {
  const [selectSearch, setSelectSearch] = useState(false);
  const initialValuesAgendamento = {
    ...initialValuesForm,
  };
  const local = locaisVacinacao.locais;
  const [filter, setFilter] = useState(local);
  const totalLocais = filter.map((item) => item.datasDisponiveis.length);
  var total = totalLocais.reduce((total, numero) => total + numero, 0);

  const filterLocal = (value) => {
    if (value === "fixo") {
      const localFixo = local.filter((el) => el.tipo === "ponto fixo");
      setFilter(localFixo);
    } else if (value === "drive") {
      const localDrive = local.filter((el) => el.tipo === "drive thru");
      setFilter(localDrive);
    }
  };

  const loadCards = () => {
    if (filter.length === 0) {
      return (
        <Box bg={"#FFF3CD"} p={4} borderRadius={4} mt={12} color={"#866305"}>
          Nenhum horário encontrado para a busca realizada.
        </Box>
      );
    } else {
      return filter.map((el) => (
        <CardLocaisVacinacao
          local={el.nome}
          tipo={el.tipo}
          endereco={el.endereco}
          vacina={el.vacina}
          datasDisponiveis={el.datasDisponiveis}
        />
      ));
    }
  };

  return (
    <>
      <Head>
        <title>Agendamento</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Forms maxW="container.xl" ms={0} py={"3rem"} px={"5rem"}>
        <Button
          color={"#00b3f3"}
          fontSize="lg"
          mb={"15px"}
          leftIcon={<ArrowBackIcon />}
          variant="link"
          onClick={() => document.location.assign("/cidadao/painel")}
        >
          Voltar
        </Button>
        <Heading mb={"10px"}>Agendamento</Heading>
        <Text fontSize="xl" fontWeight={500} mb={"15px"}>
          Olá, Tayná Martins Ramos . Bem vindo(a) ao agendamento de vacinação do
          RN+ Vacina.
        </Text>
        <Text fontSize="sm" color={"#FF4746"} mb={10} fontWeight={600}>
          Atenção, caso sejam informados dados falsos relacionados ao seu
          agendamento, ele poderá ser cancelado a critério do vacinador ou
          supervisor da sala de vacina (Art. 299 - Código Penal)
        </Text>
        <Container maxW="container.md" ms={0} px={0}>
          <Formik
            initialValues={initialValuesAgendamento}
            onSubmit={(values, actions) => {
              console.log(JSON.stringify(values, null, 2));
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {({
              values,
              handleChange,
              isSubmitting,
              setFieldValue,
              handleBlur,
            }) => (
              <Form className="dependente-form">
                <Field name="campaign">
                  {({ field, form }) => (
                    <Forms.FormControl>
                      <FormLabel htmlFor="campaign">
                        ESCOLHA A CAMPANHA
                      </FormLabel>
                      <Select
                        {...field}
                        placeholder="Selecione"
                        id="campaign"
                        value={values.campaign}
                        size="lg"
                      >
                        <option value="covid-19">COVID-19</option>
                      </Select>
                    </Forms.FormControl>
                  )}
                </Field>

                <Field name="dose">
                  {({ field, form }) => (
                    <Forms.FormControl>
                      <FormLabel htmlFor="dose">
                        INFORME A DOSE QUE DESEJA TOMAR
                      </FormLabel>
                      <Tabs variant="unstyled">
                        <TabList>
                          <Tab
                            _selected={{ color: "white", bg: "#345B76" }}
                            p={4}
                            w={"200px"}
                            borderRadius={4}
                            borderWidth={"1px"}
                            borderColor={"#345b76"}
                            me={3}
                          >
                            1ª Dose
                          </Tab>
                          <Tab
                            _selected={{ color: "white", bg: "#345B76" }}
                            p={4}
                            w={"200px"}
                            borderRadius={4}
                            borderWidth={"1px"}
                            borderColor={"#345b76"}
                          >
                            2ª Dose
                          </Tab>
                        </TabList>
                        <TabPanels mt={6}>
                          <TabPanel p={0}></TabPanel>
                          <TabPanel p={0}>
                            <Field name="whichDose">
                              {({ field, form }) => (
                                <Forms.FormControl>
                                  <FormLabel htmlFor="whichDose">
                                    QUAL FOI A VACINA APLICADA NA PRIMEIRA DOSE?
                                  </FormLabel>
                                  <Select
                                    {...field}
                                    placeholder="Selecione"
                                    id="whichDose"
                                    value={values.whichDose}
                                    size="lg"
                                  >
                                    <option value="JANSSEN">JANSSEN</option>
                                    <option value="Pfizer">Pfizer</option>
                                    <option value="Influenza">Influenza</option>
                                    <option value="Oxford-AstraZeneca">
                                      Oxford-AstraZeneca
                                    </option>
                                    <option value="Coronavac/Butantan">
                                      Coronavac/Butantan
                                    </option>
                                  </Select>
                                </Forms.FormControl>
                              )}
                            </Field>
                          </TabPanel>
                        </TabPanels>
                      </Tabs>
                    </Forms.FormControl>
                  )}
                </Field>

                <Field name="city">
                  {({ field, form }) => (
                    <Forms.FormControl>
                      <FormLabel htmlFor="city">
                        ESCOLHA O MUNICÍPIO ONDE PRETENDE SE VACINAR
                      </FormLabel>
                      <Select
                        {...field}
                        placeholder="Selecione"
                        id="city"
                        value={values.city}
                        size="lg"
                      >
                        <option value="cidade1">cidade1</option>
                        <option value="cidade2">cidade2</option>
                      </Select>
                    </Forms.FormControl>
                  )}
                </Field>

                <Field name="dateVaccine">
                  {({ field, form }) => (
                    <Forms.FormControl>
                      <FormLabel htmlFor="dateVaccine">
                        SELECIONE UMA DATA OU DEIXE EM BRANCO PARA VER OS DIAS
                        DISPONÍVEIS
                      </FormLabel>
                      <Forms.StylishInput
                        {...field}
                        type="date"
                        id="dateVaccine"
                        maxLength="14"
                        value={values.dateVaccine}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        onBlur={(e) => {
                          handleBlur(e);
                        }}
                      />
                    </Forms.FormControl>
                  )}
                </Field>

                <Field name="group">
                  {({ field, form }) => (
                    <Forms.FormControl>
                      <FormLabel htmlFor="group">
                        ESCOLHA SEU GRUPO DE ATENDIMENTO
                      </FormLabel>
                      <Select
                        {...field}
                        placeholder="Selecione"
                        id="group"
                        value={values.group}
                        size="lg"
                      >
                        <option value="outros">Outros - População Geral</option>
                        <option value="...">...</option>
                      </Select>
                    </Forms.FormControl>
                  )}
                </Field>

                <Forms.Button
                  mt={4}
                  isLoading={isSubmitting}
                  type="submit"
                  onClick={() => setSelectSearch(true)}
                >
                  Procurar
                </Forms.Button>
              </Form>
            )}
          </Formik>
        </Container>
        {selectSearch ? (
          <Container maxW="container.xl" ms={0} px={0} mt={12}>
            <Flex justify={"space-between"} alignItems={"center"}>
              <Heading color={"#00b3f3"} size="lg" fontWeight={500}>
                LOCAIS DE VACINAÇÃO ({total})
              </Heading>
              <Flex>
                <Button
                  color={"#00b3f3"}
                  fontSize="lg"
                  leftIcon={<Drive />}
                  variant="outline"
                  h={"45px"}
                  px={"12px"}
                  py={"6px"}
                  fontWeight={400}
                  me={2}
                  onClick={() => filterLocal("drive")}
                >
                  Drive Thru
                </Button>
                <Button
                  color={"#00b3f3"}
                  fontSize="lg"
                  leftIcon={<Pontos />}
                  variant="outline"
                  h={"45px"}
                  px={"12px"}
                  py={"6px"}
                  fontWeight={400}
                  onClick={() => filterLocal("fixo")}
                >
                  Pontos Fixos
                </Button>
              </Flex>
            </Flex>
            {loadCards()}
          </Container>
        ) : (
          <Box bg={"#FFF3CD"} p={4} borderRadius={4} mt={12} color={"#866305"}>
            Utilize o formulário acima para buscar os horários disponíveis.
          </Box>
        )}
      </Forms>
    </>
  );
}
