import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import { QUERIES } from "../constants";

// Self-hosted font stylesheet import
import "/public/fonts/styles.css";

const theme = {
  queries: QUERIES,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
