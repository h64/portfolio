import styled from "styled-components";

export const BtnLink = styled.a`
  ${({ theme }) => theme.mixins.button}
  ${({ theme }) => theme.mixins.backgroundFillTransition}
`;

export const Link = styled.a`
  ${({ theme }) => theme.mixins.link}
  ${({ theme }) => theme.mixins.underlineSlideInTransition}
`;

export const TappableBtn = styled.button`
  ${({ theme }) => theme.mixins.unstyledButton}
  ${({ theme }) => theme.mixins.tappableArea}
`;
