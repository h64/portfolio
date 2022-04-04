import SocialContainer from "../SocialContainer/SocialContainer";
import styles from "../../styles/Cover.module.css";
import { useEffect, useState } from "react";

interface IntervalSingleton {
  interval: number;
  start: (text: string) => void;
  stop: () => void;
}

const Cover = () => {
  const [cliText, setCliText] = useState("");
  const [intervalSingleton, setIntervalSingleton] =
    useState<IntervalSingleton | null>(null);

  useEffect(() => {
    const singleton = {
      interval: -1,
      currentIdx: 0,
      start: function (text: string) {
        if (this.interval < 0) {
          this.clear();
          const delay = Math.floor(500 / text.length);

          this.interval = window.setInterval(() => {
            let currentLetter = text[this.currentIdx++];
            setCliText((prev) => prev + currentLetter);
            if (this.currentIdx == text.length) this.stop();
          }, delay);
        } else {
          this.stop();
          this.start(text);
        }
      },
      stop: function () {
        if (this.interval > 0) {
          window.clearInterval(this.interval);
          this.interval = -1;
          this.currentIdx = 0;
        }
      },
      clear: function () {
        setCliText("");
      },
    };

    setIntervalSingleton(singleton);
  }, []);

  return (
    <>
      <div className={styles.cover}>
        <h2 className={styles.greeting}>Hello, World!</h2>
        <h1 className={styles.name}>Henry Hong</h1>
        <p className={styles.subtitle}>
          Software Engineer <code className={styles.cursor}>{cliText}</code>
        </p>
      </div>
      <SocialContainer
        simulateCliTyping={(text: string) => intervalSingleton?.start(text)}
      />
    </>
  );
};

export default Cover;
