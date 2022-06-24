import { MouseEventHandler } from "react";
import styled from "styled-components";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

interface MobileButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element;
  label: string;
}

const MobileButton = ({ onClick, children, label }: MobileButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <IconWrapper>{children}</IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(UnstyledButton)`
  will-change: transform;
  outline-width: 1px;
  transition: outline-offset 200ms, outline-width 200ms;

  &:focus {
    outline: 2px dotted var(--color-highlight);
    outline-width: 2px;
  }
`;

const IconWrapper = styled.div`
  min-width: 44px;
  min-height: 44px;
  display: grid;
  place-content: center;
`;

export default MobileButton;
