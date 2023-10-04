import React, { useState, useRef }  from 'react';
import OurProjectWrapper from './style';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Row, Col } from "react-bootstrap";

import Button from "../../../components/UiComponent/Button";
import Container from "../../UiComponent/Container";
import ProjectIcon from "../../../assets/images/icons/ecom-circle-icon.svg";
import ArrowLeftIcon from "../../../assets/images/icons/arrow-left-small.svg";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-small.svg";

import Divider from "../../UiComponent/Divider";

const projectSlides = [
  {
    projectImg:
      "/slider-image.png",
    title: "Ecom Circles",
  },
  {
    projectImg:
       "/slider-image.png",
    title: "Store Filter",
  },
  {
    projectImg:
        "/slider-image.png",
    title: "Sales Support",
  },
  {
    projectImg:
        "/slider-image.png",
    title: "Squid Plan",
  },
  {
    projectImg:
        "/slider-image.png",
    title: "Squid Plan",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 768 },
    items: 1,
    partialVisibilityGutter: 202,
  },
  desktop: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const responsiveTitle = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};
const index = () => {
  const [currentInd, setCurrentInd] = useState(1);

  const carousel1Ref = useRef(null);
  const carousel2Ref = useRef(null);

  const handleButtonClickPre = () => {
    carousel1Ref.current.previous();
    carousel2Ref.current.previous();
  };

  const handleButtonClickNext = () => {
    carousel1Ref.current.next();
    carousel2Ref.current.next();
  };
  return (
    <>
      <OurProjectWrapper>
      <Container>
        <div className="section-heading d-flex flex-wrap justify-content-between align-items-start">
          <div>
            <h2>Our Projects</h2>
            <p>
            They imagined it, we brought it to the world!
            </p>
          </div>
          <div className="mt-md-4 mt-0">
            <Button text="Explore More" />
          </div>
        </div>
      </Container>
      <div className="container-slider">
        <div className="section-slider">
          <Row>
            <Col lg={4} md={12} sm={12} className="p-0 d-flex flex-column justify-content-center">
              <div className="carousel-padding">
                <Carousel
                  responsive={responsiveTitle}
                  arrows={false}
                  ref={carousel2Ref}
                  swipeable={false}
                  draggable={false}
                >
                  {projectSlides.map((item, ind) => (
                    <div className="project-title" key={ind}>
                      <ProjectIcon />
                      <h3>{item.title}</h3>
                      <span>E-Commerce</span>
                      <div className="project-tags d-flex">
                        {["Tech 1", "Tech 2", "Tech 3"].map((tag, ind) => (
                          <div key={ind}>{tag}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </Carousel>
                <div className="carousel-button-group d-flex align-items-center">
                  <ArrowLeftIcon
                    onClick={() => {
                      handleButtonClickPre();
                      setCurrentInd(currentInd === 1 ? 1 : currentInd - 1);
                    }}
                  />
                  <span>
                    <span className="fw-bold">
                      {currentInd < 10 && 0}
                      {currentInd}
                    </span>
                    <span>/</span>
                    <span>
                      {projectSlides.length < 10 && 0}
                      {projectSlides.length}
                    </span>
                  </span>
                  <ArrowRightIcon
                    onClick={() => {
                      handleButtonClickNext();
                      setCurrentInd(
                        currentInd === projectSlides.length
                          ? currentInd
                          : currentInd + 1
                      );
                    }}
                  />
                </div>
              </div>
            </Col>
            <Col lg={8} md={12} sm={12} className="p-0">
              <div className="projects-carousel">
                <Carousel
                  partialVisible={true}
                  responsive={responsive}
                  arrows={false}
                  ref={carousel1Ref}
                  swipeable={false}
                  draggable={false}
                  itemClass="qb-carousel-item"
                >
                  {projectSlides.map((item, ind) => (
                    <div key={ind}>
                      <img src={item.projectImg} alt="project" />
                    </div>
                  ))}
                </Carousel>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Container>
        <p className='our-project-paragraph'>We’ve helped launch an intuitive E-commerce business management platform for the biggest beverage company in North America with 150+ principal warehouses. The mobile app offers easy grocery and product delivery services with over 100K+ downloads. <br/> They imagined it, we brought it to the world!</p>
      </Container>
      </OurProjectWrapper>
      <Divider/>
    </>
  );
};

export default index;