import styled from "styled-components";
import { Header, TextLink } from "../../CommonUI";
import ScrollReveal from "../../ScrollReveal";
import VisuallyHidden from "../../VisuallyHidden";
import Headshot from "./Headshot";

const About = () => {
  return (
    <ScrollReveal>
      <Header id="about">About</Header>
      <Flex>
        <AboutText>
          <p>
            Hi! My name is Henry and since childhood I&apos;ve been thoroughly
            fascinated by computers. By the tender age of four, I had already
            learned enough to perform{" "}
            <Tooltip aria-describedby="laptop-joke">
              percussive maintenance
              <Asterisk>*</Asterisk>
              <TooltipText role="tooltip" id="laptop-joke">
                I totally destroyed that laptop
              </TooltipText>
            </Tooltip>{" "}
            on my first laptop!
          </p>
          <p>
            {" "}
            I went on to obtain my degree from the{" "}
            <TextLink
              href="https://www.washington.edu/"
              rel="noopener noreferrer"
              target="_blank"
            >
              University of Washington
              <VisuallyHidden>(Opens in new tab)</VisuallyHidden>
            </TextLink>
            , and found a passion for web development and teaching at{" "}
            <TextLink
              href="https://generalassemb.ly/"
              rel="noopener noreferrer"
              target="_blank"
            >
              General Assembly.
              <VisuallyHidden>(Opens in new tab)</VisuallyHidden>
            </TextLink>
          </p>
          <p>
            As a software engineer, I enjoy learning new techniques to build
            accessible, delightful experiences on the front-end, that are
            maintainable and scalable on the back-end.
          </p>
        </AboutText>
        <Headshot />
      </Flex>
      <div>
        <p>
          Here&apos;s some of the technologies I&apos;ve been working with
          recently:
        </p>
        <List>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>Styled Components</li>
          <li>Next.js</li>
        </List>
      </div>
    </ScrollReveal>
  );
};

const AboutText = styled.div`
  max-width: 60ch;
  margin-bottom: 16px;
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 36px;

  @media ${({ theme }) => theme.mediaQueries.tabletAndUp} {
    flex-direction: row;
    margin-bottom: 16px;
  }
`;

const List = styled.ul`
  display: grid;
  max-width: fit-content;
  margin-right: auto;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 8px;
  margin-top: 16px;

  & > li {
    margin-left: 40px;
    padding-left: 12px;
    list-style-type: "❖";
  }

  @media (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;

const TooltipText = styled.span`
  position: absolute;
  bottom: 24px;
  background-color: var(--surface3);
  display: none;
  white-space: normal;
  text-align: center;
  padding: 8px 16px;
  border-radius: 4px;

  ::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -6px;
    border-width: 6px;
    border-style: solid;
    border-color: var(--surface3) transparent transparent transparent;
  }
`;

const Tooltip = styled.span`
  font-weight: 500;
  color: var(--text1);
  position: relative;
  display: inline-block;
  white-space: nowrap;

  &:hover ${TooltipText} {
    --fade-duration: 300ms;
    ${({ theme }) => theme.mixins.fadeInAnimation}
    display: block;
  }
`;

const Asterisk = styled.span`
  font-weight: 800;
  color: var(--brand);
`;

export default About;
