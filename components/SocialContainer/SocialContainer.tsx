import Image from "next/image";
import styles from "../../styles/SocialContainer.module.css";

interface SocialContainerProps {
  simulateCliTyping: (text: string) => void;
}

const SocialContainer = ({ simulateCliTyping }: SocialContainerProps) => {
  return (
    <div className={styles["social__container"]}>
      <a
        href="https://github.com/h64"
        target="_blank"
        rel="noopener noreferrer"
        className={styles["social__image"]}
        onMouseEnter={() => simulateCliTyping("open github.com/h64")}
      >
        <Image src="/github.svg" alt="Github" width={36} height={36} />
      </a>
      <a
        href="https://linkedin.com/in/henry-s-hong"
        target="_blank"
        rel="noopener noreferrer"
        className={styles["social__image"]}
        onMouseEnter={() =>
          simulateCliTyping("open linkedin.com/in/henry-s-hong")
        }
      >
        <Image src="/linkedin.svg" alt="LinkedIn" width={36} height={36} />
      </a>
    </div>
  );
};

export default SocialContainer;
