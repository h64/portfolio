import styled from "styled-components";

const OutlineLink = styled.a`
  text-decoration: none;
  color: var(--color-headline);

  will-change: transform;
  outline-offset: 4px;
  outline-width: 1px;
  transition: outline-offset 200ms, outline-width 200ms;

  &:focus {
    /* color: var(--color-highlight); */
    outline: 2px dotted var(--color-highlight);
    outline-offset: 8px;
    outline-width: 2px;
  }
`;

export default OutlineLink;