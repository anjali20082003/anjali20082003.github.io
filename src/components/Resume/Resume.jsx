// Resume.jsx
import React from 'react';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <div className={styles.resumeContainer} id="resume">
      <h1 className={styles.heading}>My Resume</h1>
      <p className={styles.description}>
      You can view or download my resume using the links below.
      </p>
      <div className={styles.buttonContainer}>
        <a href="Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeLink}>
          View Resume
        </a>
        <a href="Resume.pdf" download className={styles.downloadLink}>
          Download Resume
        </a>
      </div>
      <p className={styles.contactInfo}>
        For any inquiries, please contact me at: <a href="mailto:your-anjalirajput20082003@gmail.com.com">anjalirajput20082003@gmail.com</a>
      </p>
    </div>
  );
};

export default Resume;
