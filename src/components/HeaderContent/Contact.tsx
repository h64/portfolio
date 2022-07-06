import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { GitHub, Linkedin, Mail } from "react-feather";
import CliDisplay from "./CliDisplay";
import { TappableBtn } from "../CommonUI";

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
        Get in touch
        <InnerRow>
          👉 <CliDisplay cliText={cliText} href={cliLink} />
        </InnerRow>
      </Row>
      <ButtonWrapper>
        <TappableBtn
          as={"a"}
          href="https://www.linkedin.com/in/henry-s-hong/"
          target="_blank"
          rel="noopener noreferrer"
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
  color: var(--color-paragraph);
  gap: 24px;
  font-size: 1.25rem;
  flex: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-left: -6px;
  gap: 16px;
  position: relative;

  & a:hover {
    color: var(--color-highlight);
  }
`;

const Row = styled.div`
  display: block;

  @media ${(p) => p.theme.mediaQueries.tabletAndUp} {
    display: flex;
    gap: 8px;
  }
`;

const pointAnimation = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(4px);
  }
`;

const InnerRow = styled.div`
  display: flex;
  gap: 8px;

  @media (prefers-reduced-motion: no-preference) {
    & span:hover {
      animation: ${pointAnimation} 1000ms infinite alternate ease-in-out;
    }
  }
`;

export default Contact;
