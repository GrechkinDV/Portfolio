import React, { useEffect, useState } from "react";
import roadImg from "../constants/images/road.jpg";

function TopSection() {
  const [roadImgClass, setRoadImgClass] = useState("grayScale");

  const height = window.innerHeight;
  useEffect(() => {
    // On website load
    setTimeout(() => {
      setRoadImgClass("");
    }, 2000); // Makes image colorfull

    document.addEventListener("scroll", () => {
      let scrollPosition = window.scrollY / height;
      if (scrollPosition >= 0.2) {
        setRoadImgClass("grayScale");
      } else if (scrollPosition <= 0.8) {
        setRoadImgClass("");
      }
    });
  }, [height]);

  const scrollDown = () => {
    window.scrollBy(0, height);
    document.getElementsByTagName("nav")[0].classList = "dark";
  };

  return (
    <div id="TopImage">
      <img src={roadImg} id="roadImg" alt="Road" className={roadImgClass} />
      <div id="greetingText">
        <h4>Welcome! It's nice to see you here!</h4>
        <h1>Dmitriy Grechkin V. - the Full Stack Developer</h1>
        <h4>
          I'm an experienced professional who has successfully managed
          e-commerce, government, private projects.{" "}
        </h4>
      </div>

      <i
        style={{
          width: "100%",
          justifyContent: "center",
          position: "absolute",
          left: 0,
          display: "flex",
          top: "80vh",
        }}
        className="fa fa-chevron-circle-down fa-6x"
        onClick={scrollDown}
      />
    </div>
  );
}

export default TopSection;
