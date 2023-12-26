import React, { useRef, useState } from "react";
import { navigate } from 'gatsby'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row } from "react-bootstrap";

import { languagesData } from "../../../constants";
import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button"

import LanguagesWrapper from "./style";

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
    <LanguagesWrapper id="scene-trigger2" ref={scrollRef2} className="stage-slider-main2">
      <div>
        <Container>
          <div className="languages-header">
            <h2>Languages & Frameworks We Use</h2>
            <p>
              Time-tested Web Application Development tools and technologies to build a cross-platform and secure
              application:
            </p>
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
                            {data.img === '' ? '' : <img src={data.img} alt="project" />}
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
            {languagesData.map((item, ind) => (
              <div key={ind}>
                <h3>{item.title}</h3>
                <Row>
                  {item.content.map((data) => (
                    <Col md={4} sm={6} xs={6}>
                      <div className="framework-logo">
                        {data.img === '' ? '' : <img src={data.img} alt="project" />}
                        <p>{data.desc}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </div>
          <div className="languages-btn">
            <Button onClick={() => navigate('/contact')} text="Discover the Right Toolkit for Your Project" />
          </div>
        </Container>
      </div>
    </LanguagesWrapper>
  )
};

export default Index;
