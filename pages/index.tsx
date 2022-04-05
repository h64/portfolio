import { NextPage } from "next";
import Head from "next/head";
import About from "../components/About/About";
import Articles from "../components/Articles/Articles";
import Contact from "../components/Contact/Contact";
import Cover from "../components/Cover/Cover";
import Work from "../components/Work/Work";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Henry Hong</title>
        <meta name="description" content="Henry Hong Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover />
      <About />
      <Work />
      <Articles />
      <Contact />
    </>
  );
};

export default Home;
