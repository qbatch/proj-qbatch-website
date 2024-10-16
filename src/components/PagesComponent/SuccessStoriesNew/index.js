import React, { useRef, useState } from 'react';
import { navigate, useStaticQuery, graphql } from 'gatsby';
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Container from '../../UiComponent/Container';
import Button from '../../UiComponent/Button';

import ArrowLeftIcon from "../../../assets/images/icons/arrow-left-small.svg";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-small.svg";

import SuccessStoriesNewWrapper from './style';

const Index = ({ heading, className }) => {
  const [currentInd, setCurrentInd] = useState(1);
  const sliderRef = useRef(null);

  const portfolioQuery = useStaticQuery(graphql`
    query successStoriesQuery {
      allStrapiOurProject {
        nodes {
          projectName
          projectDesc
          projectCategory
          slug
          projectImg {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          projectLogo {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `);

  const portfolioData = portfolioQuery?.allStrapiOurProject?.nodes;

  const handleButtonClickPrev = () => {
    if (currentInd > 1) {
      sliderRef.current.slickPrev();
    }
  };

  const handleButtonClickNext = () => {
    if (currentInd < portfolioData.length) {
      sliderRef.current.slickNext();
    }
  };

  const sliderSettings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentInd(current + 1),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SuccessStoriesNewWrapper className={className}>
      <Container>
        <div className="section-heading d-flex justify-content-between align-items-center">
          <div>
            <h2 className="heading mb-sm-3 mb-2">{heading || 'Our Success Stories'}</h2>
            <p className="mb-0 desc">
              Innovators from across the industry have trusted Qbatch to build high-impact products.
            </p>
          </div>
          <div className='d-md-block d-none'>
            {portfolioData.length === currentInd ? (
              <div className="mt-lg-0 d-md-block d-none">
                <Button onClick={() => navigate('/portfolio')} text="Explore More" />
              </div>
            ) : (
              <div className="bottom-slider">
                <div className="carousel-button-group d-flex align-items-center">
                  <ArrowLeftIcon onClick={handleButtonClickPrev} className="slider-arrow" />
                  <span>
                    <span className="fw-bold">
                      {currentInd < 10 && 0}
                      {currentInd}
                    </span>
                    <span>/</span>
                    <span>
                      {portfolioData.length < 10 && 0}
                      {portfolioData.length}
                    </span>
                  </span>
                  <ArrowRightIcon onClick={handleButtonClickNext} className="slider-arrow" />
                </div>
              </div>
            )}
          </div>
        </div>

        <Slider {...sliderSettings} ref={sliderRef}>
          {portfolioData.map((item, ind) => {
            const logoImage = getImage(item?.projectLogo?.localFile?.childImageSharp?.gatsbyImageData);
            const projectImage = getImage(item?.projectImg?.localFile?.childImageSharp?.gatsbyImageData);
            return (
              <div md={6} className='mb-md-0 mb-sm-5 mb-4' key={ind}>
                <Card>
                  <div className="position-relative card-img">
                    {projectImage && (
                      <GatsbyImage
                        image={projectImage}
                        alt={item?.projectName}
                        title={item?.projectName}
                        className="w-100 project-img"
                        loading='lazy'
                      />
                    )}
                    <div className="arrow-div">
                      <img src="/arrow-black.svg" alt="arrow" title="arrow" />
                    </div>
                  </div>
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between card-logo">
                      {logoImage && (
                        <GatsbyImage
                          image={logoImage}
                          alt="logo"
                          title="logo"
                          loading='lazy'
                        />
                      )}
                      <div className='project-category'>{item?.projectCategory}</div>
                    </div>
                    <p className="card-desc mb-0">{item?.projectDesc}</p>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </Slider>

        <div className="d-md-none d-flex justify-content-end">
          {portfolioData.length === currentInd ? (
            <div className="mt-lg-0">
              <Button onClick={() => navigate('/portfolio')} text="Explore More" />
            </div>
          ) : (
            <div className="bottom-slider">
              <div className="carousel-button-group d-flex align-items-center">
                <ArrowLeftIcon onClick={handleButtonClickPrev} className="slider-arrow" />
                <span>
                  <span className="fw-bold">
                    {currentInd < 10 && 0}
                    {currentInd}
                  </span>
                  <span>/</span>
                  <span>
                    {portfolioData.length < 10 && 0}
                    {portfolioData.length}
                  </span>
                </span>
                <ArrowRightIcon onClick={handleButtonClickNext} className="slider-arrow" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </SuccessStoriesNewWrapper>
  );
};

export default Index;
