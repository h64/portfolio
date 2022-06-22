import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <MainText>H</MainText>
      <HoverText>H</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1;

  transition: transform 300ms;
  transform-origin: 50% 85%;
  will-change: transform;

  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: scale(1.1) translateY(1px) skew(2deg);
      transition: transform 200ms;
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
  color: var(--color-primary);
  transform: translateY(100%);
`;

export default Logo;
