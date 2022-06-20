import type { NextPage } from "next";
import styled from "styled-components";
import ColorPalette from "../components/ColorPalette";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const Home: NextPage = () => {
  return (
    <MaxWidthWrapper>
      <Header>Hello World</Header>
      <ColorPalette />
    </MaxWidthWrapper>
  );
};

const Header = styled.h1`
  color: blue;
`;

export default Home;
