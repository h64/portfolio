import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper";
import OutlineLink from "../OutlineLink";

const Footer = () => {
  return (
    <Wrapper as="footer">
      <p>Designed by Henry Hong</p>
      <Link href="#">Back to top ☝️</Link>
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  padding-top: 24px;
  padding-bottom: 24px;
  color: var(--color-paragraph);
`;

const Link = styled(OutlineLink)``;

export default Footer;
