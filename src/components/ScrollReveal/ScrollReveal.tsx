import { ReactNode, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useIsJsEnabled from "../../hooks/useIsJsEnabled";

interface ScrollRevealProps {
  children: ReactNode;
}

function ScrollReveal({ children }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    rootMargin: "-5%",
  });
  const isVisible = !!entry?.isIntersecting;

  let isJsEnabled = useIsJsEnabled();

  return (
    <RevealWrapper ref={ref} isVisible={isVisible} isJsEnabled={isJsEnabled}>
      {children}
    </RevealWrapper>
  );
}

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(48px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const RevealWrapper = styled.section<{
  isVisible: boolean;
  isJsEnabled: boolean;
}>`
  /* Keep text visible on JS disabled experience */
  /* But prevent flash of text if JS enabled */
  opacity: ${({ isJsEnabled }) => (isJsEnabled ? 0 : 1)};

  @media (prefers-reduced-motion: no-preference) {
    animation: ${({ isVisible, isJsEnabled }) =>
      !isJsEnabled || isVisible ? slideUp : null};
    animation-duration: 600ms;
    animation-delay: 200ms;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

export default ScrollReveal;
