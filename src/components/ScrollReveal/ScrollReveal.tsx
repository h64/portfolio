import { ReactNode, useRef } from "react";
import styled, { keyframes } from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

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

  return (
    <RevealWrapper ref={ref} isVisible={isVisible}>
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

const RevealWrapper = styled.section<{ isVisible: boolean }>`
  opacity: 0; /* Prevents flash of text before the animation triggers */

  @media (prefers-reduced-motion: no-preference) {
    animation: ${({ isVisible }) => (isVisible ? slideUp : null)};
    animation-duration: 600ms;
    animation-delay: 200ms;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

export default ScrollReveal;
