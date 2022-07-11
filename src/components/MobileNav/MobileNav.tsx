import { Dispatch, SetStateAction, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "react-feather";
import styled, { keyframes } from "styled-components";
import useWindowSize, { Size } from "../../hooks/useWindowSize";
import { theme } from "../../styles";
import { BtnLink, Link, TappableBtn } from "../CommonUI";

interface AnimatedProps {
  readonly isOpen: boolean;
}

const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const size: Size = useWindowSize();

  useEffect(() => {
    if (size.width && size.width > theme.breakpoints.tablet) {
      setIsOpen(false);
    }
  }, [size.width, setIsOpen]);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Backdrop />
      <Panel>
        <FadeWrapper isOpen={isOpen}>
          <ButtonWrapper>
            <TappableBtn
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X width={32} height={32} />
            </TappableBtn>
          </ButtonWrapper>
          <Filler />
          <Nav>
            <Link href="#about">About</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#featured">Featured</Link>
            <BtnLink href="#">&gt; Resume</BtnLink>
          </Nav>
          <Footer>
            <Link
              href="https://www.linkedin.com/in/henry-s-hong/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.github.com/h64"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
          </Footer>
        </FadeWrapper>
      </Panel>
    </Dialog>
  );
};

const fadeBackground = keyframes`
  from {
    background-color: transparent;
  }
  to {
    background-color: var(--surface4-transparent);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: var(--surface4-transparent);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeBackground} 500ms both;
  }
`;

const Panel = styled(Dialog.Panel)`
  --overfill: 16px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  background-color: var(--surface1);
  color: var(--brand);
  height: 100%;
  width: calc(300px + var(--overfill));
  margin-right: calc(var(--overfill) * -1);
  padding: 24px 32px;
  padding-right: calc(32px + var(--overfill));

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 300ms both cubic-bezier(0, 0.6, 0.35, 1.05);
    animation-delay: 300ms;
  }
`;

const FadeWrapper = styled.div<AnimatedProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} 600ms both;
    animation-delay: 400ms;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: calc(24px + var(--overfill));
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  font-size: calc(20 / 16 * 1rem);
  font-weight: 600;

  & a {
    max-width: fit-content;
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
  padding-bottom: 16px;

  & a {
    max-width: fit-content;
  }
`;

const Filler = styled.div`
  flex: 1;
`;

export default MobileNav;
