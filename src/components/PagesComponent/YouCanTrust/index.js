import React, { useRef, useEffect, useState } from "react";
import { navigate } from 'gatsby'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VisibilitySensor from "react-visibility-sensor";

import { youCanTrustData } from "../../../constants";
import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";

import YouCanTrustWrapper from "./style";
import { Col, Row } from "react-bootstrap";

const Index = () => {
  const sliderRef2 = useRef(null);
  const scrollRef2 = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevVisibility, setPrevVisibility] = useState(false);

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
  const sliderSettings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,

    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
  };

  useEffect(() => {
    const handleMouseWheel = (e) => {
      const isAtFirstSlide = activeIndex === 0;
      const isAtLastSlide = activeIndex === youCanTrustData.length - 1;

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
    const sliderElement = document.querySelector(".stage-slider-automation");
    sliderElement.addEventListener("wheel", handleMouseWheel);

    return () => {
      // Remove event listener when the component unmounts
      sliderElement.removeEventListener("wheel", handleMouseWheel);
    };
  }, [activeIndex]);
  const heading = "We Are Developers You Can Trust For Your Web App";
  const paragraph1 =
    "A web app is more than APIs and design, it’s following the human-to-human approach and building what the world needs.";
  const paragraph2 =
    "Developers that stay laser-focused and put equal effort into both back-end and front-end systems ensuring user experience and convenience from scratch to end— are rare. That’s why we as custom web application developers perform the daunting task by validating your vision with complete vigilance and launching web experiences that serve and leave a mark.";
  return (
    <>
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility={true} offset={{ bottom: 300, top: 300 }}>
        <YouCanTrustWrapper
          id="automation-trigger"
          ref={scrollRef2}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="stage-slider-automation"
        >
          <Container>
            <Row>
              <Col lg={6}>
                <div className="trust-heading">
                  <h2>{heading}</h2>
                  <p>{paragraph1}</p>
                  <p>{paragraph2}</p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="slider-section">
                  <Row>
                    <Col lg={1} md={12}>
                      <div className="slide-counter">
                        <span>{activeIndex + 1}</span>
                        <span></span>
                        <span>{youCanTrustData.length}</span>
                      </div>
                    </Col>
                    <Col lg={11} md={12}>
                      <Slider {...sliderSettings} ref={sliderRef2}>
                        {youCanTrustData?.map((item, index) => (
                          <div key={index} className="slider-data">
                            <h4>{item.title}</h4>
                            <img src={item.icon} alt="logo" />
                          </div>
                        ))}
                      </Slider>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <div className="trust-btn">
              <Button onClick={() => navigate('/contact')} text="Get Started Risk-Free" />
            </div>
          </Container>
        </YouCanTrustWrapper>
      </VisibilitySensor>
      <YouCanTrustWrapper className="responsive-section">
        <Container>
          <div className="trust-heading">
            <h2>{heading}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
          {youCanTrustData?.map((item, index) => (
            <div key={index} className="card-data">
              <h3 className="text-h4">{item.title}</h3>
              <div>
                <img src={item.icon} alt="logo" />
              </div>
            </div>
          ))}
          <div className="trust-btn">
            <Button onClick={() => navigate('/contact')} text="Get Started Risk-Free" />
          </div>
        </Container>
      </YouCanTrustWrapper>
    </>
  )
};

export default Index;
