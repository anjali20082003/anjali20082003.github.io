import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:anjalirajput20082003@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            anjalirajput20082003@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/anjali-955b2623a/">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            linkedin.com/in/anjali-955b2623a/
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/anjali20082003">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            github.com/anjali20082003
          </a>
        </li>
      </ul>
    </footer>
  );
};
