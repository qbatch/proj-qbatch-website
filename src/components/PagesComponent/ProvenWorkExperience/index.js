import React, { useState, useRef } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Row, Col } from "react-bootstrap";

import Button from "../../../components/UiComponent/Button";
import Container from "../../UiComponent/Container";

import ArrowLeftIcon from "../../../assets/images/icons/arrow-left-small.svg";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-small.svg";

import ProvenExperienceWrapper from "./style";

const projectSlides = [
  {
    projectImg: '/E-Com-Circles.svg',
    title: 'Ecom Circles',
    logo: '/e-commerce-logo.svg',
    category: 'E-Commerce',
    tags: ['Tech 1', 'Tech 2', 'Tech 3'],
  },
  {
    projectImg: '/one-app-app.svg',
    title: 'Store Filter',
    logo: '/one-app-logo.svg',
    category: 'E-Commerce',
    tags: ['Tech 1', 'Tech 2', 'Tech 3'],
  },
  {
    projectImg: '/store-filter-app.svg',
    title: 'Sales Support',
    logo: '/store-filter-logo.svg',
    category: 'E-Commerce',
    tags: ['Tech 1', 'Tech 2', 'Tech 3'],
  },
  {
    projectImg: '/friend-filter-app.svg',
    title: 'Squid Plan',
    logo: 'friend-filter-logo.svg',
    category: 'E-Commerce',
    tags: ['Tech 1', 'Tech 2', 'Tech 3'],
  },
  {
    projectImg: '/sales-support-app.svg',
    title: 'Squid Plan',
    logo: 'sales-support-logo.svg',
    category: 'E-Commerce',
    tags: ['Tech 1', 'Tech 2', 'Tech 3'],
  },
]

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

const Index = ({ heading, paragraph }) => {
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
            <h2 className="heading text-h1">{heading}</h2>
            <p className="paragraph">
            {paragraph}
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
                      <img src={item.logo} alt="logo" />
                      <h3>{item.title}</h3>
                      <span>{item.category}</span>
                      <div className="project-tags d-flex">
                        {item.tags.map((tag, ind) => (
                          <div key={ind}>{tag}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </Carousel>
                <div className="carousel-button-group d-flex align-items-center">
                  <ArrowLeftIcon
                    onClick={() => {
                      handleButtonClickPre()
                      setCurrentInd(currentInd === 1 ? 1 : currentInd - 1)
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
                      handleButtonClickNext()
                      setCurrentInd(currentInd === projectSlides.length ? currentInd : currentInd + 1)
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
    </ProvenExperienceWrapper>
  )
};

export default Index;
