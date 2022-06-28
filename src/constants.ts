export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.phone / 16}rem)`, // 600px || 37.5rem
  laptopAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`, // 950px || 59.375rem
  desktopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`, // 1300px || 81.25rem
};

// export const COLORS = {
//   black: "#010101",
//   darkGrey: "#16161a",
//   grey: "#242629",
//   lightGrey: "#72757e",
//   lighterGrey: "#94a1b2",
//   white: "#fffffe",
//   purple: "#7f5af0",
//   green: "#2cb67d",
// };

export const COLORS = {
  black: "0deg 0% 0.4%",
  darkGrey: "240deg 8.3% 9.4%",
  grey: "216deg 6.5% 15.1%",
  lightGrey: "225deg 5% 47.1%",
  lighterGrey: "214deg 16.3% 63.9%",
  white: "60deg 100% 99.8%",
  purple: "254.8deg 83.3% 64.7%",
  green: "155.2deg 61.1% 44.3%",
};
