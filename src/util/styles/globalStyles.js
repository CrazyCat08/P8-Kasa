import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    width: auto;
    font-size: 24px;
    line-height: 1.5;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
  }
  
  @media (max-width: 767px) {
    body {
      font-size: 13px;
      line-height: 1.2;
    }
  }
`

export default GlobalStyle
