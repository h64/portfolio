import type { NextPage } from "next";
import styled from "styled-components";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const Home: NextPage = () => {
  return (
    <MaxWidthWrapper>
      <Header>Hello World</Header>
    </MaxWidthWrapper>
  );
};

const Header = styled.h1`
  color: blue;
`;

export default Home;
