//import gerais (react/next etc)
import Head from "next/head";

//components
import { FormLogin } from "src/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>RN+ Vacina</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FormLogin />
    </>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      layout: "auth",
    },
  };
};
