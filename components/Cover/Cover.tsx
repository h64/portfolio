import SocialLinks from "./SocialLinks/SocialLinks";
import styles from "./Cover.module.css";
import { useEffect, useState } from "react";
import { IntervalSingleton } from "../../types/Props";
import NavLinks from "./NavLinks/NavLinks";

const TYPING_TIME_IN_MILLISECONDS = 300;

const Cover = () => {
  const [cliText, setCliText] = useState("");
  const [cliInterval, setCliInterval] = useState<IntervalSingleton | null>(
    null
  );

  useEffect(() => {
    const singleton: IntervalSingleton = {
      intervalId: -1,
      start: function (text: string) {
        if (this.intervalId > 0) {
          this.stop();
          this.start(text);
          return;
        }
        this.clear();
        const delay = Math.floor(TYPING_TIME_IN_MILLISECONDS / text.length);
        let currentIdx = 0;
        this.intervalId = window.setInterval(() => {
          let currentLetter = text[currentIdx++];
          setCliText((prev) => prev + currentLetter);
          if (currentIdx == text.length) this.stop();
        }, delay);
      },
      stop: function () {
        if (this.intervalId > 0) {
          window.clearInterval(this.intervalId);
          this.intervalId = -1;
        }
      },
      clear: function () {
        setCliText("");
      },
    };

    setCliInterval(singleton);
  }, []);

  return (
    <section id="cover" className={styles.cover}>
      <div className={styles.greeting}>
        <h2>Hello, World!</h2>
        <h1 className={styles.name}>Henry Hong</h1>
        <p className={styles.subtitle}>
          Software Engineer <code className={styles.cursor}>{cliText}</code>
          <code className={styles["mobile-cursor"]}></code>
        </p>
      </div>
      <SocialLinks
        simulateCliTyping={(text: string) => cliInterval?.start(text)}
      />
      <NavLinks
        simulateCliTyping={(text: string) => cliInterval?.start(text)}
      />
    </section>
  );
};

export default Cover;
