import React from "react";
import styles from "./styles.module.css";

const NewPostFooter = () => {
  const newPostAdditions = [
    <span>
      <i>Icon</i>
      <span>People</span>
    </span>,
    <span>
      <i>Icon</i>
      <span>Check In</span>
    </span>,
    <span>
      <i>Icon</i>
      <span>Mood</span>
    </span>,
  ];

  return (
    <div className={styles.NewPostFooter}>
      <div className={styles.newPostAdditions}>
        {newPostAdditions.map((addition) => addition)}
      </div>
      <button>POST</button>
    </div>
  );
};

export default NewPostFooter;
