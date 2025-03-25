import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;

    --fs-sm: 1.4rem;
    --fs-base: 1.6rem;
    --fs-lg: 2rem;
    --fs-xl: 2.4rem;
    --fs-2xl: 4rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-family: 'Asap', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6;
    color: ${(props) => props.theme['gray-100']};
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    background: ${(props) => props.theme['gray-400']};
    overflow-x: hidden;
  }

  h1, h2, h3 {
    font-family: 'Asap', sans-serif;
  }

  span, strong, p, a {
    font-family: 'Inconsolata', sans-serif;
    line-height: 1.2;
    font-size: 1.6rem;
  }

  h1 {
    font-size: var(--fs-2xl);
  }

  h2 {
    font-size: var(--fs-xl);
  }

  h3 {
    font-size: var(--fs-lg);
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
  }
  
  a:hover {
    background: linear-gradient(
      95deg,
      #9C83FF 57.09%,
      #FF9051 87.74%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    transform: scale(1.1);
  }

  @media (width >= 80em){
    :root {
      --fs-lg: 3.6rem;
      --fs-xl: 4.8rem;
      --fs-2xl: 6.4rem;
    }
  }
`