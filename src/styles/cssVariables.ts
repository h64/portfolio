import { css } from "styled-components";

const COLORS = {
  black: "0deg 0% 0.4%",
  darkGrey: "240deg 8.3% 9.4%",
  grey: "216deg 6.5% 15.1%",
  lightGrey: "225deg 5% 47.1%",
  lighterGrey: "214deg 16.3% 63.9%",
  white: "60deg 100% 99.8%",
  purple: "254.8deg 83.3% 64.7%",
  green: "155.2deg 61.1% 44.3%",
};

const cssVariables = css`
  :root {
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-background: hsl(${COLORS.darkGrey});
      --color-alt-background: hsl(${COLORS.grey});
      --color-paragraph: hsl(${COLORS.lighterGrey});
      --color-black: hsl(${COLORS.black});
      --color-highlight: hsl(${COLORS.purple});
      --color-primary: hsl(${COLORS.white});
      --color-secondary: hsl(${COLORS.lightGrey});
      --color-tertiary: hsl(${COLORS.green});
      --color-backdrop: hsl(${COLORS.grey} / 0.8);
    }
  }
`;

export default cssVariables;
