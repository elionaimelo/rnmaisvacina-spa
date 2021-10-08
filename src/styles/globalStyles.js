import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 100vw;
    font-family: "Jost";
    min-height: 100vh !important;
    
    @media (min-width: 600px) {
      padding-bottom: 10rem;
    }
  }

  #__next {
    min-height: 100vh;
  }

  a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
