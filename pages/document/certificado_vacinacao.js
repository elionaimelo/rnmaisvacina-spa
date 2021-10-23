import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import Vacinas from "src/objects/Agendamento/Vacinas.json";

export default function CertificadoVacinacao() {
  const vacinas = Vacinas.vacinas;
  console.log(vacinas);
  return (
    <>
      <Head>
        <title>Certificado de Vacinação</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Heading size="xl" align={"center"} mb={6}>
        Certificado
      </Heading>
      <Text>
        Certificamos que,{" "}
        <Text as="span" fontWeight={600}>
          Fulando dos Santos Medeiros
        </Text>
        , CPF{" "}
        <Text as="span" fontWeight={600}>
          999.999.999-99
        </Text>
        , CNS{" "}
        <Text as="span" fontWeight={600}>
          000 0000 0000 0000
        </Text>
        , teve os seguintes registros de vacinação inseridos na plataforma RN +
        Vacina Cidadão:
      </Text>
      <Box bg={"#F6F6F6"} p={10} my={4}>
        {vacinas.map((el) => {
          return (
            <Box mb={20}>
              <Text fontWeight={600}>{el.nome}:</Text>
              <Box ms={4}>
                <Text fontWeight={600}>
                  Vacina:
                  <Text as="span" fontWeight={400} ms={2}>
                    {el.nome} (Lote {el.lote})
                  </Text>
                </Text>
                <Text fontWeight={600}>
                  Unidade de Saúde:
                  <Text as="span" fontWeight={400} ms={2}>
                    {el.estabelecimento_saude}
                  </Text>
                </Text>
                <Text fontWeight={600}>
                  Data da Aplicação:
                  <Text as="span" fontWeight={400} ms={2}>
                    {el.data_vacinacao}
                  </Text>
                </Text>
                <Text fontWeight={600}>
                  Dose Aplicada:
                  <Text as="span" fontWeight={400} ms={2}>
                    {el.dose}ª Dose
                  </Text>
                </Text>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box bg={"#F6F6F6"} p={10} my={4}>
        <Flex>
          <Image
            src="/assets/images/gov.svg"
            layout="fixed"
            width={100}
            height={30}
            alt=""
          />
          <Text ms={4}>
            Escaneie e consulte de maneira fácil e rápida a autenticidade do
            certificado.
          </Text>
        </Flex>
      </Box>
      <Text align={"center"} mb={3} fontWeight={600}>
        Chave de Autenticação
      </Text>
      <Text align={"center"} mb={3}>
        e516cS67843562dsafe6d3fa834d8c3bd
      </Text>
      <Text align={"center"} mb={3} fontWeight={600}>
        Emitido em
      </Text>
      <Text align={"center"} mb={3}>
        23 de Outubro de 2021 às 16:43
      </Text>
      <Text align={"center"} mb={3} fontWeight={600}>
        Consultar autenticidade do certificado em:
      </Text>
      <Text align={"center"} mb={3} color="#007bff">
        <Link align={"center"} href={"cidadao/autenticidade/"}>
          <a>rnmaisvacina.lais.ufrn.br/cidadao/autenticidade/</a>
        </Link>
      </Text>
    </>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      layout: "docs",
    },
  };
};
