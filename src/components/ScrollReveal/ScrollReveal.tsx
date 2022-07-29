import { ReactNode, useRef } from "react";
import styled, { keyframes } from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function ScrollReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
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
    opacity: 0.01;
    transform: translateY(48px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const RevealWrapper = styled.div<{ isVisible: boolean }>`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${({ isVisible }) => (isVisible ? slideUp : null)};
    animation-duration: 800ms;
    animation-delay: 300ms;
    animation-fill-mode: both;
    animation-timing-function: ease-out;
  }
`;

export default ScrollReveal;
