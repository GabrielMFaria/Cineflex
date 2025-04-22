import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
    padding-bottom: 120px;
    background-color:black;
  }

  a {
    text-decoration: none;
  }

  input, button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
