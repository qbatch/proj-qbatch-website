import React, { useRef, useState } from 'react';
import { navigate } from 'gatsby';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import Slider from 'react-slick';

import Container from '../../UiComponent/Container';
import Button from '../../UiComponent/Button';

import ArrowLeftIcon from "../../../assets/images/icons/arrow-left-small.svg";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-small.svg";

import SuccessStoriesNewWrapper from './style';

const Index = ({ data, disc, heading }) => {

  const [currentInd, setCurrentInd] = useState(1);
  const sliderRef = useRef(null);
  const handleButtonClickPrev = () => {
    if (currentInd > 1) {
      sliderRef.current.slickPrev();
    }
  };

  const handleButtonClickNext = () => {
    if (currentInd < data.length) {
      sliderRef.current.slickNext();
    }
  };

  const sliderSettings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 2, // Adjust based on how many cards you want to display at once
    slidesToScroll: 1,
    afterChange: (current) => setCurrentInd(current + 1),
    responsive: [
      {
        breakpoint: 768, // Tablet view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SuccessStoriesNewWrapper>
      <Container>
        <div className="section-heading d-flex justify-content-between align-items-center">
          <div>
            <h2 className="heading">{heading || 'Success Stories'}</h2>
            {disc && (
              <p className="mb-0">
                Innovators from across the industry have trusted Qbatch to build high-impact products.
              </p>
            )}
          </div>
          <div className='d-md-block d-none'>
          {data.length === currentInd ? (
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
                    {data.length < 10 && 0}
                    {data.length}
                  </span>
                </span>
                <ArrowRightIcon onClick={handleButtonClickNext} className="slider-arrow" />
              </div>
            </div>
          )}
          </div>
        </div>
        
        <Slider {...sliderSettings} ref={sliderRef}>
          {data.map((item, ind) => (
            <div md={6} className='mb-md-0 mb-5 ps-4' key={ind}>
              <Card>
                <div className="position-relative card-img">
                  <Card.Img
                    variant="top"
                    src={item.img}
                    loading="lazy"
                    alt={item.category}
                    title={item.category}
                  />
                  <div className="arrow-div">
                    <img src="/arrow-black.svg" alt="arrow" title="arrow" />
                  </div>
                </div>
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between card-logo mb-3">
                    <img src={item.logo} alt="logo" title="logo" loading="lazy" />
                    <div>{item.category}</div>
                  </div>
                  <p className="card-desc mb-0">{item.title}</p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>

        <div className="d-md-none d-flex justify-content-end">
        {data.length === currentInd ? (
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
                    {data.length < 10 && 0}
                    {data.length}
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
