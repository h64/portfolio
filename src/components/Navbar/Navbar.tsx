import styled from "styled-components";
import { Menu } from "react-feather";
import { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import MobileNav from "../MobileNav";
import MobileButton from "../TappableButton";
import AnimatedLink from "../AnimatedLink";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper as="nav">
      <DesktopActions>
        <Logo href="/" />
        <AnimatedLink href="#about" type="underline">
          About
        </AnimatedLink>
        <AnimatedLink href="#experience" type="underline">
          Experience
        </AnimatedLink>
        <AnimatedLink href="#featured" type="underline">
          Featured
        </AnimatedLink>
        <AnimatedLink href="#" type="fill">
          Resume
        </AnimatedLink>
        <ThemeToggle />
      </DesktopActions>

      <MobileActions>
        <MobileButton
          onClick={() => setIsOpen(true)}
          label={"Open Mobile Navigation"}
        >
          <Menu height={32} width={32} />
        </MobileButton>
      </MobileActions>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  color: var(--color-headline);
  padding-top: 24px;
  padding-bottom: 16px;

  @media ${(p) => p.theme.mediaQueries.tabletAndUp} {
    padding-top: 36px;
  }
  @media ${(p) => p.theme.mediaQueries.laptopAndUp} {
    padding-top: 48px;
  }
`;

const DesktopActions = styled.div`
  display: none;
  align-items: baseline;
  gap: 0.75rem;
  gap: clamp(0.75rem, -1.3928571428571428rem + 5.714285714285714vw, 2rem);
  flex: 1;

  & a:first-of-type {
    margin-right: 32px;
  }

  & div:last-of-type {
    margin-left: auto;
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
