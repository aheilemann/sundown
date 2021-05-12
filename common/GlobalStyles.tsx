import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: Helvetica Neue;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
  box-sizing: border-box;
  }
`;

export default GlobalStyles;
