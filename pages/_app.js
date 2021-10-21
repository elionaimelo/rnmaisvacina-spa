import { ChakraProvider, Flex } from "@chakra-ui/react";
import GlobalStyle from "src/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "src/styles/theme";
import { Header, Footer } from "src/components";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <GlobalStyle />
        <Flex direction="column" justify="space-between">
          <Header auth />
          <Component {...pageProps} />
          <Footer />
        </Flex>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
