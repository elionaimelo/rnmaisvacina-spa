import { ChakraProvider, Flex } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "src/styles/globalStyles";
import theme from "src/styles/theme";
import TemplateWrapper from "src/Templates/TemplateWrapper";

// import { Header, Footer } from "src/components";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <GlobalStyle />
        {/* <Flex direction="column" justify="space-between"> */}
        {/* <Header auth /> */}
        <TemplateWrapper {...pageProps}>
          <Component {...pageProps} />
        </TemplateWrapper>
        {/* <Footer /> */}
        {/* </Flex> */}
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
