export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndUp: `(min-width: ${BREAKPOINTS.phone / 16}rem)`, // 600px || 37.5rem
  tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`, // 950px || 59.375rem
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`, // 1300px || 81.25rem
};

export const COLORS = {
  black: "#010101",
  darkGrey: "#16161a",
  grey: "#242629",
  lightGrey: "#72757e",
  lighterGrey: "#94a1b2",
  white: "#fffffe",
  purple: "#7f5af0",
  green: "#2cb67d",
};
