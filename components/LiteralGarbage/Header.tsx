import Link from "next/link";
import styles from "../styles/Home.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles["nav"]}>
        <ul className={styles["nav__ul"]}>
          <li className={styles["nav__link"]}>
            <Link href="#">About</Link>
          </li>
          <li className={styles["nav__link"]}>
            <Link href="#">Work</Link>
          </li>
          <li className={styles["nav__link"]}>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
