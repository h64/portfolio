import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Contact from "./Contact";

const HeaderContent = () => {
  return (
    <Wrapper as="header">
      <GreetingWrapper>
        <Greeting id="top">
          Hello World!{" "}
          <span role="img" aria-label="Waving hand">
            👋
          </span>
        </Greeting>
        <Headline>I&apos;m Henry Hong.</Headline>
        <SubHeading>
          I&apos;m a software engineer specialized in building things for the
          web.{" "}
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

  & > * {
    --slide-delay: calc(1100ms + var(--slide-delay-offset));
    ${({ theme }) => theme.mixins.slideUpAnimation};
  }
`;

export default HeaderContent;
