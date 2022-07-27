import styled from "styled-components";
import ScrollReveal from "../../ScrollReveal";

const About = () => {
  return (
    <Wrapper>
      <ScrollReveal>
        <SectionHeader id="about">About</SectionHeader>
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
        <br />
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

const SectionHeader = styled.h2`
  color: var(--text1);
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 40px;
`;

export default About;
