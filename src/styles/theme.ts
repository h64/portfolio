import mixins from "./mixins";

const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.phone / 16}rem)`, // 600px || 37.5rem
  laptopAndUp: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`, // 950px || 59.375rem
  desktopAndUp: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`, // 1300px || 81.25rem
};

const theme = {
  mediaQueries: QUERIES,
  breakpoints: BREAKPOINTS,
  mixins,
};

export default theme;
