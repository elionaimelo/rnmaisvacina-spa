import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyle from "src/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "src/styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
