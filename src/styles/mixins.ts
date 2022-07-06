import { css } from "styled-components";

export const unstyledButton = css`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: inherit;

  /* No outline on click */
  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus {
    outline: 2px dotted var(--color-highlight);
    outline-width: 2px;
  }
`;

const button = css`
  color: var(--color-primary);
  padding: 8px 16px;
  border: 1px solid var(--color-highlight);
  border-radius: 4px;
  text-decoration: none;
  outline: none;

  &:hover,
  &:focus {
    background-color: var(--color-highlight);
  }
`;

const link = css`
  display: inline-block;
  text-decoration: none;
  color: var(--color-primary);

  outline-offset: 4px;
  outline-width: 1px;
  transition: outline-offset 200ms, outline-width 200ms;

  /* No outline on click */
  :focus:not(:focus-visible) {
    outline: none;
  }

  &:focus {
    outline: 2px dotted var(--color-highlight);
    outline-offset: 8px;
    outline-width: 2px;
  }
`;

const backgroundFillTransition = css`
  --fade-in-time: 200ms;
  --fade-out-time: 500ms;
  background-color: var(--color-background);
  transition: background-color var(--fade-out-time);

  &:hover,
  &:focus {
    transition: background-color var(--fade-in-time);
    background-color: var(--color-highlight);
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
    border-bottom: 1px solid var(--color-highlight);
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

const mixins = {
  button,
  unstyledButton,
  link,
  backgroundFillTransition,
  underlineSlideInTransition,
  tappableArea,
};

export default mixins;
