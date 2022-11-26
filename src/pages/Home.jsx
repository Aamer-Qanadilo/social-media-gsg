import React, { useContext, useState } from "react";
import { Calendar } from "react-calendar";
import AddPost from "../components/AddPost";
import Posts from "../components/Posts";
import { PostsContext } from "../components/PostsContext";
import Tags from "../components/Tags";

// import styles from "../index.css";

const Home = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="pageContainer">
      <Tags />
      <AddPost />
      <Calendar onChange={onChange} value={value} className="pageCalendar" />
      <Posts />
    </div>
  );
};

export default Home;
