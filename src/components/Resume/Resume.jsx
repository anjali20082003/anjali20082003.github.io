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
        {/* Use the relative path from the public folder */}
        <a
          href="/Anjali_Resume.pdf"  // Corrected relative path
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeLink}
        >
          View Resume
        </a>
        <a
          href="/Anjali_Resume.pdf"  // Corrected relative path for download
          download
          className={styles.downloadLink}
        >
          Download Resume
        </a>
      </div>
      <p className={styles.contactInfo}>
        For any inquiries, please contact me at:{" "}
        <a href="mailto:anjalirajput20082003@gmail.com">
          anjalirajput20082003@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Resume;
