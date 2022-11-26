import React, { useContext } from "react";
import AddPost from "../components/AddPost";
import Posts from "../components/Posts";
import { PostsContext } from "../components/PostsContext";
import Tags from "../components/Tags";

const Home = () => {
  const { posts } = useContext(PostsContext);
  console.log(posts);

  return (
    <React.Fragment>
      <Tags />
      <AddPost />
      <Posts />
    </React.Fragment>
  );
};

export default Home;
