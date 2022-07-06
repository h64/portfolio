import { useState } from "react";
import { Moon, Sun, ToggleLeft, ToggleRight } from "react-feather";
import styled from "styled-components";
import TappableButton from "../TappableButton";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <Wrapper label="Dark theme toggle">
      <div
        onClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
      >
        {isDarkMode ? (
          <Sun width={30} height={30} />
        ) : (
          <Moon width={30} height={30} />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(TappableButton)``;

export default ThemeToggle;
