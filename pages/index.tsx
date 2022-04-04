import { NextPage } from "next";
import Head from "next/head";
import Cover from "../components/Cover/Cover";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Henry Hong</title>
        <meta name="description" content="Henry Hong Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Cover />
        <div>Down</div>
        {/* <div>
          <div>Content 1</div>
          <div>Content 2</div>
          <div>Content 3</div>
          <div>Content 4</div>
        </div> */}
      </main>
      {/* <footer>
        <p>Social Links</p>
      </footer> */}
    </div>
  );
};

export default Home;
