import { Dialog } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";
import styled, { keyframes } from "styled-components";

const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Overlay>
        <Content>
          <FadeWrapper>
            <Dialog.Title>Deactivate account</Dialog.Title>
            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description>

            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>

            <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
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

export default MobileNav;
