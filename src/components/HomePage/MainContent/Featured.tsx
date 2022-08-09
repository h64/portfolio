import { Header } from "../../CommonUI";
import ScrollReveal from "../../ScrollReveal";

const Featured = () => {
  return (
    <ScrollReveal>
      <Header id="featured">Featured</Header>

      <div>
        <h3>Homework Cloner ➡</h3>
        <p>
          A configurable command line script I built to assist myself and other
          teachers to automate the process of pulling down Github pull requests
          to track homework submissions and completion rates.
        </p>
        <ul>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Bash</li>
          <li>http</li>
        </ul>
      </div>
      <div>
        <h3>EduReview ➡</h3>
        <p>
          A web application built on the MERN (MongoDB, Express, React, Node)
          stack for a school project. I created this app with the goal of
          developing a central hub akin to RateMyProfessor where individuals
          could browse honest reviews of various educational institutions. I
          like to think my skills have improved a lot since the time I built
          this app!
        </p>
        <ul>
          <li>MongoDB</li>
          <li>Express</li>
          <li>React</li>
          <li>Node.js</li>
          <li>JWT</li>
          <li>Heroku</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div>
        <h3>StroopType ➡</h3>
        <p>
          A typing game that I built after first learning JavaScript! Here I
          wanted to practice DOM manipulation, event handling, IIFEs
          <span>*</span>, timeouts and intervals.
        </p>
        <ul>
          <li>JavaScript</li>
          <li>Netlify</li>
        </ul>
      </div>
      <div>
        <h3>68000 Disassembler ➡</h3>
        <p>
          For the final project in my Hardware class I led a team in building a
          machine to assembly language disassembler program.
        </p>
        <ul>
          <li>Assembly</li>
        </ul>
      </div>
    </ScrollReveal>
  );
};

export default Featured;
