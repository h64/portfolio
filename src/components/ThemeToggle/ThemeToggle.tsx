import { useState } from "react";
import { Moon, Sun } from "react-feather";
import { TappableBtn } from "../CommonUI";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <TappableBtn
      aria-label="Dark theme toggle"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? (
        <Sun width={30} height={30} />
      ) : (
        <Moon width={30} height={30} />
      )}
    </TappableBtn>
  );
};

export default ThemeToggle;
