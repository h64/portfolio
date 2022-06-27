import { Dispatch, SetStateAction, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "react-feather";
import styled, { Keyframes, keyframes } from "styled-components";
import MobileButton from "../TappableButton";
import useWindowSize, { Size } from "../../hooks/useWindowSize";
import { BREAKPOINTS } from "../../constants";
import AnimatedLink from "../AnimatedLink";

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
    if (size.width && size.width > BREAKPOINTS.tablet) {
      setIsOpen(false);
    }
  }, [size.width, setIsOpen]);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Backdrop />
      <Panel>
        <FadeWrapper isOpen={isOpen}>
          <ButtonWrapper>
            <MobileButton onClick={() => setIsOpen(false)} label="Close Menu">
              <X width={32} height={32} />
            </MobileButton>
          </ButtonWrapper>
          <Filler />
          <Nav>
            <AnimatedLink type="underline" href="#">
              About
            </AnimatedLink>
            <AnimatedLink type="underline" href="#">
              Experience
            </AnimatedLink>
            <AnimatedLink type="underline" href="#">
              Featured
            </AnimatedLink>
            <AnimatedLink type="fill" href="#">
              &gt; Resume
            </AnimatedLink>
          </Nav>
          <Footer>
            <AnimatedLink type="underline" href="https://www.google.com">
              LinkedIn
            </AnimatedLink>
            <AnimatedLink type="underline" href="https://www.google.com">
              Github
            </AnimatedLink>
            <AnimatedLink type="underline" href="https://www.google.com">
              Google
            </AnimatedLink>
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

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: var(--color-backdrop);

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
  background-color: var(--color-alt-background);
  color: var(--color-headline);
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
