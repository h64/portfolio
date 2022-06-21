import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/GlobalStyles";
import { QUERIES } from "../constants";

const theme = {
  queries: QUERIES,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
