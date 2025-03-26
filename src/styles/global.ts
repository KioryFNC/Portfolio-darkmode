import { createGlobalStyle } from "styled-components";
import background from '../assets/Background.png'

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
    background: url(${background}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  overflow-x: hidden;
  }

  h1, h2, h3 {
    font-family: 'Asap', sans-serif;
  }

  span, strong, p, a {
    font-family: 'Inconsolata', sans-serif;
    line-height: 1.2;
    font-size: var(--fs-base);
  }

  h1 {
    font-size: var(--fs-2xl);
    text-align: center;
  }

  h2 {
    font-size: var(--fs-xl);
    text-align: center;
  }

  h3 {
    font-size: var(--fs-lg);
    text-align: center;
    background: linear-gradient(
      95deg,
#80E961 35%,
#00B3FF 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  h4 {
    font-size: var(--fs-base)
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
  }
  
  a:hover {
    background: linear-gradient(
      95deg,
      #80E961 35%,
      #00B3FF 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    transform: scale(1.1);
  }

  @media (width >= 80em){
    :root {
      --fs-base: 2rem;
      --fs-lg: 3.6rem;
      --fs-xl: 4.8rem;
      --fs-2xl: 6.4rem;
    }
  }
`