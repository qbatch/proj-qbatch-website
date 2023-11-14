import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import Container from "../../UiComponent/Container";
import { developmentServicesData } from "../../../constants";

import ScrollSliderWrapper from "./style";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Index = () => {
  const [currentInd, setCurrentInd] = useState(1);
    console.log(currentInd,"ind");

  return (
    <ScrollSliderWrapper>
      <div className="scroll-slider">
        <Carousel
          responsive={responsive}
          // arrows={false}
          ssr
          partialVisible={true}
          afterChange={(previousSlide, { currentSlide }) =>
          setCurrentInd(currentSlide + 3)
        }
        >
          {developmentServicesData.map((item, ind) => (
            <div className="guidance-card" key={ind}>
              <img src={item.icon} alt="card icon" />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </Carousel>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: currentInd === 1 ? "50%" : `${((currentInd) / developmentServicesData.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </ScrollSliderWrapper>
  );
};

export default Index;
