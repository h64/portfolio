import { useEffect, useState } from "react";
import styled from "styled-components";
import { GitHub, Linkedin, Mail } from "react-feather";
import CliDisplay from "./CliDisplay";
import { TappableBtn } from "../../CommonUI";

const Contact = () => {
  const [cliText, setCliText] = useState("henry@hong.dev");
  const [cliLink, setCliLink] = useState("mailto:henry@hong.dev");

  useEffect(() => {
    setCliText("henry@hong.dev");
    setCliLink("mailto:henry@hong.dev");
  }, []);

  return (
    <Wrapper>
      <Row>
        Get in touch!
        <InnerRow>
          <span role="img" aria-label="Finger pointing at link">
            👉
          </span>{" "}
          <CliDisplay cliText={cliText} href={cliLink} />
        </InnerRow>
      </Row>
      <ButtonWrapper>
        <TappableBtn
          as={"a"}
          href="https://www.linkedin.com/in/henry-s-hong/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          onMouseEnter={() => {
            setCliText("linkedin.com/in/henry-s-hong");
            setCliLink("https://www.linkedin.com/in/henry-s-hong/");
          }}
        >
          <Linkedin height={32} width={32} />
        </TappableBtn>
        <TappableBtn
          as={"a"}
          href="https://www.github.com/h64/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          onMouseEnter={() => {
            setCliText("github.com/h64");
            setCliLink("https://www.github.com/h64/");
          }}
        >
          <GitHub height={32} width={32} />
        </TappableBtn>
        <TappableBtn
          as={"a"}
          href="mailto:henry@hong.dev"
          aria-label="Email henry@hong.dev"
          onMouseEnter={() => {
            setCliText("henry@hong.dev");
            setCliLink("mailto:henry@hong.dev");
          }}
        >
          <Mail height={32} width={32} />
        </TappableBtn>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text2);
  gap: 40px;
  font-size: 1.25rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-left: -6px;
  gap: 16px;
  position: relative;

  & a:hover {
    color: var(--brand);
  }
`;

const Row = styled.div`
  display: block;

  @media ${(p) => p.theme.mediaQueries.tabletAndUp} {
    display: flex;
    gap: 8px;
  }
`;

const InnerRow = styled.div`
  display: flex;
  gap: 10px;

  @media (prefers-reduced-motion: no-preference) {
    & span[role="img"] {
      transform: translateX(0px);
      transition: transform 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    &:hover span[role="img"] {
      transform: translateX(4px);
      transition: transform 200ms cubic-bezier(0.86, 0, 0.07, 1);
    }
  }
`;

export default Contact;
