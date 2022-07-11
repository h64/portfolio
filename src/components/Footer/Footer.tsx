import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Footer = () => {
  return (
    <Wrapper as="footer">
      <p>Designed by Henry Hong</p>
      <a href="#">Back to top ☝️</a>
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  padding-top: 24px;
  padding-bottom: 24px;
  color: var(--text2);
`;

export default Footer;
