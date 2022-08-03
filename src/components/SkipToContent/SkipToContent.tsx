import styled from "styled-components";

const SkipToContent = ({ href }: { href: string }) => {
  return <Link href={href}>Skip to Content</Link>;
};

const Link = styled.a`
  --fade-in-time: 200ms;
  --fade-out-time: 500ms;
  --slide-in-speed: 200ms;
  --slide-out-speed: 500ms;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: var(--text1);
  background-color: var(--surface1);
  border: 1px solid var(--brand);

  will-change: transform;
  transform: translateX(-105%);
  transition: background-color var(--fade-in-time),
    transform var(--slide-out-speed);

  transition-duration: 0ms;

  &:focus {
    transform: translateX(0%);
    outline: none;
    background-color: var(--brand);
  }

  @media (prefers-reduced-motion: no-preference) {
    &:focus {
      transition: background-color var(--fade-out-time)
          calc(var(--slide-in-speed) / 2),
        transform var(--slide-in-speed);
    }
  }
`;

export default SkipToContent;
