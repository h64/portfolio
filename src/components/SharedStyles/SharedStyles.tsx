import styled from "styled-components";

export const UnstyledButton = styled.button`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: var(--color-headline);
  cursor: pointer;

  will-change: transform;
  outline-offset: 4px;
  outline-width: 1px;
  transition: outline-offset 200ms, outline-width 200ms;

  @media (hover: hover) and (pointer: fine) {
    &:focus {
      outline: 2px dotted var(--color-highlight);
      outline-offset: 8px;
      outline-width: 2px;
    }
  }
`;
