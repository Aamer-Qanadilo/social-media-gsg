import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data } = await axios.get("https://dummyjson.com/posts");
    // console.log(data);
    const tempPosts = [];
    data.posts.map((post) => {
      tempPosts.push({ ...post, liked: false });
    });
    setPosts(tempPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};
