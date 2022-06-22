import styled, { keyframes } from "styled-components";
import OutlineLink from "../OutlineLink";
import VisuallyHidden from "../VisuallyHidden";

const Logo = ({ href }: { href: string }) => {
  return (
    <Wrapper href={href}>
      <MainText aria-hidden="true">H</MainText>
      <HoverText aria-hidden="true">H</HoverText>
      <VisuallyHidden>Home</VisuallyHidden>
    </Wrapper>
  );
};

const danceAnimation = keyframes`
  0% {
    transform: scale(1) translateY(0px) skew(0deg);
  }
  25% {
    transform: scale(1.15) translateY(1px) skew(-2deg);
  }
  50% {
    transform: scale(1) translateY(0px) skew(0deg);
  }
  75% {
    transform: scale(1.15) translateY(1px) skew(2deg);
  }
`;

const Wrapper = styled(OutlineLink)`
  position: relative;
  overflow: hidden;
  display: inline-block;
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1;

  transform-origin: 50% 85%;
  will-change: transform;
  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      animation: ${danceAnimation} 2000ms infinite
        cubic-bezier(0.65, 0.05, 0.36, 1);
    }
  }
`;

const Text = styled.span`
  display: block;
  transition: transform 200ms;

  ${Wrapper}:hover & {
    transform: translateY(var(--translate-to));
    transition: transform 200ms;
  }
`;

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: 0%;
`;
const HoverText = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;
  position: absolute;
  top: 0;
  left: 0;
  color: var(--color-highlight);
  transform: translateY(100%);
`;

export default Logo;
