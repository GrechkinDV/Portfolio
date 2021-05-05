import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import upworkFeedback1 from "../constants/images/upworkFeedback1.jpg";
import upworkFeedback2 from "../constants/images/upworkFeedback2.jpg";

function UpworkSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="upworkSection">
      <h1>Upwork Proven Work History</h1>
      <div id="carouselContainer">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={upworkFeedback1}
              alt="First feedback"
            />
            <Carousel.Caption>
              <a
                className="review"
                href="https://www.upwork.com/freelancers/~01d5c3976414600ebf"
              >
                Brands reviewing website development from scratch
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={upworkFeedback2}
              alt="Second feedback"
            />
            <Carousel.Caption>
              <a
                className="review"
                href="https://www.upwork.com/freelancers/~01d5c3976414600ebf"
              >
                Advertisement platform built by me as a full stack developer
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default UpworkSection;
