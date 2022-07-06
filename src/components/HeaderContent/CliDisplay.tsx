import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import useInterval from "../../hooks/useInterval";
import AnimatedLink from "../AnimatedLink";

interface CliDisplayProps {
  cliText: string;
  href: string;
}

const CliDisplay = ({ cliText, href }: CliDisplayProps) => {
  const TYPING_TIME_IN_MILLISECONDS = 700;
  const TYPING_TIME_PER_CHAR = TYPING_TIME_IN_MILLISECONDS / cliText.length;

  /* set initial state to full length so the SSG renders whole text w/ JS disabled */
  const [idx, setIdx] = useState(cliText.length);
  const [delay, setDelay] = useState<number | null>(TYPING_TIME_PER_CHAR);

  useEffect(() => {
    setIdx(0);
    setDelay(TYPING_TIME_PER_CHAR);
  }, [cliText, TYPING_TIME_PER_CHAR]);

  useInterval(() => {
    if (idx > cliText.length) setDelay(null);
    setIdx((prevIdx) => prevIdx + 1);
  }, delay);

  return (
    <>
      <AnimatedLink type="underline" href={href}>
        {cliText.substring(0, idx + 1)}
      </AnimatedLink>
      <Cursor />
    </>
  );
};

const cursorBlink = keyframes`
  from, to {
    color: transparent;
  }
  50% {
    color: var(--color-headline);
  }
`;

const Cursor = styled.span`
  &::after {
    content: "|";
    font-weight: bold;
    animation: ${cursorBlink} 1.5s step-end infinite;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

export default CliDisplay;
