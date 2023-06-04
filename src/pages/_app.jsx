import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Theme } from "../styles/Theme";

function App({ Component, pageProps }) {
  return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default App;
