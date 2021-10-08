//import gerais (react/next etc)
import Head from "next/head";

//components
import { Header, Footer } from "src/components";
import FormLogin from "@/components/FormLogin";
import { ContentCustom } from "@/components/ContentCustom/style";

export default function Home() {
  return (
    <>
      <Head>
        <title>RN+ Vacina</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContentCustom>
        <Header />
        <FormLogin />
      </ContentCustom>
      <Footer />
    </>
  );
}
