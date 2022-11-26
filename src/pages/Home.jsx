import React, { useContext } from "react";
import { PostsContext } from "../components/PostsContext";

const Home = () => {
  const { posts } = useContext(PostsContext);
  console.log(posts);

  return <div>Home</div>;
};

export default Home;
