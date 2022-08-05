import { css, keyframes } from "styled-components";

export const unstyledButton = css`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: inherit;

  outline-offset: 2px;
  transition: outline-offset 200ms, outline-width 200ms;

  /* No outline on click */
  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus {
    outline: 2px dotted var(--brand);
    outline-width: 2px;
    outline-offset: 4px;
  }
`;

const button = css`
  color: var(--text1);
  padding: 8px 16px;
  border: 1px solid var(--brand);
  border-radius: 4px;
  text-decoration: none;
  outline: none;

  &:hover,
  &:focus {
    background-color: var(--brand);
  }
`;

const link = css`
  display: inline-block;
  text-decoration: none;
  color: var(--text1);

  outline-offset: 4px;
  outline-width: 1px;
  transition: outline-offset 200ms, outline-width 200ms;

  /* No outline on click */
  :focus:not(:focus-visible) {
    outline: none;
  }

  &:focus {
    outline: 2px dotted var(--brand);
    outline-offset: 8px;
    outline-width: 2px;
  }
`;

const backgroundFillTransition = css`
  --fade-in-time: 200ms;
  --fade-out-time: 500ms;
  background-color: var(--surface1);
  transition: background-color var(--fade-out-time);

  &:hover,
  &:focus {
    transition: background-color var(--fade-in-time);
    background-color: var(--brand);
  }
`;

const underlineSlideInTransition = css`
  --slide-in-speed: 400ms;
  --slide-out-speed: 200ms;

  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    border-bottom: 1px solid var(--brand);
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateX(calc(-100% - 1px));
    transition: transform var(--slide-out-speed);
  }

  &:hover::after {
    transform: translateX(0%);
    transition: transform var(--slide-in-speed);
  }
`;

const tappableArea = css`
  min-width: 44px;
  min-height: 44px;
  display: grid;
  place-content: center;
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0.001;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0.001;
  }
  to {
    opacity: 1;
  }
`;

const slideDownAnimation = css`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideDown};
    animation-duration: var(--slide-duration);
    animation-delay: var(--slide-delay);
    animation-fill-mode: both;
    animation-timing-function: ease-out;
  }
`;

const slideUpAnimation = css`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideUp};
    animation-duration: var(--slide-duration);
    animation-delay: var(--slide-delay);
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.39, 0.58, 0.57, 1);
  }
`;

const fadeInAnimation = css`
  animation: ${fadeIn};
  animation-duration: var(--fade-duration);
  animation-delay: var(--fade-delay);
`;

const mixins = {
  button,
  unstyledButton,
  link,
  backgroundFillTransition,
  underlineSlideInTransition,
  tappableArea,
  slideDownAnimation,
  fadeInAnimation,
  slideUpAnimation,
};

export default mixins;
