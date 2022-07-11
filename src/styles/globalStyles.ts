import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import cssReset from "./cssReset";

const GlobalStyles = createGlobalStyle`
  ${cssReset};
  ${colors};

  /* GLOBAL STYLES */
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
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
    /* Always show vertical scrollbar */
    overflow-y: scroll;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  body {
    line-height: 1.5;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: var(--surface1);
  }
`;

export default GlobalStyles;
