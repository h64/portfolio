import { GitHub, Linkedin, Mail } from "react-feather";
import styled from "styled-components";
import { TappableBtn } from "../CommonUI";

const Footer = () => {
  return (
    <Wrapper as="footer">
      <CreatorMsg>
        <p>Created by Henry Hong</p>
        <Subtext>Thanks for reading!</Subtext>
      </CreatorMsg>
      <Social>
        <SocialLink href="mailto:henry@hong.dev">Email</SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/henry-s-hong/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          LinkedIn
        </SocialLink>
        <SocialLink
          href="https://www.github.com/h64/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          Github
        </SocialLink>
      </Social>
      <SocialIcons>
        <TappableBtn
          as={"a"}
          href="mailto:henry@hong.dev"
          aria-label="Email henry@hong.dev"
        >
          <Mail height={24} width={24} />
        </TappableBtn>
        <TappableBtn
          as={"a"}
          href="https://www.linkedin.com/in/henry-s-hong/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin height={24} width={24} />
        </TappableBtn>
        <TappableBtn
          as={"a"}
          href="https://www.github.com/h64/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <GitHub height={24} width={24} />
        </TappableBtn>
      </SocialIcons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 24px 32px;
  padding: 24px
    clamp(2rem, -1.2142857142857144rem + 8.571428571428571vw, 5.75rem);
  /* Fluid left/right padding from 32px to 92px*/

  font-weight: 600;
  width: 100%;
  color: var(--text2);
  display: flex;
  gap: 16px;
  justify-content: space-between;
  background-color: var(--surface2);
  align-items: center;

  @media ${({ theme }) => theme.mediaQueries.verySmall} {
    display: block;
    text-align: center;
    padding-bottom: 16px;
  }
`;

const Social = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: var(--brand);
  gap: 16px;

  display: none;
  @media ${({ theme }) => theme.mediaQueries.tabletAndUp} {
    display: flex;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  & a:hover {
    color: var(--brand);
  }
  @media ${({ theme }) => theme.mediaQueries.tabletAndUp} {
    display: none;
  }

  @media ${({ theme }) => theme.mediaQueries.verySmall} {
    justify-content: center;
    margin-top: 8px;
  }
`;

const CreatorMsg = styled.div`
  flex: 1;
`;

const Subtext = styled.p`
  color: var(--text1);
  font-size: calc(14 / 16 * 1rem);
`;

const SocialLink = styled.a`
  color: var(--brand);
  text-decoration: none;

  &:hover {
    color: var(--text1);
  }
`;

export default Footer;
