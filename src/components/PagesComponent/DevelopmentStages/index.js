import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import StagesWrapper from "./style";
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
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
  };

  const handlePaginationItemClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  useEffect(() => {
    // Handle mousewheel events to change slides
    // const handleMouseWheel = (e) => {
    //   e.preventDefault();
    //   if (e.deltaY > 0) {
    //     sliderRef.current.slickNext();
    //   } else {
    //     sliderRef.current.slickPrev();
    //   }
    // };

    // Add event listener for mousewheel
    // document.addEventListener("wheel", handleMouseWheel);

    return () => {
      // Remove event listener when component unmounts
      //   document.removeEventListener("wheel", handleMouseWheel);
    };
  }, []);

  return (
    <StagesWrapper>
      <div className="stages-header">
        <h2>Stuck at any of these development stages?  We can help.</h2>
        <p>
          Optimize your idea at each step with our technological prowess and
          business-critical insight.
        </p>
      </div>
      <Container>
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
                        <img src={item.image} alt="project" />
                      </Col>
                      <Col lg={7} md={7} className="slider-column-text">
                        <div className="title">
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
  );
};

export default DevelopmentStages;
