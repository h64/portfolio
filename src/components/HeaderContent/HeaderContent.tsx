import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper";

const HeaderContent = () => {
  return (
    <Wrapper as="header">
      <Greeting id="top">Hello, World! 👋</Greeting>
      <Headline>
        I&apos;m <span>Henry Hong.</span>
      </Headline>
      <SubHeading>
        I&apos;m a software engineer specialized in building things for the web.
        👨🏻‍💻
      </SubHeading>
      <ContactWrapper>
        <div>
          Get in touch 👉 <span>henry@hong.dev</span>
        </div>
        <div>
          <span>LinkedInSVG</span>
          <span>GithubSVG</span>
          <span>MailSVG</span>
        </div>
      </ContactWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  padding-top: 96px;
  padding-bottom: 96px;
  min-height: 90%;
  min-width: min-content;
  color: var(--color-paragraph);
`;

const Greeting = styled.div`
  font-size: 2rem;
  color: var(--color-tertiary);
`;

const Headline = styled.h1`
  color: var(--color-headline);
  font-size: 3rem;
  font-weight: 800;
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;

  @media ${(p) => p.theme.mediaQueries.phoneAndUp} {
    max-width: 80%;
  }
`;

const ContactWrapper = styled.div`
  padding-top: 32px;
`;

export default HeaderContent;
