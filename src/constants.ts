export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};

export const COLORS = {
  white: "60deg 100% 99%",
  black: "0deg 0% 0%",
  gray: {
    300: "214deg 16% 63%",
    500: "225deg 5% 47%" /* secondary */,
    900: "240deg 8% 9%",
  },
  primary: "254deg 83% 64%",
  tertiary: "155deg 61% 44%",
};
