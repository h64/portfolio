// underline animation, focus outline fill animation

import Link from "next/link";
import styled, { css } from "styled-components";

interface StyledLinkProps {
  href: string /* potentially missing functionality from UrlObject */;
  children: string;
  type?: "fill" | "underline";
}

const StyledLink = ({ href, children, type }: StyledLinkProps) => {
  return (
    <Link href={href} passHref>
      <NativeAnchor href={href} type={type}>
        {children}
      </NativeAnchor>
    </Link>
  );
};

const fillAnimation = css`
  --fade-in-time: 200ms;
  --fade-out-time: 500ms;
  background-color: var(--color-background);
  border: 1px solid var(--color-highlight);
  padding: 8px 16px;
  border-radius: 4px;

  transition: background-color var(--fade-in-time);

  &:hover,
  &:focus {
    outline: none;
    transition: background-color var(--fade-out-time);
    background-color: var(--color-highlight);
  }
`;

const underlineAnimation = css`
  --slide-in-speed: 400ms;
  --slide-out-speed: 200ms;

  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    border-bottom: 1px solid var(--color-highlight);
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateX(-100%);
    transition: transform var(--slide-out-speed);
  }

  &:hover::after {
    transform: translateX(0%);
    transition: transform var(--slide-in-speed);
  }
`;

const NativeAnchor = styled.a`
  display: inline-block;
  text-decoration: none;
  color: var(--color-headline);
  cursor: pointer;

  will-change: transform;
  outline-offset: 4px;
  outline-width: 1px;
  transition: outline-offset 200ms, outline-width 200ms;

  &:focus {
    outline: 2px dotted var(--color-highlight);
    outline-offset: 8px;
    outline-width: 2px;
  }

  ${(p) => getAnimationStyles(p.type)}
`;

function getAnimationStyles(type: string | undefined) {
  switch (type) {
    case "fill":
      return fillAnimation;
    case "underline":
      return underlineAnimation;
    default:
      return undefined;
  }
}

export default StyledLink;
