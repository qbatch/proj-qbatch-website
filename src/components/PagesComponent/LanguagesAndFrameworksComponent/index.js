import React, { useRef, useState, useEffect } from "react";
import { navigate } from 'gatsby';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row, Accordion } from "react-bootstrap";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";

import LanguagesWrapper from "./style";

const defaultSliderSettings = {
  dots: false,
  infinite: false,
  speed: 500, 
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const LanguagesAndFrameworks = ({
  heading = 'Languages & Frameworks We Use',
  paragraph = 'Time-tested Web Application Development tools and technologies to build a cross-platform and secure application:',
  paragraphMaxWidth,
  showBtn = true,
  className,
  buttonText = "Discover the Right Toolkit for Your Project",
  onButtonClick = () => navigate('/contact'),
  languagesData = [], 
  sliderSettings = defaultSliderSettings, 
}) => {
  const sliderRef2 = useRef(null);
  const scrollRef2 = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePaginationItemClick = (index) => {
    setActiveIndex(index);
    if (sliderRef2.current) {
      sliderRef2.current.slickGoTo(index); 
    }
  };

  return (
    <LanguagesWrapper id="scene-trigger2" ref={scrollRef2} className={`stage-slider-main2 ${className}`}>
      <div>
        <Container>
          <div className="languages-header">
            <h2>{heading}</h2>
            {paragraph && <p style={{ maxWidth: paragraphMaxWidth }}>{paragraph}</p>}
          </div>

          <Row className="desktop-data">
            <Col lg={4}>
              <div className="pagination fixed-slider-pagination">
                <ul>
                  {languagesData?.map((item, index) => (
                    <li
                      key={index}
                      className={`pagination-item ${activeIndex === index ? 'active' : ''}`} 
                      onClick={() => handlePaginationItemClick(index)}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg={8} md={12}>
              {isMounted && (
                <Slider {...sliderSettings} ref={sliderRef2} afterChange={(index) => setActiveIndex(index)}>
                  {languagesData?.map((item, index) => (
                    <div key={index} className="framework-item">
                      <div className="items-wrapper">
                        {item.content.map((data, idx) => (
                          <div className="items" key={idx}>
                            <div className="framework-logo">
                              {data.img !== "" && (
                                <div className="logo-wrapper">
                                  <img src={data.img} alt="project" title="project" loading="lazy" />
                                </div>
                              )}
                              <p>{data.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </Slider>
              )}
            </Col>
          </Row>
          
          <div className="small-screen-data">
            <Accordion defaultActiveKey="0" className="languages-collapse d-flex flex-column gap-2">
              {languagesData.map((item, ind) => (
                <div key={ind}>
                  <Accordion.Item eventKey={ind}>
                    <Accordion.Header as="h3">{item.title}</Accordion.Header>
                    <Accordion.Body>
                      <div className="items-wrapper">
                        {item.content.map((data, idx) => (
                          <div className="items" key={idx}>
                            <div className="framework-logo">
                              {data.img !== "" && (
                                <div className="logo-wrapper">
                                  <img src={data.img} alt="project" title="project" loading="lazy" width='80%' height='80%' />
                                </div>
                              )}
                              <p>{data.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              ))}
            </Accordion>
          </div>
          
          {!showBtn && (
            <div className="languages-btn">
              <Button onClick={onButtonClick} text={buttonText} />
            </div>
          )}
        </Container>
      </div>
    </LanguagesWrapper>
  );
};

export default LanguagesAndFrameworks;
