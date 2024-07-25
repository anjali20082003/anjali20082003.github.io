// Resume.jsx
import React from 'react';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <div className={styles.resumeContainer} id="resume">
      <h1 className={styles.heading}>My Resume</h1>
      <p className={styles.description}>
        Click the link below to view or download my resume.
      </p>
      <a href="/assets/resume/Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeLink}>
        View Resume
      </a>
    </div>
  );
};

export default Resume;
