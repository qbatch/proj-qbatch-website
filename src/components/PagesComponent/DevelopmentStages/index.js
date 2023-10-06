import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import StagesWrapper from "./style";
import { Controller, Scene } from 'react-scrollmagic';
import { sliderItems } from "../../../constants";

const DevelopmentStages = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    vertical: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
  };

  const handlePaginationItemClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  useEffect(() => {
    // Handle mousewheel events to change slides and enable/disable window scroll
    const handleMouseWheel = (e) => {
      const isAtFirstSlide = activeIndex === 0;
      const isAtLastSlide = activeIndex === sliderItems.length - 1;

      if (e.deltaY > 0) {
        // Scrolling down
        if (!isAtLastSlide) {
          e.preventDefault();
          sliderRef.current.slickNext();
        } else {
          // Enable window scroll when at the last slide
          document.body.style.overflow = "auto";
        }
      } else if (e.deltaY < 0) {
        // Scrolling up
        if (isAtFirstSlide) {
          // Enable window scroll when at the first slide and scrolling up
          document.body.style.overflow = "auto";
        } else {
          e.preventDefault();
          sliderRef.current.slickPrev();
        }
      }
    };

    // Add event listener for mousewheel
    const sliderElement = document.querySelector(".stage-slider-main");
    sliderElement.addEventListener("wheel", handleMouseWheel);

    return () => {
      // Remove event listener when component unmounts
      sliderElement.removeEventListener("wheel", handleMouseWheel);
    };
  }, [activeIndex]);

  return (
    <Controller>
     <Scene
          triggerHook="onLeave"
          duration={600}
          pin
        >
    <StagesWrapper>
      <Container className="stage-slider-main">
        <div className="stages-header">
          <h2>Stuck at any of these development stages?  We can help.</h2>
          <p>
            Optimize your idea at each step with our technological prowess and
            business-critical insight.
          </p>
        </div>
        <div className="slider-section">
          <Row>
            <Col lg={4} className="fixed-slider-column">
              <div className="pagination fixed-slider-pagination">
                <ul>
                  {sliderItems.map((item, index) => (
                    <li
                      key={index}
                      className={`pagination-item ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => handlePaginationItemClick(index)}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={8} md={12} className="slider-column">
              <Slider {...sliderSettings} ref={sliderRef}>
                {sliderItems.map((item, index) => (
                  <div key={index} className="slider-item">
                    <Row>
                      <Col lg={5} md={5}>
                        <div className="title title-responsive">
                          <h3>{item.title}</h3>
                        </div>
                        <img src={item.image} alt="project" />
                      </Col>
                      <Col lg={7} md={7} className="slider-column-text">
                        <div className="title title-desktop">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="content">
                          {item.content}
                          <ul>
                            {item.list.map((listItem, listIndex) => (
                              <li key={listIndex}>{listItem}</li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </div>
      </Container>
    </StagesWrapper>
    </Scene>
  </Controller>
  );
};

export default DevelopmentStages;
