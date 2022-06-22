import Link from "next/link";
import styled from "styled-components";
import { Menu } from "react-feather";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <Wrapper as="nav">
      <DesktopActions>
        <Logo />
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Experience</NavLink>
        <NavLink href="#">Featured</NavLink>
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

const DesktopActions = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: baseline;
  gap: 16px;
  padding: 16px;
  padding-top: 24px;
  padding-right: 24px;
  flex: 1;

  & div:first-of-type {
    margin-right: auto;
  }

  @media ${(p) => p.theme.queries.phoneAndUp} {
    display: flex;
  }
`;

const MobileActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;

  @media ${(p) => p.theme.queries.phoneAndUp} {
    display: none;
  }
`;

const Wrapper = styled(MaxWidthWrapper)``;

const NavLink = styled(Link)`
  /* display: inline-block; */
  text-decoration: none;
`;

const ResumeLink = styled(Link)``;

const IconWrapper = styled.div`
  min-width: 44px;
  min-height: 44px;
  display: grid;
  place-content: center;
`;

export default Navbar;
