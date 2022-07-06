import styled from "styled-components";
import { Menu } from "react-feather";
import { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import MobileNav from "../MobileNav";
import { TappableBtn } from "../CommonUI";
import ThemeToggle from "../ThemeToggle";
import { Link } from "../CommonUI";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper as="nav">
      <DesktopActions>
        <Logo href="/" />
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#featured">Featured</Link>
        <Link href="#">Resume</Link>
        <ThemeToggle />
      </DesktopActions>

      <MobileActions>
        <TappableBtn
          onClick={() => setIsOpen(true)}
          aria-label="Open Mobile Navigation"
        >
          <Menu height={32} width={32} />
        </TappableBtn>
      </MobileActions>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  color: var(--color-primary);
  padding-top: 24px;
  padding-bottom: 16px;

  @media ${(p) => p.theme.mediaQueries.tabletAndUp} {
    /* Fluid padding-top from 36px to 48px at 650px to 950px viewport */
    padding-top: 2.25rem;
    padding-top: clamp(2.25rem, 0.625rem + 4vw, 3rem);
  }
`;

const DesktopActions = styled.div`
  display: none;
  align-items: baseline;
  /* Fluid gap from 12px to 36px at 650px to 950px viewport */
  gap: 0.75rem;
  gap: clamp(0.75rem, -2.5rem + 8vw, 2.25rem);
  flex: 1;

  & a:first-of-type {
    margin-right: 24px;
  }

  & button:last-of-type {
    margin-left: auto;
    align-self: center;
  }

  @media ${(p) => p.theme.mediaQueries.tabletAndUp} {
    display: flex;
  }
`;

const MobileActions = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${(p) => p.theme.mediaQueries.tabletAndUp} {
    display: none;
  }
`;

export default Navbar;
