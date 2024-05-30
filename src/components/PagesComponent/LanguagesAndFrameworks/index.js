import React, { useRef, useState } from "react";
import { navigate } from 'gatsby'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row, Accordion } from "react-bootstrap";

import { languagesData } from "../../../constants";
import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button"
import LanguagesWrapper from "./style";

const Index = ({ heading = 'Languages & Frameworks We Use', paragraph = 'Time-tested Web Application Development tools and technologies to build a cross-platform and secure application:',paragraphMaxWidth, showBtn  }) => {
  const sliderRef2 = useRef(null);
  const scrollRef2 = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
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
    sliderRef2.current.slickGoTo(index);
  };

  return (
    <LanguagesWrapper id="scene-trigger2" ref={scrollRef2} className="stage-slider-main2">
      <div>
        <Container>
          <div className="languages-header">
            <h2>{heading}</h2>
            <p style={{ maxWidth: paragraphMaxWidth }}>{paragraph}</p>
          </div>

          <Row className="desktop-data">
            <Col lg={3}>
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
            <Col lg={9} md={12}>
              <Slider {...sliderSettings} ref={sliderRef2}>
                {languagesData?.map((item, index) => (
                  <div key={index} className="framework-item">
                    <Row>
                      {item.content.map((data) => (
                        <Col md={4}>
                          <div className="framework-logo">
                            <div>
                              <div className="logo-wrapper">
                                {data.img === '' ? '' : <img src={data.img} alt="project" />}
                              </div>
                            </div>
                            <p>{data.desc}</p>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
          <div className="small-screen-data">
            <Accordion defaultActiveKey="0" className="languages-collapse d-flex flex-column gap-2">
              {languagesData.map((item, ind) => (
                <div key={ind}>
                  <Accordion.Item eventKey={ind}>
                    <Accordion.Header as="h3">{item.title}</Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        {item.content.map((data) => (
                          <Col md={4} sm={6} xs={6}>
                            <div className="framework-logo">
                              <div>
                                <div className="logo-wrapper">
                                  {data.img === '' ? '' : <img src={data.img} alt="project" />}
                                </div>
                              </div>
                              <p>{data.desc}</p>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              ))}
            </Accordion>
          </div>
          {!showBtn && 
            <div className="languages-btn">
              <Button onClick={() => navigate('/contact')} text="Discover the Right Toolkit for Your Project" />
            </div>
          }
        </Container>
      </div>
    </LanguagesWrapper>
  )
};

export default Index;
