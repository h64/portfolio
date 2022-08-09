import styled from "styled-components";
import { Menu } from "react-feather";
import { useEffect, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import MobileNav from "../MobileNav";
import { BtnLink, TappableBtn } from "../CommonUI";
import { Link } from "../CommonUI";
import useIsJsEnabled from "../../hooks/useIsJsEnabled";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  let isJsEnabled = useIsJsEnabled();

  return (
    <Wrapper as="nav">
      <DesktopActions>
        <FadeWrapper>
          <Logo href="/" />
        </FadeWrapper>
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#featured">Featured</Link>
        <BtnLink href="#">Resume</BtnLink>
      </DesktopActions>

      <MobileActions>
        {isJsEnabled && (
          <TappableBtn
            onClick={() => setIsOpen(true)}
            aria-label="Open Mobile Navigation"
          >
            <Menu height={32} width={32} />
          </TappableBtn>
        )}
        <noscript>
          <FallbackMobileMenu aria-label="Open Mobile Navigation">
            <Menu height={32} width={32} />
            <FallbackNav>
              <FallbackNavLink href="#about">About</FallbackNavLink>
              <FallbackNavLink href="#experience">Experience</FallbackNavLink>
              <FallbackNavLink href="#featured">Featured</FallbackNavLink>
              <FallbackNavLink href="#">Resume</FallbackNavLink>
            </FallbackNav>
          </FallbackMobileMenu>
        </noscript>
      </MobileActions>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </Wrapper>
  );
};

const Wrapper = styled(MaxWidthWrapper)`
  color: var(--brand);
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

  --slide-duration: 500ms;

  & > div:first-of-type {
    margin-right: auto;
  }

  & > a:nth-child(2) {
    --slide-delay: 200ms;
    ${({ theme }) => theme.mixins.slideDownAnimation};
  }
  & > a:nth-child(3) {
    --slide-delay: 300ms;
    ${({ theme }) => theme.mixins.slideDownAnimation};
  }
  & > a:nth-child(4) {
    --slide-delay: 400ms;
    ${({ theme }) => theme.mixins.slideDownAnimation};
  }
  & > a:nth-child(5) {
    --slide-delay: 500ms;
    ${({ theme }) => theme.mixins.slideDownAnimation};
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

const FadeWrapper = styled.div`
  --fade-duration: 1500ms;
  ${({ theme }) => theme.mixins.fadeInAnimation};
`;

const FallbackNav = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--surface2);
  text-align: center;
  padding: 16px;
  position: absolute;
  border-radius: 4px;

  top: 44px;
  right: 0;
  visibility: hidden;

  & a:not(:last-child) {
    border-bottom: 1px solid var(--brand);
    padding-bottom: 8px;
  }
  & a:not(:first-child) {
    padding-top: 8px;
  }
`;

const FallbackNavLink = styled.a`
  ${({ theme }) => theme.mixins.link};

  &:hover {
    color: var(--brand);
  }
`;

const FallbackMobileMenu = styled(TappableBtn)`
  position: relative;
  z-index: 1;

  &:focus ${FallbackNav}, &:hover ${FallbackNav} {
    visibility: visible;
    --fade-duration: 500ms;
    ${({ theme }) => theme.mixins.fadeInAnimation}
  }
`;

export default Navbar;
