import styled from "styled-components";
import { Menu } from "react-feather";
import { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import MobileNav from "../MobileNav";
import MobileButton from "../TappableButton";
import AnimatedLink from "../AnimatedLink";

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

  @media ${(p) => p.theme.mediaQueries.phoneAndUp} {
    display: flex;
  }
`;

const MobileActions = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${(p) => p.theme.mediaQueries.phoneAndUp} {
    display: none;
  }
`;

export default Navbar;
