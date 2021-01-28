import { createGlobalStyle, ThemeProvider } from 'styled-components';
import DB from '../db.json';

const GlobalStyle = createGlobalStyle`
    *{
      box-sizing:border-box;
    }

  body {
    margin: 0;
    padding: 0;

    color:${({theme}) => {theme.colors.contrastText }};
    display:flex;
    flex-direction:column;
  }

  html, body{
    min-height:100vh;
    min-width:100vw;
  }

  #__next{
    flex:1;
    display:flex;
    flex-direction:column;
  }
`

const theme = DB.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
