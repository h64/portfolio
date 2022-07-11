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
      <Contact />
    </Wrapper>
  );
};
const Button = styled.button`
  ${({ theme }) => theme.mixins.button};
  ${(p) => p.theme.mixins.underlineSlideInTransition};
`;
const Wrapper = styled(MaxWidthWrapper)`
  min-height: calc(100% - 80px);
  min-width: min-content;
  color: var(--text2);
  display: flex;
  flex-direction: column;
`;

const Greeting = styled.div`
  margin-top: auto;
  font-size: 1.5rem;
  font-size: clamp(1.5rem, 1.222rem + 1.389vw, 2rem);
  color: var(--text2);
`;

const Headline = styled.h1`
  color: var(--brand);
  font-size: 2rem;
  font-size: clamp(2rem, 1.167rem + 4.167vw, 3.5rem);

  font-weight: 800;
  padding-bottom: 32px;
`;

const SubHeading = styled.h2`
  font-size: 1.25rem;
  margin-bottom: auto;
`;

const GreetingWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const SocialIcon = styled.a`
  ${({ theme }) => theme.mixins.unstyledButton};
`;

export default HeaderContent;
