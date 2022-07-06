import { createGlobalStyle } from "styled-components";
import cssReset from "./cssReset";
import cssVariables from "./cssVariables";

const GlobalStyles = createGlobalStyle`
  ${cssReset};
  ${cssVariables};

  /* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #__next {
    isolation: isolate;
  }

  html, body, #__next {
    height: 100%;
  } 

  html {
    /* Always show vertical scrollbar - Reduce CLS */
    overflow-y: scroll;
  }



  body {
    line-height: 1.5;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  /* Apply OS color scheme - particularly nice for free navbar styles */
  :root {
    color-scheme: light dark;
    /* accent-color: var(--color-highlight); */
  }

  /* Increased readability in dark mode
    https://css-tricks.com/dark-mode-and-variable-fonts/ */
  @media (prefers-color-scheme: dark) {
    body {
      font-weight: 350;
      /* background-color: var(--color-background); */
    } 
  }
  
  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }
`;

export default GlobalStyles;
