import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['gray-400']};
  }

  h1, h2 {
    font-family: 'Inconsolata', sans-serif;
  }

  span, strong, p {
    font-family: 'Asap', sans-serif;
  }
`