import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import Vacinas from "src/objects/Painel/Vacinas.json";
import strings from "src/objects/CertificadoVacinacao/LangStrings.js";

export default function CertificadoVacinacao() {
  const vacinas = Vacinas.vacinas;
  const router = useRouter();
  const { language } = router.query;
  const [content, setContent] = useState(strings.pt_br);
  useEffect(() => {
    if (language === "en_us") {
      setContent(strings.en_us);
    } else if (language === "es_es") {
      setContent(strings.es_es);
    } else {
      setContent(strings.pt_br);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Certificado de Vacinação</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Heading size="xl" align={"center"} mb={6}>
        {content.TITLE}
      </Heading>
      {content.DESCRIPTION(
        "Fulado de tal",
        "000.000.000.-00",
        "000 0000 0000 0000"
      )}
      <Box bg={"#F6F6F6"} p={10} my={4}>
        {vacinas.map((el) => {
          return (
            <Box mb={20}>
              <Text fontWeight={600}>{el.nome}:</Text>
              <Box ms={4}>
                <Text fontWeight={600}>
                  {content.MANUFACTURER}
                  <Text as="span" fontWeight={400} ms={2}>
                    {el.nome} (Lote {el.lote})
                  </Text>
                </Text>
                <Text fontWeight={600}>
                  {content.PLACE}
                  <Text as="span" fontWeight={400} ms={2}>
                    {el.estabelecimento_saude}
                  </Text>
                </Text>
                <Text fontWeight={600}>
                  {content.DATE}
                  <Text as="span" fontWeight={400} ms={2}>
                    {el.data_vacinacao}
                  </Text>
                </Text>
                <Text fontWeight={600}>
                  {content.DOSE}
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
          <Text ms={4}>{content.VERIFY}</Text>
        </Flex>
      </Box>
      <Text align={"center"} mb={3} fontWeight={600}>
        {content.AUTHKEY}
      </Text>
      <Text align={"center"} mb={3}>
        e516cS67843562dsafe6d3fa834d8c3bd
      </Text>
      <Text align={"center"} mb={3} fontWeight={600}>
        {content.ISSUE}
      </Text>
      <Text align={"center"} mb={3}>
        23 de Outubro de 2021 às 16:43
      </Text>
      <Text align={"center"} mb={3} fontWeight={600}>
        {content.VISIT}
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
