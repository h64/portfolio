import { useEffect, useState } from "react";
import { GitHub, Linkedin, Mail } from "react-feather";
import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper";
import TappableButton from "../TappableButton";
import CliDisplay from "./CliDisplay";

const HeaderContent = () => {
  const [cliText, setCliText] = useState("henry@hong.dev");
  const [cliLink, setCliLink] = useState("mailto:henry@hong.dev");

  useEffect(() => {
    setCliText("henry@hong.dev");
    setCliLink("mailto:henry@hong.dev");
  }, []);

  return (
    <Wrapper as="header">
      <GreetingWrapper>
        <Greeting id="top">Hello World! 👋</Greeting>
        <Headline>I&apos;m Henry Hong.</Headline>
        <SubHeading>
          I&apos;m a software engineer specialized in building things for the
          web. 👨🏻‍💻
        </SubHeading>
      </GreetingWrapper>
      <ContactWrapper>
        <Row>
          Get in touch
          <LineWrapper>
            👉
            <CliDisplay cliText={cliText} href={cliLink} />
          </LineWrapper>
        </Row>
        <ButtonWrapper>
          <span
            onMouseEnter={() => {
              setCliText("linkedin.com/in/henry-s-hong");
              setCliLink("https://www.linkedin.com/in/henry-s-hong/");
            }}
          >
            <TappableButton
              as="a"
              label="External link: LinkedIn"
              href="https://www.linkedin.com/in/henry-s-hong/"
            >
              <Linkedin height={32} width={32} />
            </TappableButton>
          </span>
          <span
            onMouseEnter={() => {
              setCliText("github.com/h64");
              setCliLink("https://www.github.com/h64/");
            }}
          >
            <TappableButton
              as="a"
              label="External link: Github"
              href="https://www.github.com/h64/"
            >
              <GitHub height={32} width={32} />
            </TappableButton>
          </span>
          <span
            onMouseEnter={() => {
              setCliText("henry@hong.dev");
              setCliLink("mailto:henry@hong.dev");
            }}
          >
            <TappableButton
              as="a"
              label="Open email client"
              href="mailto:henry@hong.dev"
            >
              <Mail height={32} width={32} />
            </TappableButton>
          </span>
        </ButtonWrapper>
      </ContactWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  min-height: calc(100% - 80px);
  min-width: min-content;
  color: var(--color-paragraph);
  display: flex;
  flex-direction: column;
`;

const Greeting = styled.div`
  margin-top: auto;
  font-size: 1.5rem;
  font-size: clamp(1.5rem, 1.222rem + 1.389vw, 2rem);
  color: var(--color-tertiary);
`;

const Headline = styled.h1`
  color: var(--color-headline);
  font-size: 2rem;
  font-size: clamp(2rem, 1.167rem + 4.167vw, 3.5rem);

  font-weight: 800;
  padding-bottom: 32px;
`;

const SubHeading = styled.h2`
  font-size: 1.25rem;
  margin-bottom: auto;
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-paragraph);
  gap: 24px;
  font-size: 1.25rem;
  flex: 1;
`;

const GreetingWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-left: -6px;
  gap: 16px;
  position: relative;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  /* To avoid layout shift on long messages */
  /* height: 3.2em; */
  /* To avoid text overflow on very small screens */
  /* overflow: hidden; */
`;

const LineWrapper = styled.div`
  display: flex;
  gap: 8px;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
  /* max-width: 250px; */

  @media ${(p) => p.theme.mediaQueries.tabletAndUp} {
  }
`;

export default HeaderContent;
