import Link from "next/link";
import styled from "styled-components";
import { Menu } from "react-feather";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import OutlineLink from "../OutlineLink";

const Navbar = () => {
  return (
    <Wrapper as="nav">
      <DesktopActions>
        <Logo href="/" />
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#featured">Featured</NavLink>
        <ResumeLink href="#">Resume</ResumeLink>
      </DesktopActions>
      <MobileActions>
        <UnstyledButton>
          <IconWrapper>
            <Menu height={32} width={32} />
          </IconWrapper>
          <VisuallyHidden>Open Menu</VisuallyHidden>
        </UnstyledButton>
      </MobileActions>
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  color: var(--color-headline);
  padding-top: 24px;
  padding-bottom: 16px;
`;

const DesktopActions = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: baseline;
  gap: 24px;
  flex: 1;

  & a:first-of-type {
    margin-right: auto;
  }

  @media ${(p) => p.theme.queries.phoneAndUp} {
    display: flex;
  }
`;

const MobileActions = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${(p) => p.theme.queries.phoneAndUp} {
    display: none;
  }
`;

const NavLink = styled(OutlineLink)`
  &:hover {
    color: var(--color-highlight);
  }
`;

const ResumeLink = styled.a`
  display: inline-block;
  background-color: var(--color-background);
  border: 1px solid var(--color-highlight);
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: var(--color-highlight);
  }
`;

const IconWrapper = styled.div`
  min-width: 44px;
  min-height: 44px;
  display: grid;
  place-content: center;
`;

export default Navbar;
