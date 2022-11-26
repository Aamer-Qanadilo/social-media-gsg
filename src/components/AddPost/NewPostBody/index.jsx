import React from "react";
import styles from "./styles.module.css";
// import { FaUpload } from "react-icons/fa";
//<FaUpload />
const NewPostBody = ({ selectedPostType }) => {
  const typesInput = [
    <input type={"text"} placeholder="What's on your mind, Quan?" />,
    <input type={"image"} />,
  ];

  return (
    <div className={styles.newPostBody}>
      <div className={styles.newPostBodyImage}>
        <img
          src="https://robohash.org/excepturiiuremolestiae.png"
          alt="User Image"
        />
      </div>
      {selectedPostType === 0 ? typesInput[0] : typesInput[1]}
    </div>
  );
};

export default NewPostBody;
