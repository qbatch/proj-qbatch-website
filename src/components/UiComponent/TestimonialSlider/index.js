import React, { useState, useRef } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Player, BigPlayButton, LoadingSpinner } from "video-react";

import ProjectIcon from "../../../assets/images/icons/ecom-circle-icon.svg";
import ArrowLeftIcon from "../../../assets/images/icons/arrow-left-small.svg";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-small.svg";

import ProvenExperienceWrapper from "./style";

const projectSlides = [
  {
    id: 1,
    projectVideo:
      "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
    title: "Client Name",
    subtitle: "Company Name"
  },
  {
    id: 2,
    projectVideo:
      "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
    title: "Store Filter",
    subtitle: "Company Name"
  },
  {
    id: 3,
    projectVideo:
      "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
    title: "Sales Support",
    subtitle: "Company Name"
  },
  {
    id: 4,
    projectVideo:
      "http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",
    title: "Squid Plan",
    subtitle: "Company Name"
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1700 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1200 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 0 },
    items: 1,
  },
};

const responsiveTitle = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Index = () => {
  const [currentInd, setCurrentInd] = useState(1);

  const carousel1Ref = useRef(null);
  const carousel2Ref = useRef(null);

  const handleButtonClickPre = () => {
    carousel1Ref.current.previous();
    carousel2Ref.current.previous();
  };

  const handleButtonClickNext = () => {
    carousel1Ref.current.next();
    carousel2Ref.current.next();
  };

  return (
    <ProvenExperienceWrapper>
      <div className="section-slider">
       

          <Carousel
            responsive={responsive}
            arrows={false}
            ref={carousel1Ref}
            swipeable={false}
            draggable={false}
          >
            {projectSlides.map((item, ind) => (
              <div className="video-wrapper" key={ind}>
                <Player playsInline src={item.projectVideo}>
                  <BigPlayButton position="center" />
                  <LoadingSpinner />
                </Player>
              </div>
            ))}
          </Carousel>
         <div className="bottom-slider">
         <Carousel
            responsive={responsiveTitle}
            arrows={false}
            ref={carousel2Ref}
            swipeable={false}
            draggable={false}
          >
            {projectSlides.map((item, ind) => (
              <div className="testimonial-title" key={ind}>
                <ProjectIcon />
                <div className="inner-text">
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </Carousel>
          <div className="carousel-button-group d-flex align-items-center">
            <ArrowLeftIcon
              onClick={() => {
                handleButtonClickPre();
                setCurrentInd(currentInd === 1 ? 1 : currentInd - 1);
              }}
            />
            <span>
              <span className="fw-bold">
                {currentInd < 10 && 0}
                {currentInd}
              </span>
              <span>/</span>
              <span>
                {projectSlides.length < 10 && 0}
                {projectSlides.length}
              </span>
            </span>
            <ArrowRightIcon
              onClick={() => {
                handleButtonClickNext();
                setCurrentInd(
                  currentInd === projectSlides.length
                    ? currentInd
                    : currentInd + 1
                );
              }}
            />
          </div>
         </div>

        
      </div>

    </ProvenExperienceWrapper>
  );
};

export default Index;
