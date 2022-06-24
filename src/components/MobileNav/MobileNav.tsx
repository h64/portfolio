import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";
import { X } from "react-feather";
import styled, { keyframes } from "styled-components";
import { BREAKPOINTS } from "../../constants";
import useWindowSize, { Size } from "../../hooks/useWindowSize";
import MobileButton from "../MobileButton";
import UnstyledButton from "../UnstyledButton";

const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const size: Size = useWindowSize();

  useEffect(() => {
    if (size.width && size.width > BREAKPOINTS.tablet) {
      setIsOpen(false);
    }
  }, [size.width, setIsOpen]);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Overlay>
        <Content>
          <FadeWrapper>
            <MobileButton onClick={() => setIsOpen(false)} label="Close Menu">
              <X width={32} height={32} />
            </MobileButton>
            <Nav>
              <Link href="#">About</Link>
              <Link href="#">Experience</Link>
              <Link href="#">Featured</Link>
              <Link href="#">Resume</Link>
            </Nav>
            <Footer>
              <Link href="https://www.google.com">LinkedIn</Link>
              <Link href="https://www.google.com">Github</Link>
              <Link href="https://www.google.com">Google</Link>
            </Footer>
          </FadeWrapper>
        </Content>
      </Overlay>
    </Dialog>
  );
};

/* https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs */
/* when window too large, disable modal */

const fadeBackground = keyframes`
  from {
    background-color: transparent;
  }
  to {
    background-color: var(--color-backdrop);
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

const Overlay = styled(Dialog.Panel)`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  background-color: var(--color-backdrop);
  /* Allow clicks to go through the transparent overlay to the background */
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeBackground} 500ms both;
  }
`;

const Content = styled.nav`
  --overfill: 16px;
  pointer-events: all;
  display: flex;
  flex-direction: column;
  background-color: var(--color-alt-background);
  color: var(--color-headline);
  height: 100%;
  width: calc(300px + var(--overfill));
  padding: 24px 32px;
  margin-right: calc(var(--overfill) * -1);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 300ms both cubic-bezier(0, 0.6, 0.35, 1.05);
    animation-delay: 300ms;
  }
`;

const FadeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} 600ms both;
    animation-delay: 400ms;
  }
`;

const CloseButton = styled(UnstyledButton)``;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;

export default MobileNav;
