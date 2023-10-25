import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VisibilitySensor from "react-visibility-sensor";

import { revenueData } from "../../../constants";
import Container from "../../UiComponent/Container";

import RevenueWrapper from "./style";
import { Col, Row } from "react-bootstrap";

const Index = () => {
  const sliderRef2 = useRef(null);
  const scrollRef2 = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevVisibility, setPrevVisibility] = useState(false);

  const scrollToSectionStart = () => {
    if (scrollRef2.current) {
      const sectionTop = scrollRef2.current.offsetTop;
      const sectionTopCalc = sectionTop - 80;
      window.scrollTo({
        top: sectionTopCalc,
        behavior: "smooth",
      });
    }
  };
  const handleVisibilityChange = (isVisible) => {
    // If the section becomes visible or when scrolling from top or bottom
    if (isVisible || (isVisible && !prevVisibility)) {
      scrollToSectionStart(isVisible);
    }
    setPrevVisibility(isVisible); // Store the previous visibility state
  };
  const handleMouseEnter = () => {
    document.body.style.overflow = "hidden";
    scrollToSectionStart();
  };
  const handleMouseLeave = () => {
    document.body.style.overflow = "auto";
  };
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
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

  useEffect(() => {
    const handleMouseWheel = (e) => {
      const isAtFirstSlide = activeIndex === 0;
      const isAtLastSlide = activeIndex === revenueData.length - 1;

      if (e.deltaY > 0) {
        if (!isAtLastSlide) {
          e.preventDefault();
          sliderRef2.current.slickNext();
          scrollToSectionStart();
          document.body.style.overflow = "hidden";
        } else {
          setTimeout(() => {
            document.body.style.overflow = "auto";
          }, 1000);
        }
      } else if (e.deltaY < 0) {
        if (isAtFirstSlide) {
          setTimeout(() => {
            document.body.style.overflow = "auto";
          }, 1000);
        } else {
          e.preventDefault();
          sliderRef2.current.slickPrev();
          scrollToSectionStart();
          document.body.style.overflow = "hidden";
        }
      }
    };

    // Add event listener for mousewheel
    const sliderElement = document.querySelector(".stage-slider-revenue");
    sliderElement.addEventListener("wheel", handleMouseWheel);

    return () => {
      // Remove event listener when the component unmounts
      sliderElement.removeEventListener("wheel", handleMouseWheel);
    };
  }, [activeIndex]);
  return (
    <VisibilitySensor onChange={handleVisibilityChange}
    partialVisibility={true}
    offset={{bottom:300, top:300}}
    >
    <RevenueWrapper
      id="revenue-trigger"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={scrollRef2}
      className="stage-slider-revenue"
    >
      <Container>
        <div className="revenue-heading">
          <h2>To all the sellers, it’s time to triple your revenue!</h2>
          <p>We tap multiple selling verticals not limited to</p>
        </div>
        <div className="slider-section">
          <Row>
            <div className="d-flex justify-content-center">
              <Col xl={8} lg={10} md={12}>
                <Row>
                  <Col lg={1} md={12}>
                    <div className="slide-counter d-flex flex-column justify-content-center h-100">
                      <span>{activeIndex + 1}</span>
                      <span></span>
                      <span>{revenueData.length}</span>
                    </div>
                  </Col>
                  <Col lg={11} md={12}>
                    <Slider {...sliderSettings} ref={sliderRef2}>
                      {revenueData?.map((item, index) => (
                        <div
                          key={index}
                          className="slider-data d-flex align-items-center"
                        >
                          <img src={item.img} alt="logo" />
                          <div>
                            <h3>{item.title}</h3>
                            <h4>{item.description}</h4>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </Col>
                </Row>
              </Col>
            </div>
          </Row>
        </div>
      </Container>
    </RevenueWrapper>
    </VisibilitySensor>
  );
};

export default Index;
