import React, { useContext, useState } from "react";
import { PostsContext } from "../PostsContext";
import NewPostBody from "./NewPostBody";
import NewPostFooter from "./NewPostFooter";
import NewPostSelector from "./NewPostSelector";
import styles from "./styles.module.css";

const AddPost = () => {
  const [selectedPostType, setSelectedPostType] = useState(0);

  return (
    <div className={styles.newPostContainer}>
      <NewPostSelector
        selectedPostType={selectedPostType}
        setSelectedPostType={setSelectedPostType}
      />
      <NewPostBody selectedPostType={selectedPostType} />
      <NewPostFooter />
    </div>
  );
};

export default AddPost;
