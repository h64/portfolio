import { css } from "styled-components";

const colors = css`
  :root {
    color-scheme: dark;

    --brand-hue: 200deg;
    --brand-saturation: 100%;
    --brand-lightness: 50%;

    --brand: hsl(
      var(--brand-hue) calc(var(--brand-saturation) / 1.25)
        calc(var(--brand-lightness) / 1.25)
    );
    --text1: hsl(var(--brand-hue) 15% 75%);
    --text2: hsl(var(--brand-hue) 10% 61%);
    --surface1: hsl(var(--brand-hue) 10% 20%);
    --surface2: hsl(var(--brand-hue) 10% 25%);
    --surface3: hsl(var(--brand-hue) 5% 30%);
    --surface4: hsl(var(--brand-hue) 5% 35%);
    --surface4-transparent: hsl(var(--brand-hue) 10% 25% / 0.8);
    --surfaceShadow: var(--brand-hue) 30% 13%;
    --shadowStrength: 0.2;
  }
`;

export default colors;
