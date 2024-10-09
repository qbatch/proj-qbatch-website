import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row, Accordion } from "react-bootstrap";

import { realEstateIntegrationData } from "../../../constants";
import Container from "../../UiComponent/Container";

import RealEstateIntegrationWrapper from "./style";

const Index = () => {
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
    <RealEstateIntegrationWrapper id="scene-trigger2" ref={scrollRef2} className="stage-slider-main2">
      <div>
        <Container>
          <div className="languages-header">
            <h2>Real Estate Integrations we support </h2>
          </div>

          <Row className="desktop-data">
            <Col lg={4}>
              <div className="pagination fixed-slider-pagination">
                <ul>
                  {realEstateIntegrationData?.map((item, index) => (
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
              <Slider {...sliderSettings} ref={sliderRef2}>
                {realEstateIntegrationData?.map((item, index) => (
                  <div key={index} className="framework-item">
                    <Row>
                      {item.content.map((data) => (
                        <Col md={4}>
                          <div className="framework-logo">
                            {data.img !== "" &&
                              <div className="logo-wrapper">
                                <img src={data.img} alt="project" title="project" loading="lazy" />
                              </div>
                            }
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
              {realEstateIntegrationData.map((item, ind) => (
                <div key={ind}>
                  <Accordion.Item eventKey={ind}>
                    <Accordion.Header as="h3">{item.title}</Accordion.Header>
                    <Accordion.Body>
                      <div className="framework-wrapper">
                        {item.content.map((data) => (
                          <div className="framework-logo">
                            {data.img !== "" &&
                              <div className="logo-wrapper">
                                <img src={data.img} alt="project" title="project" loading="lazy" width='80%' height='80%' />
                              </div>
                            }
                          </div>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              ))}
            </Accordion>
          </div>
        </Container>
      </div>
    </RealEstateIntegrationWrapper>
  )
};

export default Index;
