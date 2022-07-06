import { useState } from "react";
import { Moon, Sun, ToggleLeft, ToggleRight } from "react-feather";
import styled from "styled-components";
import TappableButton from "../TappableButton";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <Wrapper>
      <Sun />
      <div
        onClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
      >
        {isDarkMode ? (
          <TappableButton label="toggle dark theme">
            <ToggleLeft />
          </TappableButton>
        ) : (
          <ToggleRight />
        )}
      </div>
      <Moon />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
export default ThemeToggle;
