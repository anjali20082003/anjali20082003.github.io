import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json"; // Ensure this file contains your experience data
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  {/* Role comes first with a comma after it */}
                  <h3 className={styles.role}>
                    {historyItem.role}
                    <span>,</span>
                  </h3>
                  {/* Organisation comes below the role */}
                  <p className={styles.organisation}>{historyItem.organisation}</p>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, expId) => {
                      return <li key={expId}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
