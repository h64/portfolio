import { useState } from "react";
import styled from "styled-components";

const ColorPalette = () => {
  const [selected, setSelected] = useState("dark");

  return (
    <Wrapper>
      <ThemeSelector>
        <h2>Themes</h2>
        <form id="theme-switcher">
          <div>
            <input
              type="radio"
              id="auto"
              name="theme"
              value="auto"
              checked={selected === "auto"}
              onChange={(e) => setSelected(e.target.value)}
            />
            <label htmlFor="auto">Auto</label>
          </div>
          <div>
            <input
              type="radio"
              id="light"
              name="theme"
              value="light"
              checked={selected === "light"}
              onChange={(e) => setSelected(e.target.value)}
            />
            <label htmlFor="light">Light</label>
          </div>
          <div>
            <input
              type="radio"
              id="dark"
              name="theme"
              value="dark"
              checked={selected === "dark"}
              onChange={(e) => setSelected(e.target.value)}
            />
            <label htmlFor="dark">Dark</label>
          </div>
        </form>
      </ThemeSelector>
      <Content>
        <Surfaces>
          <Surface className="surface1">1</Surface>
          <Surface className="surface2">2</Surface>
          <Surface className="surface3">3</Surface>
          <Surface className="surface4">4</Surface>
        </Surfaces>
        <Texts>
          <Heading className="brand">
            <Circle className="brand" /> Brand
          </Heading>
          <Heading className="text1">
            <Circle className="text1" /> Text Color 1
          </Heading>
          <Heading className="text2">
            <Circle className="text2" /> Text Color 2
          </Heading>
          <br />
          <Text className="text1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
            veritatis labore exercitationem nam quam quos iure possimus sit
            illum dicta.
          </Text>
          <br />
          <Text className="text2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
            veritatis labore exercitationem nam quam quos iure possimus sit
            illum dicta.
          </Text>
        </Texts>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  gap: 32px;
  background-color: var(--surface1);
`;

const ThemeSelector = styled.div`
  & #theme-switcher {
    display: flex;
    flex-direction: row;
  }
`;

const Content = styled.div`
  --item-size: 150px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const Surfaces = styled.section`
  display: grid;
  grid-template-columns: var(--item-size) var(--item-size);
  gap: 16px;
`;

const Surface = styled.div`
  min-height: var(--item-size);
  min-width: var(--item-size);
  display: grid;
  place-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 8px;

  &.surface1 {
    background-color: var(--surface1);
  }
  &.surface2 {
    background-color: var(--surface2);
  }
  &.surface3 {
    background-color: var(--surface3);
  }
  &.surface4 {
    background-color: var(--surface4);
  }
`;

const Texts = styled.section`
  flex: 1;
  min-width: calc(var(--item-size) * 2);
`;

const Heading = styled.h1`
  font-size: 2rem;

  &.brand {
    color: var(--text1);
  }
  &.text1 {
    color: var(--text1);
  }
  &.text2 {
    color: var(--text2);
  }
`;

const Text = styled.p`
  &.text1 {
    color: var(--text1);
  }
  &.text2 {
    color: var(--text2);
  }
`;

const Circle = styled.span`
  display: inline-block;
  border-radius: 50%;
  height: 25px;
  width: 25px;

  &.brand {
    background-color: var(--brand);
  }
  &.text1 {
    background-color: var(--text1);
  }
  &.text2 {
    background-color: var(--text2);
  }
`;

export default ColorPalette;
