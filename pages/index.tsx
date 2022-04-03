import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
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
        <div>
          <h2 className={styles.greeting}>Hello, World!</h2>
          <h1 className={styles.name}>Henry Hong</h1>
          <p className={styles.subtitle}>Software Engineer</p>
        </div>
        {/* <Header></Header> */}
        <div className={styles["social-container"]}>
          <Image src="/github.svg" alt="Github" width={36} height={36} />
          <Image src="/linkedin.svg" alt="LinkedIn" width={36} height={36} />
        </div>
        <div>
          <div>Content 1</div>
          <div>Content 2</div>
          <div>Content 3</div>
          <div>Content 4</div>
        </div>
      </main>
      <footer>
        <p>Social Links</p>
      </footer>
    </div>
  );
};

export default Home;
