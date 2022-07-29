import Image from "next/image";
import styled from "styled-components";
import { Header } from "../../CommonUI/CommonUI";
import ScrollReveal from "../../ScrollReveal";

const About = () => {
  return (
    <Wrapper>
      <ScrollReveal>
        <Header id="about">About</Header>
        <div>
          <p>
            Hi! My name is Henry and since childhood I&apos;ve been thoroughly
            fascinated by computers.
          </p>

          <p>Some of my most proudest achievements include:</p>
          <br />
          <ul>
            <li>
              <span>
                Blue screening<span>*</span>
              </span>{" "}
              my first computer at the age of four.
              <span>Percussive maintenance did not help!</span>
            </li>
            <br />

            <li>
              Surviving and graduating from the <b>University of Washington.</b>
            </li>
            <br />

            <li>
              Sharing the love of code to over a hundred students at{" "}
              <b>General Assembly</b>.
            </li>
          </ul>
        </div>
        <ImgWrapper>
          <Image src={"/profile.jpg"} alt="Headshot" width={256} height={256} />
        </ImgWrapper>
      </ScrollReveal>
      <ScrollReveal>
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
      </ScrollReveal>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const ImgWrapper = styled.div`
  position: relative;
  width: 256px;
  background-color: var(--brand);
  line-height: 0;
  transition: background-color 400ms;
  margin-bottom: 24px;
  margin-top: 24px;

  & img {
    mix-blend-mode: hard-light;
    transition: filter 400ms;
    filter: grayscale(100%);
    z-index: 1;
  }

  &:hover img {
    transition: filter 200ms, background-color 200ms;
    filter: none;
  }
  &:hover {
    transition: background-color 200ms;
    background-color: transparent;
  }

  ::after {
    position: absolute;
    content: "";
    border: 1px solid blue;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: transparent;
  }
`;

export default About;
