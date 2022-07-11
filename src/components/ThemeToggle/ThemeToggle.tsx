import { useState } from "react";
import { Moon, Sun } from "react-feather";
import styled from "styled-components";
import { TappableBtn } from "../CommonUI";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <Btn
      aria-label="Dark theme toggle"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? (
        <Moon width={30} height={30} />
      ) : (
        <Sun width={30} height={30} />
      )}
    </Btn>
  );
};

const Btn = styled(TappableBtn)`
  color: var(--text2);

  & :hover {
    color: var(--brand);
  }
`;

export default ThemeToggle;
