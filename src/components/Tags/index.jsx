import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { PostsContext } from "../PostsContext";
import Style from "./styles.module.css";

const Tags = () => {
  const tags = [
    "history",
    "crime",
    "mystery",
    "love",
    "magical",
    "fiction",
    "french",
  ];
  const data = useContext(PostsContext);
  const handelClick = (tag) => {
    const filteredPosts = data.posts.filter((post) => {
      return post.tags[0] === tag;
    });
    data.setPosts(filteredPosts);
  };

  return (
    <div className={Style.tagsContainer}>
      <div className={Style.title}>
        <h2 className={Style.titleText}>Tags</h2>
      </div>
      <div className={Style.tags}>
        <ul className={Style.tagsList}>
          {tags.map((tag, index) => (
            <li className={Style.listItem} key={index}>
              <button
                className={Style.itemBtn}
                onClick={() => handelClick(tag)}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tags;
