import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { automationData } from "../../../constants";
import Container from "../../UiComponent/Container";

import AutomationWrapper from "./style";
import { Col, Row } from "react-bootstrap";

const Index = () => {
  const sliderRef2 = useRef(null);
  const scrollRef2 = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSectionStart = () => {
    if (scrollRef2.current) {
      const sectionTop = scrollRef2.current.offsetTop;
      const sectionTopCalc = sectionTop - 20;
      window.scrollTo({
        top: sectionTopCalc,
        behavior: "smooth",
      });
    }
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
      const isAtLastSlide = activeIndex === automationData.length - 1;

      if (e.deltaY > 0) {
        if (!isAtLastSlide) {
          e.preventDefault();
          sliderRef2.current.slickNext();
          scrollToSectionStart();
          document
            .getElementById("automation-trigger")
            .classList.add("section-sticky");
        } else {
          document.body.style.overflow = "auto";
          document
            .getElementById("automation-trigger")
            .classList.remove("section-sticky");
        }
      } else if (e.deltaY < 0) {
        if (isAtFirstSlide) {
          document.body.style.overflow = "auto";
          document
            .getElementById("automation-trigger")
            .classList.remove("section-sticky");
        } else {
          e.preventDefault();
          sliderRef2.current.slickPrev();
          scrollToSectionStart();
          document
            .getElementById("automation-trigger")
            .classList.add("section-sticky");
        }
      }
    };

    // Add event listener for mousewheel
    const sliderElement = document.querySelector(".stage-slider-automation");
    sliderElement.addEventListener("wheel", handleMouseWheel);

    return () => {
      // Remove event listener when the component unmounts
      sliderElement.removeEventListener("wheel", handleMouseWheel);
    };
  }, [activeIndex]);
  return (
    <AutomationWrapper
      id="automation-trigger"
      ref={scrollRef2}
      className="stage-slider-automation"
    >
      <Container>
        <div className="automation-heading">
          <h2>
            Automation is 99% software but, 1% mindset{" "}
            <span>(and oh, that 1%)</span>
          </h2>
          <p>This is your hint to bury your conventional e-commerce ways and</p>
        </div>
        <div className="slider-section">
          <Row>
            <div className="d-flex justify-content-center">
              <Col lg={10} md={12}>
                <Row>
                  <Col lg={1} md={12}>
                    <div className="slide-counter">
                      <span>{activeIndex + 1}</span>
                      <span></span>
                      <span>{automationData.length}</span>
                    </div>
                  </Col>
                  <Col lg={11} md={12}>
                    <Slider {...sliderSettings} ref={sliderRef2}>
                      {automationData?.map((item, index) => (
                        <div
                          key={index}
                          className="slider-data d-flex align-items-center"
                        >
                          <Row>
                            <Col md={5}>
                              <div className="d-flex align-items-center h-100">
                                <h3>{item.description}</h3>
                              </div>
                            </Col>
                            <Col md={7} className="ps-0">
                              <img src={item.img} alt="logo" />
                            </Col>
                          </Row>
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
    </AutomationWrapper>
  );
};

export default Index;
