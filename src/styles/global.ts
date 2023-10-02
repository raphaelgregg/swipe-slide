import { createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    /* a cada 1rem será considerado 10px */
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EFEFEF;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
`