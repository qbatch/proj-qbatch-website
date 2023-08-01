import React, { useState, useRef } from "react";
import ProvenExperienceWrapper from "./style";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Row, Col } from "react-bootstrap";

import Button from "../../../components/UiComponent/Button";
import Container from "../../UiComponent/Container";

import ProjectIcon from "../../../assets/images/icons/ecom-circle-icon.svg";
import ArrowLeftIcon from "../../../assets/images/icons/arrow-left-small.svg";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-small.svg";

const projectSlides = [
  {
    id: 1,
    projectImg:
      "https://cdn.pixabay.com/photo/2023/07/19/05/54/european-shorthair-8136129_1280.jpg",
    title: "Ecom Circles",
  },
  {
    id: 2,
    projectImg:
      "https://cdn.pixabay.com/photo/2023/07/17/13/50/baby-snow-leopard-8132690_1280.jpg",
    title: "Store Filter",
  },
  {
    id: 3,
    projectImg:
      "https://cdn.pixabay.com/photo/2023/06/09/18/18/deer-8052359_1280.jpg",
    title: "Sales Support",
  },
  {
    id: 4,
    projectImg:
      "https://cdn.pixabay.com/photo/2023/07/07/05/56/bird-8111792_1280.jpg",
    title: "Squid Plan",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1700 },
    items: 1.5,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1200 },
    items: 1.24,
  },
  tablet: {
    breakpoint: { max: 1200, min: 0 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 992, min: 0 },
    items: 1,
  },
};

const responsiveTitle = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Index = () => {
  
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
    <ProvenExperienceWrapper>
      <Container>
        <div className="section-heading d-flex flex-wrap justify-content-between align-items-start">
          <div>
            <h1>Proven Work Experience</h1>
            <p>
              Innovators from across the industry have trusted Qbatch to build
              high-impact products.
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
            <Col lg={3} md={12} sm={12} className="p-0">
              <div className="carousel-padding">
                <Carousel
                  responsive={responsiveTitle}
                  arrows={false}
                  ref={carousel2Ref}
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
            <Col lg={9} md={12} sm={12} className="p-0">
              <div className="projects-carousel">
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  ref={carousel1Ref}
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
    </ProvenExperienceWrapper>
  );
};

export default Index;