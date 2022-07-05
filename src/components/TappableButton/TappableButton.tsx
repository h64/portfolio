import styled from "styled-components";
import { MouseEventHandler } from "react";
import { UnstyledButton } from "../SharedStyles";
import VisuallyHidden from "../VisuallyHidden";

interface TappableButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: JSX.Element;
  label: string;
  href?: string;
  as?: "button" | "a";
}

const TappableButton = ({
  onClick,
  children,
  label,
  href,
  as = "button",
}: TappableButtonProps) => {
  return as === "a" ? (
    <ButtonWrapper as="a" href={href} target="_blank" rel="noreferrer noopener">
      <IconWrapper>{children}</IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
    </ButtonWrapper>
  ) : (
    <ButtonWrapper onClick={onClick}>
      <IconWrapper>{children}</IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled(UnstyledButton)`
  will-change: transform;
  outline-width: 1px;
  transition: outline-offset 200ms, outline-width 200ms, color 300ms;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--color-highlight);
    }
  }
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

export default TappableButton;
