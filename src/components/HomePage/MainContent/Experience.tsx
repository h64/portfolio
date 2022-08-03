import styled from "styled-components";
import { Header } from "../../CommonUI";
import ScrollReveal from "../../ScrollReveal";

const Experience = () => {
  return (
    <section>
      <ScrollReveal>
        <Header id="experience">Experience</Header>
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
              Bachelor of Science in Computer Science &#38; Software Engineering
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Experience;
