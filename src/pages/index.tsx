import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <a href="#">Skip to content</a>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Work</a>
        <a href="#">Resume</a>
        <div>Toggle Dark Mode</div>
      </nav>
      <header>
        <div>Hello, World! 👋</div>
        <h1>
          I&apos;m <span>Henry Hong</span>, a software engineer specialized in
          building things for the web. 👨🏻‍💻
        </h1>
        <div>
          Get in touch 👉 <span>henry@hong.dev</span>
        </div>
        <div>
          <span>LinkedInSVG</span>
          <span>GithubSVG</span>
          <span>MailSVG</span>
        </div>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
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
        </section>
        <section>
          <h2>Experience</h2>
          <div>
            <div>
              <h3>General Assembly</h3>
              <div>Jul 2019 - Mar 2022</div>
              <div>Sr. Instructional Associate</div>
            </div>
            <div>
              <h3>425 Fitness</h3>
              <div>May 2016 - Apr 2021</div>
              <div>Technical Operations Specialist</div>
            </div>
            <div>
              <h3>University of Washington, Bothell</h3>
              <div>Winter 2019</div>
              <div>
                Bachelor of Science in Computer Science &#38; Software
                Engineering
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>Featured Posts</h2>
        </section>
        <section>
          <h2>Miscellaneous</h2>
          <div>
            <h3>Homework Cloner ➡</h3>
            <p>
              A configurable command line script I built to assist myself and
              other teachers to automate the process of pulling down Github pull
              requests to track homework submissions and completion rates.
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
              A web application built on the MERN (MongoDB, Express, React,
              Node) stack for a school project. I created this app with the goal
              of developing a central hub akin to RateMyProfessor where
              individuals could browse honest reviews of various educational
              institutions. I like to think my skills have improved a lot since
              the time I built this app!
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
              For the final project in my Hardware class I led a team in
              building a machine to assembly language disassembler program.
            </p>
            <ul>
              <li>Assembly</li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <p>Designed by Henry Hong</p>
        <a href="#">Back to top ☝️</a>
      </footer>
    </>
  );
};

export default Home;
