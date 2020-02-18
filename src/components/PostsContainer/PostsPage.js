//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
//import dummyData from "../../dummy-data";
// import data 

const PostsPage = (props) => {
  //const [data] = useState(dummyData);
  // set up state for your data
  // return (
  //   <div className="posts-container-wrapper">
  //     {data.map((item, index) =>
  //       <Post post={item} key={index}/>)}
  //   </div>
  // );
  const data = props.data.filter(post => {
    return post.username.toLowerCase().includes(props.search.toLowerCase());
  })

  console.log(props.search);
  return (
    <div className="posts-container-wrapper">
      {data.map((post, i) => {
        return <Post key={i} post={post} />;
      })}
    </div>
  );
};

export default PostsPage;

