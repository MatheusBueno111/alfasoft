import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body  {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.white};
  }

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

`

export default GlobalStyle
