import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/machine learning.png")} alt="ML icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Enthusiast</h3>
              <p>
                I have worked on various machine learning projects, applying algorithms
                to solve real-world problems and improve decision-making processes.
              </p>
            </div>
          </li>
         
        </ul>
      </div>
    </section>
  );
};
