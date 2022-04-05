import { NextPage } from "next";
import Head from "next/head";
import Cover from "../components/Cover/Cover";
import NavLinks from "../components/Cover/NavLinks/NavLinks";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Henry Hong</title>
        <meta name="description" content="Henry Hong Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover />
      {/* <NavLinks
        // simulateCliTyping={(text: string) => intervalSingleton?.start(text)}
        simulateCliTyping={(text: string) => {}}
      /> */}
    </div>
  );
};

export default Home;
