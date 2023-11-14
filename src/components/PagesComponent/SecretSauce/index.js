import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VisibilitySensor from "react-visibility-sensor";
import { Col, Row } from "react-bootstrap";

import Container from "../../UiComponent/Container";

import SecretSauceWrapper from "./style";

const Index = (props) => {
  const { heading, heading2, desc, data, className } = props;
  const sliderRef2 = useRef(null);
  const scrollRef2 = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevVisibility, setPrevVisibility] = useState(false);

  const scrollToSectionStart = () => {
    if (scrollRef2.current) {
      const sectionTop = scrollRef2.current.offsetTop;
      const sectionTopCalc = sectionTop - 50;
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
    verticalSwiping: true,
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
      const isAtLastSlide = activeIndex === data.length - 1;

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
    const sliderElement = document.querySelector(".secret-slider-revenue");
    sliderElement.addEventListener("wheel", handleMouseWheel);

    return () => {
      // Remove event listener when the component unmounts
      sliderElement.removeEventListener("wheel", handleMouseWheel);
    };
  }, [activeIndex, data.length]);
  return (
    <>
      <VisibilitySensor
        onChange={handleVisibilityChange}
        partialVisibility={true}
        offset={{ bottom: 300, top: 300 }}
      >
        <SecretSauceWrapper
          id="revenue-trigger"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={scrollRef2}
          className={`secret-slider-revenue ${className}`}
        >
          <Container>
            <div className="secret-heading">
              <h2>{heading}</h2>
              {heading2 && <h3 className="text-h4">{heading2}</h3>}
              <p>{desc}</p>
            </div>
            <div className="slider-section">
              <Row>
                <div className="center-align">
                  <Col xl={10} lg={12} md={12}>
                    <Row>
                      <Col lg={2} md={12}>
                        <div className="slide-counter">
                          <span>{activeIndex + 1}</span>
                          <span></span>
                          <span>{data.length}</span>
                        </div>
                      </Col>
                      <Col lg={10} md={12}>
                        <Slider {...sliderSettings} ref={sliderRef2}>
                          {data?.map((item, index) => (
                            <div key={index} className="slider-data">
                              <Row>
                                <Col md={4}>
                                  <div className="slider-img">
                                    <img src={item.img} alt="logo" />
                                  </div>
                                </Col>
                                <Col md={8}>
                                  <div className="slider-desc d-flex flex-column justify-content-center h-100">
                                    <h4 className="text-h3">{item.title}</h4>
                                    <p>{item.description}</p>
                                  </div>
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
        </SecretSauceWrapper>
      </VisibilitySensor>
      {/* small screen section */}
      <SecretSauceWrapper className={`secret-small-section ${className}`}>
        <Container>
          <div className="secret-heading">
            <h2>{heading}</h2>
            <h3 className="text-h4">{heading2}</h3>
            <p>{desc}</p>
          </div>
          <div>
            {data?.map((item, index) => (
              <div key={index} className="slider-data">
                <Row>
                  <Col md={4}>
                    <div className="slider-img">
                      <img src={item.img} alt="logo" />
                    </div>
                  </Col>
                  <Col md={8}>
                    <div className="slider-desc d-flex flex-column justify-content-center h-100">
                      <h4 className="text-h3">{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </Container>
      </SecretSauceWrapper>
    </>
  );
};

export default Index;
