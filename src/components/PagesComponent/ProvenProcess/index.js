import React, { useCallback, useRef, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Container from '../../UiComponent/Container';
import { provenProcessData } from '../../../constants';
import ArrowLeftIcon from "../../../assets/images/icons/arrow-left-small.svg";
import ArrowRightIcon from "../../../assets/images/icons/arrow-right-small.svg";

import ProvenProcessWrapper from './style';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1399 },
    items: 1,
    partialVisibilityGutter: 550,
  },
  LargeDesktop: {
    breakpoint: { max: 1399, min: 1200 },
    items: 1,
    partialVisibilityGutter: 350,
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 1,
    partialVisibilityGutter: 250,
  },
  tablet: {
    breakpoint: { max: 992, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
};

const Index = () => {
  const [currentInd, setCurrentInd] = useState(1);

  const carousel1Ref = useRef(null);

  const handleButtonClickPre = () => {
    carousel1Ref.current.previous();
  };

  const handleButtonClickNext = () => {
    carousel1Ref.current.next();
  };

  const handlePrevClick = useCallback(() => {
    handleButtonClickPre();
    setCurrentInd((prev) => (prev === 1 ? 1 : prev - 1));
  }, [handleButtonClickPre]);

  const handleNextClick = useCallback(() => {
    const maxIndex = provenProcessData.length;
    if (currentInd !== maxIndex) {
      handleButtonClickNext();
    }
    setCurrentInd((prev) => (prev === maxIndex ? prev : prev + 1));
  }, [handleButtonClickNext, currentInd, provenProcessData.length]);

  return (
    <ProvenProcessWrapper>
      <Container>
        <div className='d-flex align-items-start justify-content-between gap-3'>
          <div className='process-heading'>
            <h2>Tried and Proven Process.</h2>
            <p>We believe in a transparent, efficient, and collaborative approach to software development. Our process is designed to deliver high-quality solutions that meet our clients' unique needs. Here's a step-by-step look at how we work:</p>
          </div>
          <div className="carousel-button-group d-flex align-items-center">
            <ArrowLeftIcon
              onClick={handlePrevClick}
            />
            <span>
              <span className="fw-bold">
                {currentInd < 10 && 0}
                {currentInd}
              </span>
              <span>/</span>
              <span>
                {provenProcessData.length < 10 && 0}
                {provenProcessData.length}
              </span>
            </span>
            <ArrowRightIcon
              onClick={handleNextClick}
            />
          </div>
        </div>
      </Container>
      <div className='slider-container'>
        <Carousel
          responsive={responsive}
          arrows={false}
          ref={carousel1Ref}
          swipeable={false}
          draggable={true}
          partialVisbile={true}
        >
          {provenProcessData.map((data, ind) => (
            <div className='process-box' key={ind}>
              <div className='process-img'>
                <img src={data.img} alt='discovery' title='discovery' loading='lazy' />
              </div>
              <div className='process-data'>
                <h3 className='text-h4'>{data.title}</h3>
                <div>
                  <p>{data.subTitle1}</p>
                  <span>{data.desc1}</span>
                </div>
                <div>
                  <p>{data.subTitle2}</p>
                  <span>{data.desc2}</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </ProvenProcessWrapper>
  )
}

export default Index;
