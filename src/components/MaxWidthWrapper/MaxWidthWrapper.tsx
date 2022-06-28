import styled from "styled-components";

const MaxWidthWrapper = styled.div`
  max-width: calc(1100 / 16 * 1rem);
  padding-left: 32px;
  padding-right: 32px;
  margin: 0 auto;

  @media ${(p) => p.theme.mediaQueries.tabletAndUp} {
    padding-left: 48px;
    padding-right: 48px;
  }
`;

export default MaxWidthWrapper;
