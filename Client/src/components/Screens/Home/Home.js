import React from "react";
import Slideshow from "./Slideshow/Slideshow";
import Title from "./Title/Title";
import "./Home.css";

function Home() {
  return (
    <div className="HomePage">
      <Title />
      <Slideshow />
    </div>
  );
}

export default Home;
