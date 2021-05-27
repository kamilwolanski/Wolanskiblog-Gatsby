import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;

  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.lightGrey};

  } 
  
  a, button {
    color: inherit;
    text-decoration: inherit;
    font-family: 'Montserrat', sans-serif;
  }

  ul, p {
    margin: 0;
    padding: 0;
  }

`
