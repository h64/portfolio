import SocialLinks from "./SocialLinks/SocialLinks";
import styles from "./Cover.module.css";
import { useEffect, useState } from "react";
import { IntervalSingleton } from "../../types/Props";
import NavLinks from "./NavLinks/NavLinks";
import Image from "next/image";

const Cover = () => {
  const [cliText, setCliText] = useState("");
  const [cliInterval, setCliInterval] = useState<IntervalSingleton | null>(
    null
  );

  useEffect(() => {
    const singleton: IntervalSingleton = {
      interval: -1,
      start: function (text: string) {
        if (this.interval < 0) {
          this.clear();
          const delay = Math.floor(500 / text.length);
          let currentIdx = 0;
          this.interval = window.setInterval(() => {
            let currentLetter = text[currentIdx++];
            setCliText((prev) => prev + currentLetter);
            if (currentIdx == text.length) this.stop();
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
        }
      },
      clear: function () {
        setCliText("");
      },
    };

    setCliInterval(singleton);
  }, []);

  return (
    <section className={styles.cover}>
      <div className={styles["greeting-wrapper"]}>
        <div className={styles.greeting}>
          <h2>Hello, World!</h2>
          <h1 className={styles.name}>Henry Hong</h1>
          <p className={styles.subtitle}>
            Software Engineer <code className={styles.cursor}>{cliText}</code>
            <code className={styles["mobile-cursor"]}></code>
          </p>
        </div>
        {/* <Image
          className={styles["profile-picture"]}
          src={"/1981460.jpg"}
          height={150}
          width={150}
          alt={"profile"}
        /> */}
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
