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

export const TextLink = styled.a`
  ${({ theme }) => theme.mixins.link}
  ${({ theme }) => theme.mixins.underlineSlideInTransition}

  font-weight: 700;
  color: var(--brand);

  &:hover,
  &:active {
    color: var(--text1);
  }
`;

export const Header = styled.h2`
  color: var(--text1);
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 40px;
  margin-top: 64px;
  display: inline-block;
  width: fit-content;
  position: relative;
  scroll-margin-block-start: 16px;

  ::after {
    content: "";
    position: absolute;
    top: -4px;
    bottom: -3px;
    left: -10px;
    right: -32px;
    transform: skew(-12deg);
    background: var(--brand);
    border-radius: 2px;
    z-index: -1;
  }
`;
