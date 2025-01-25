import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100); // Faster typing
  const [index, setIndex] = useState(1);
  const roles = ["Frontend Developer", "Machine Learning Engineer"];
  const period = 1500; // Shorter pause between roles

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300); // Faster reset to next role
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anjali</h1>
        <h2 className={styles.subtitle}>
          <span className="txt-rotate" dataPeriod="1000">
            <span className="wrap">{text}</span>
          </span>
        </h2>
        <p className={styles.description}>
        I’m a Frontend Developer who loves React.js and creating responsive web applications.</p>
        <p className={styles.description}>I also work on machine learning projects.
        </p>
        <p className={styles.description}>
        I'm excited to innovate and make an impact. Feel free to reach out!.
        </p>
        <a href="mailto:anjalirajput20082003@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

