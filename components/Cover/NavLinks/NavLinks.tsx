import Link from "next/link";
import { Cli } from "../../../types/Props";
import styles from "./NavLinks.module.css";

const NavLinks = ({ simulateCliTyping }: Cli) => {
  return (
    <div className={styles.grid}>
      <Link href={"#about"} passHref>
        <div
          className={styles.card}
          onMouseEnter={() => simulateCliTyping("cd ~/About")}
        >
          <h2>About</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </Link>
      <Link href={"#work"} passHref>
        <div
          className={styles.card}
          onMouseEnter={() => simulateCliTyping("cd ~/Work")}
        >
          <h2>Work</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </Link>
      <Link href={"#articles"} passHref>
        <div
          className={styles.card}
          onMouseEnter={() => simulateCliTyping("cd ~/Articles")}
        >
          <h2>Articles</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </Link>
      <Link href={"#contact"} passHref>
        <div
          className={styles.card}
          onMouseEnter={() => simulateCliTyping("cd ~/Contact")}
        >
          <h2>Contact</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </Link>
    </div>
  );
};

export default NavLinks;
