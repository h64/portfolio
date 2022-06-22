import type { NextPage } from "next";
import Head from "next/head";
import HeaderContent from "../components/HeaderContent";
import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkipToContent from "../components/SkipToContent";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>👨🏻‍💻&nbsp;&nbsp;Henry Hong</title>
        <meta
          name="description"
          content="Portfolio for Henry Hong, a software engineer specialized in building things for the web."
        />
      </Head>
      <SkipToContent href="#about" />
      <Navbar />
      <HeaderContent />
      <MainContent />
      <Footer />
    </>
  );
};

export default Home;
