import Link from "next/link";
import styled from "styled-components";
import { Menu } from "react-feather";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Navbar = () => {
  return (
    <Wrapper>
      <DesktopActions>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Experience</NavLink>
        <NavLink href="#">Featured</NavLink>
        <ResumeLink href="#">Resume</ResumeLink>
      </DesktopActions>
      <MobileActions>
        <UnstyledButton>
          <Menu />
          <VisuallyHidden>Open Menu</VisuallyHidden>
        </UnstyledButton>
        <button>
          <Menu />
          <VisuallyHidden>Open Menu</VisuallyHidden>
        </button>
      </MobileActions>
    </Wrapper>
  );
};

const DesktopActions = styled.div`
  display: none;
  justify-content: flex-end;
  gap: 16px;
  padding: 16px;
  padding-top: 24px;
  padding-right: 24px;

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

const Wrapper = styled.nav``;

const NavLink = styled(Link)`
  text-decoration: none;
`;

const ResumeLink = styled(Link)``;

export default Navbar;
