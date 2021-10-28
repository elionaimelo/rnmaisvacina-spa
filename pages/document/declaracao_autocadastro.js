import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Flex, Text, Box } from "@chakra-ui/react";
export default function DeclaracaoAutocadastro() {
  return (
    <>
      <Head>
        <title>Declaração de Autocadastro</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
        </Text>{" "}
        foi cadastrado na plataforma RN + Vacinas Cidadão em 09/08/2021 às
        21:07, informando os seguintes dados:
      </Text>
      <Box bg={"#F6F6F6"} p={10} my={4}>
        <Text fontWeight={600}>Grupo de atendimento:</Text>
        <Text>Outros - População Geral</Text>
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
            Escaneie e consulte de maneira fácil e rápida a autenticidade da
            declaração.
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
        Consultar autenticidade da declaração em:
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
