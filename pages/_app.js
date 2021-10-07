import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyle from "src/styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
