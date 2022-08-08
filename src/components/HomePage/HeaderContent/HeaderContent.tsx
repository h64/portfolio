import styled, { keyframes } from "styled-components";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Contact from "./Contact";

const HeaderContent = () => {
  return (
    <Wrapper as="header">
      <GreetingWrapper>
        <Greeting>
          Hello World!{" "}
          <WaveWrapper>
            <WavingHand role="img" aria-label="Waving hand">
              👋
            </WavingHand>
          </WaveWrapper>
        </Greeting>
        <Headline>I&apos;m Henry Hong.</Headline>
        <SubHeading>
          I&apos;m a software engineer who specializes in building things for
          the web.{" "}
          <span role="img" aria-label="Programmer emoji">
            👨🏻‍💻
          </span>
        </SubHeading>
      </GreetingWrapper>
      <ContactWrapper>
        <Contact />
      </ContactWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  will-change: contents; /* Improves animation performance especially on mobile */
  min-height: calc(100% - 100px);
  min-width: min-content;
  color: var(--text2);
  display: flex;
  flex-direction: column;

  --slide-duration: 500ms;
  --slide-delay-offset: 0ms;
  @media ${({ theme }) => theme.mediaQueries.tabletAndUp} {
    --slide-delay-offset: 500ms;
  }
`;

const Greeting = styled.div`
  margin-top: auto;
  font-size: 1.5rem;
  font-size: clamp(1.5rem, 1.222rem + 1.389vw, 2rem);
  color: var(--text2);

  --slide-delay: calc(500ms + var(--slide-delay-offset));
  ${({ theme }) => theme.mixins.slideUpAnimation};
`;

const Headline = styled.h1`
  color: var(--brand);
  font-size: 2rem;
  font-size: clamp(2rem, 1.167rem + 4.167vw, 3.5rem);

  font-weight: 800;
  padding-bottom: 32px;

  --slide-delay: calc(700ms + var(--slide-delay-offset));
  ${({ theme }) => theme.mixins.slideUpAnimation};
`;

const SubHeading = styled.h2`
  font-size: 1.25rem;
  margin-bottom: auto;

  --slide-delay: calc(900ms + var(--slide-delay-offset));
  ${({ theme }) => theme.mixins.slideUpAnimation};
`;

const GreetingWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const ContactWrapper = styled.div`
  flex: 1;

  & > div {
    --slide-delay: calc(1200ms + var(--slide-delay-offset));
    ${({ theme }) => theme.mixins.slideUpAnimation};
  }
`;

const wave = keyframes`
  0% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const WavingHand = styled.span`
  display: inline-block;
  transform-origin: 75% 80%;
  will-change: transform;
`;

const WaveWrapper = styled.span`
  @media (prefers-reduced-motion: no-preference) {
    &:hover ${WavingHand} {
      animation: ${wave} 400ms ease-in-out;
    }
  }
`;

export default HeaderContent;
