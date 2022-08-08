import Image from "next/image";
import styled from "styled-components";
import { Header } from "../../CommonUI";
import ScrollReveal from "../../ScrollReveal";

const About = () => {
  return (
    <ScrollReveal>
      <Header id="about">About</Header>

      <Flex>
        <AboutText>
          <p>
            Hi! My name is Henry and since childhood I&apos;ve been thoroughly
            fascinated by computers.
          </p>

          <p>Some of my most proudest achievements include:</p>
          <ul>
            <li>
              <span>
                Blue screening<span>*</span>
              </span>{" "}
              my first computer at the age of four.
              <span>Percussive maintenance did not help!</span>
            </li>

            <li>
              Surviving and graduating from the <b>University of Washington.</b>
            </li>

            <li>
              Sharing the love of code to over a hundred students at{" "}
              <b>General Assembly</b>.
            </li>
          </ul>
        </AboutText>

        <ImgWrapper>
          <Image
            src={"/profile.jpg"}
            alt="Headshot"
            layout="responsive"
            width={256}
            height={256}
          />
        </ImgWrapper>
      </Flex>
      <div>
        <p>
          As a software engineer, I enjoy learning new techniques to build
          accessible, scalable, and maintainable products. My goal is to
          leverage my experience as a teacher and bring <b>empathy</b> and a{" "}
          <b>keen eye for detail</b> forward to every opportunity.
        </p>
        <p>
          Here&apos;s some of the technologies I&apos;ve been working with
          recently:
        </p>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>Styled Components</li>
          <li>Storybook</li>
        </ul>
      </div>
    </ScrollReveal>
  );
};

const ImgWrapper = styled.div`
  display: inline-block;
  position: relative;
  min-width: 192px;
  max-width: 256px;
  aspect-ratio: 1 / 1;
  height: 100%;
  line-height: 0;
  border-radius: 8px;
  background-color: var(--brand);
  flex: 1;
  align-self: center;

  & img {
    mix-blend-mode: hard-light;
    z-index: 1;
    border-radius: 8px;
  }

  &:hover img {
    mix-blend-mode: unset;
  }

  ::after {
    pointer-events: none;
    position: absolute;
    content: "";
    border: 1px solid var(--brand);
    top: 16px;
    left: 16px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: top 400ms, left 400ms;
  }

  &:hover::after {
    transition: top 200ms, left 200ms;
    top: 12px;
    left: 12px;
  }

  @media ${({ theme }) => theme.mediaQueries.tabletAndUp} {
    align-self: flex-start;
  }
`;

const AboutText = styled.div`
  max-width: 60ch;
  margin-bottom: 16px;
  flex: 2;

  @media ${({ theme }) => theme.mediaQueries.tabletAndUp} {
    margin-bottom: 40px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 36px;

  @media ${({ theme }) => theme.mediaQueries.tabletAndUp} {
    flex-direction: row;
    /* gap: 48px; */
  }
`;

export default About;
