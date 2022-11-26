import React from "react";
import styles from "./styles.module.css";

const NewPostSelector = ({ selectedPostType, setSelectedPostType }) => {
  const selectors = ["Status", "Image", "Video"];

  return (
    <div className={styles.newPostSelector}>
      {selectors.map((selector, index) => {
        return (
          <span
            className={
              selectedPostType === index
                ? styles.postSelector + " " + styles.postSelected
                : styles.postSelector
            }
            onClick={() => setSelectedPostType(index)}
          >
            {selector}
          </span>
        );
      })}
    </div>
  );
};

export default NewPostSelector;
