import styled from "styled-components";
import { Header, TextLink } from "../../CommonUI";
import ScrollReveal from "../../ScrollReveal";
import VisuallyHidden from "../../VisuallyHidden";

const Experience = () => {
  return (
    <ScrollReveal>
      <Header id="experience">Experience</Header>
      <Flex>
        <Row>
          <Name>General Assembly</Name>
          <Details>
            <Title>
              Sr. Instructional Associate{" "}
              <TextLink
                href="https://generalassemb.ly/"
                rel="noopener noreferrer"
                target="_blank"
              >
                @ General Assembly
                <VisuallyHidden>(Opens in new tab)</VisuallyHidden>
              </TextLink>
            </Title>
            <Date>July 2019 - March 2022</Date>
            <List>
              <li>
                Taught over a hundred students how to code with JavaScript and
                Python, build React front-ends, and utilize a variety of techs
                including Node.js, Express, MongoDB and SQL to make server
                back-ends.
              </li>
              <li>
                Interfaced with a multidisciplinary team of instructors, career
                coaches, and teaching assistants to craft individualized
                learning experiences and achieve NPS scores consistently above
                50.
              </li>
            </List>
          </Details>
        </Row>
        <Row>
          <Name>425 Fitness</Name>
          <Details>
            <Title>
              Technical Operations Specialist{" "}
              <TextLink
                href="https://425fitness.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                @ 425 Fitness
                <VisuallyHidden>(Opens in new tab)</VisuallyHidden>
              </TextLink>
            </Title>
            <Date>May 2016 - April 2021</Date>
            <List>
              <li>
                Managed company I.T. resources as the primary point of contact
                for resolving technical issues and maintaining the companies
                network and hardware across three physical locations.
              </li>
              <li>
                Performed a wide variety of duties including: configuring Cisco
                network gear, configuring GoDaddy DNS records, interfacing with
                third party vendors, and deploying workstations.
              </li>
            </List>
          </Details>
        </Row>
      </Flex>
    </ScrollReveal>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Row = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const Name = styled.span`
  color: var(--text1);
  font-weight: 500;
  flex: 1;
`;

const Details = styled.div`
  flex: 3;
`;

const Title = styled.h3`
  color: var(--text1);
  font-size: calc(18 / 16 * 1rem);

  & > span {
    color: var(--brand);
    font-weight: 800;
  }
`;

const Date = styled.span`
  font-size: calc(14 / 16 * 1rem);
`;

const List = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > li {
    list-style-type: "❖";
    margin-left: 12px;
    padding-left: 12px;
  }
`;

export default Experience;
