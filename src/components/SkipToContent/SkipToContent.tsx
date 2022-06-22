import styled from "styled-components";

const SkipToContent = ({ href }: { href: string }) => {
  return <Link href={href}>Skip to Content</Link>;
};

const Link = styled.a`
  --slide-in-speed: 200ms;
  --slide-out-speed: 400ms;
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px 24px;

  background-color: var(--color-highlight);
  color: var(--color-headline);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;

  z-index: 1;

  will-change: transform;
  transform: translateX(-100%);
  /* transition: transform var(--slide-out-speed); */

  &:focus {
    transform: translate(0%);
  }
  @media (prefers-reduced-motion: no-preference) {
    &:focus {
      transition: transform var(--slide-in-speed);
    }
  }
`;

export default SkipToContent;
