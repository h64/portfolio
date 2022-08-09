import styled from "styled-components";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import About from "./About";
import Experience from "./Experience";
import Featured from "./Featured";

const MainContent = () => {
  return (
    <Wrapper as="main">
      <About />
      <Experience />
      <Featured />
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  padding-top: 48px;
  padding-bottom: 48px;
  color: var(--text2);
`;

export default MainContent;
