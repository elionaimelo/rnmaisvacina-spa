import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 100vw;
    font-family: "Jost";
    min-height: 100vh !important;
  }

  #__next {
    min-height: 100vh;
  }

  a {
    cursor: pointer;
  }

  /* Subforms que aparecem ao clicar em checkboxes específicos */

  .subform-hide {
    display: none;
  }

  @keyframes fader-soon {
    0% {
      opacity: 0;
      display: none;
    }
    100% {
      opacity: 1;
      display: block;
    }
  }

  .subform-appear {
    opacity: 1;
    display: block;
    animation: fader-soon 1s;
  }
  .subform {
    background-color: #f3f3f3;
    padding: 20px;
    border-radius: 5px;
  }

  .subform label {
    margin: 5px 0;
  }
`;

export default GlobalStyle;
