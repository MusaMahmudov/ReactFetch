import React from "react";
import "./about.scss";

let About = (data) => {
  return (
    <main>
      <div className="user">
        <h1>userId:{data.userId}</h1>
        <h1>id:{data.id}</h1>
      </div>
      <div className="title">
        <p>title:{data.title}</p>
        <p>body:{data.body}</p>
      </div>
    </main>
  );
};
export default About;
