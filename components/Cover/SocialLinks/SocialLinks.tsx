import Image from "next/image";
import styles from "./SocialLinks.module.css";
import { Cli } from "../../../types/Props";

const ICON_SIZE = 42;

const SocialLinks = ({ simulateCliTyping }: Cli) => {
  return (
    <div className={styles.container}>
      <a
        href="https://github.com/h64"
        target="_blank"
        rel="noopener noreferrer"
        className={styles["social-image"]}
        onMouseEnter={() => simulateCliTyping("open github.com/h64")}
      >
        <Image
          src="/github.svg"
          alt="Github"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      </a>
      <a
        href="https://linkedin.com/in/henry-s-hong"
        target="_blank"
        rel="noopener noreferrer"
        className={styles["social-image"]}
        onMouseEnter={() =>
          simulateCliTyping("open linkedin.com/in/henry-s-hong")
        }
      >
        <Image
          src="/linkedin.svg"
          alt="LinkedIn"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      </a>
      <a
        href="mailto:henry@hong.dev"
        target="_blank"
        rel="noopener noreferrer"
        className={styles["social-image"]}
        onMouseEnter={() => simulateCliTyping("mailto: henry@hong.dev")}
      >
        <Image
          src="/email.svg"
          alt="Email"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
