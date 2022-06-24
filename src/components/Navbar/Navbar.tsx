import styled from "styled-components";
import { Menu } from "react-feather";
import { useState } from "react";
import UnstyledButton from "../UnstyledButton";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import OutlineLink from "../OutlineLink";
import MobileNav from "../MobileNav";
import MobileButton from "../MobileButton";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

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
  --slide-in-speed: 400ms;
  --slide-out-speed: 200ms;

  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    border-bottom: 1px solid var(--color-highlight);
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateX(-100%);
    transition: transform var(--slide-out-speed);
  }

  &:hover::after {
    transform: translateX(0%);
    transition: transform var(--slide-in-speed);
  }
`;

const ResumeLink = styled.a`
  --fade-in-time: 200ms;
  --fade-out-time: 500ms;
  display: inline-block;
  background-color: var(--color-background);
  border: 1px solid var(--color-highlight);
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;

  transition: background-color var(--fade-in-time);

  &:hover,
  &:focus {
    outline: none;
    transition: background-color var(--fade-out-time);
    background-color: var(--color-highlight);
  }
`;

const IconWrapper = styled.div`
  min-width: 44px;
  min-height: 44px;
  display: grid;
  place-content: center;
`;

const MenuButton = styled(UnstyledButton)`
  will-change: transform;
  outline-width: 1px;
  transition: outline-offset 200ms, outline-width 200ms;

  &:focus {
    outline: 2px dotted var(--color-highlight);
    outline-width: 2px;
  }
`;

export default Navbar;
