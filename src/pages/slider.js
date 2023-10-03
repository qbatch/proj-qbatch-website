import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";

const SliderSection = () => {
  const sliderItems = [
    {
      image: "/slider-image.png",
      startYear: 1920,
      endYear: 1940,
      content: "Lorem ipsum paragraph for 1940",
    },
    {
      image: "/slider-image.png",
      startYear: 1940,
      endYear: 1960,
      content: "Lorem ipsum paragraph for 1960",
    },
    {
      image: "/slider-image.png",
      startYear: 1960,
      endYear: 1980,
      content: "Lorem ipsum paragraph for 1980",
    },
    {
      image: "/slider-image.png",
      startYear: 1980,
      endYear: 2020,
      content: "Lorem ipsum paragraph for 2020",
    },
  ];

  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    const handleMouseWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    };

    // Add event listener for mousewheel
    document.addEventListener("wheel", handleMouseWheel);

    return () => {
      // Remove event listener when component unmounts
      document.removeEventListener("wheel", handleMouseWheel);
    };
  }, []);

  return (
    <Container>
      <div className="slider-section">
        <Slider {...sliderSettings} ref={sliderRef}>
          {sliderItems.map((item, index) => (
            <div key={index} className="slider-item">
              <Row>
              <Col md={6}>
                    <img src={item.image} alt="project" />
                </Col>
                <Col md={6}>
                  <div className="year">
                    <h2>
                    <CountUp
                      start={item.startYear}
                      end={
                        activeIndex === index ? item.endYear : item.startYear
                      }
                      duration={3}
                      separator=""
                    />
                    </h2>
                  </div>
                  <div className="content">{item.content}</div>
                </Col>
              </Row>
            </div>
          ))}
        </Slider>
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
                {item.endYear}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default SliderSection;
