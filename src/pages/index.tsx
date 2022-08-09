import type { NextPage } from "next";
import Head from "next/head";
import HeaderContent from "../components/HomePage/HeaderContent";
import MainContent from "../components/HomePage/MainContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkipToContent from "../components/SkipToContent";
import PrintEasterEgg from "../utils/PrintEasterEgg";

const Home: NextPage = () => {
  PrintEasterEgg();
  return (
    <>
      <Head>
        <title>Henry Hong</title>
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
