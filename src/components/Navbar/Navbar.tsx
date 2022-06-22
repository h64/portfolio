import Link from "next/link";
import styled from "styled-components";
import { Menu } from "react-feather";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Navbar = () => {
  return (
    <Wrapper as="nav">
      <DesktopActions>
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

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
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
