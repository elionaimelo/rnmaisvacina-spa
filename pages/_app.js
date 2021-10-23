import { ChakraProvider, Flex } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "src/styles/globalStyles";
import theme from "src/styles/theme";
import TemplateWrapper from "src/Templates/TemplateWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <GlobalStyle />
        <TemplateWrapper {...pageProps}>
          <Component {...pageProps} />
        </TemplateWrapper>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
