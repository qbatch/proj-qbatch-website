import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import VisibilitySensor from "react-visibility-sensor";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";

import Button from "../../UiComponent/Button";

import StagesWrapper from "./style";

const DevelopmentStages = (props) => {
  const {
    heading,
    desc,
    sliderData,
    col1,
    col2,
    subCol1,
    subCol2,
    className,
    mt,
  } = props;
  const sliderRef = useRef(null);
  const scrollRef = useRef(null);
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
    if (scrollRef.current) {
      const sectionTop = scrollRef.current.offsetTop;
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

  const handlePaginationItemClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  useEffect(() => {
    const handleMouseWheel = (e) => {
      const isAtFirstSlide = activeIndex === 0;
      const isAtLastSlide = activeIndex === sliderData?.length - 1;

      if (e.deltaY > 0) {
        if (!isAtLastSlide) {
          e.preventDefault();
          sliderRef.current.slickNext();
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
          sliderRef.current.slickPrev();
          scrollToSectionStart();
          document.body.style.overflow = "hidden";
        }
      }
    };

    // Add event listener for mousewheel
    const sliderElement = document.querySelector(".stage-slider-main");
    sliderElement.addEventListener("wheel", handleMouseWheel);

    return () => {
      // Remove event listener when the component unmounts
      sliderElement.removeEventListener("wheel", handleMouseWheel);
    };
  }, [activeIndex, sliderData?.length]);
  const marketplace = sliderData.find((x) => x.content);
  return (
    <VisibilitySensor onChange={handleVisibilityChange}
    partialVisibility={true}
    offset={{bottom:400, top:400}}
    >
        <StagesWrapper
          id="scene-trigger"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={scrollRef}
          className={`stage-slider-main`}
          marketplace={marketplace ? "" : "49px"}
        >
          <div>
            <Container>
              <div className="stages-header">
                <h2>{heading}</h2>
                <p>{desc}</p>
              </div>
              <div className="slider-section">
                <Row>
                  <Col lg={col1} className="fixed-slider-column">
                    <div className="pagination fixed-slider-pagination">
                      <ul className={mt}>
                        {sliderData?.map((item, index) => (
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
                  <Col lg={col2} md={12} className={className}>
                    <Slider {...sliderSettings} ref={sliderRef}>
                      {sliderData?.map((item, index) => (
                        <div key={index} className="slider-item">
                          <Row>
                            {!item.content ? (
                              item.image.map((img) => (
                                <Col md={6}>
                                  <div className="mb-5">
                                    <img src={img} alt="project" />
                                  </div>
                                </Col>
                              ))
                            ) : (
                              <>
                                <Col lg={subCol1} md={5}>
                                  <div className="title title-responsive">
                                    <h3>{item.title}</h3>
                                  </div>
                                  <img src={item.image} alt="project" />
                                </Col>
                                <Col
                                  lg={subCol2}
                                  md={7}
                                  className="slider-column-text"
                                >
                                  <div className="title title-desktop">
                                    <h3>{item.title}</h3>
                                  </div>
                                  <div className="content">
                                    {item.content}
                                    <ul>
                                      {item.list?.map((listItem, listIndex) => (
                                        <li key={listIndex}>{listItem}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </Col>
                              </>
                            )}
                          </Row>
                        </div>
                      ))}
                    </Slider>
                    {marketplace ? (
                      <div className="slider-btn">
                        <Button text="Book Free Demo" />
                      </div>
                    ) : (
                      ""
                    )}
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </StagesWrapper>
        </VisibilitySensor>
  );
};

export default DevelopmentStages;
