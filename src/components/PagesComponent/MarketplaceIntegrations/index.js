import React, { useRef, useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Col, Container, Row } from 'react-bootstrap'
import VisibilitySensor from "react-visibility-sensor";

import Button from '../../UiComponent/Button'
import { marketPlaceData } from '../../../constants'

import StagesWrapper from '../DevelopmentStages/style'

const Index = () => {

  const sliderRef2 = useRef(null)
  const scrollRef2 = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevVisibility, setPrevVisibility] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    // If the section becomes visible or when scrolling from top or bottom
    if (isVisible || (isVisible && !prevVisibility)) {
      scrollToSectionStart(isVisible);
    }
    setPrevVisibility(isVisible); // Store the previous visibility state
  };
  const handleMouseEnter = () => {
    document.body.style.overflow = "hidden";
    scrollToSectionStart();
  };
  const handleMouseLeave = () => {
    document.body.style.overflow = "auto";
  };

  const scrollToSectionStart = () => {
    if (scrollRef2.current) {
      const sectionTop = scrollRef2.current.offsetTop
      const sectionTopCalc = sectionTop - 80
      window.scrollTo({
        top: sectionTopCalc,
        behavior: 'smooth',
      })
    }
  }
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
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
      setActiveIndex(next)
    },
  }

  const handlePaginationItemClick = (index) => {
    sliderRef2.current.slickGoTo(index)
  }

  useEffect(() => {
    const handleMouseWheel = (e) => {
      const isAtFirstSlide = activeIndex === 0
      const isAtLastSlide = activeIndex === marketPlaceData.length - 1

      if (e.deltaY > 0) {
        if (!isAtLastSlide) {
          e.preventDefault()
          sliderRef2.current.slickNext()
          scrollToSectionStart()
          document.body.style.overflow = "hidden";
        } else {
          setTimeout(() => {
            document.body.style.overflow = "auto";
          }, 1000);
        }
      } else if (e.deltaY < 0) {
        if (isAtFirstSlide) {
          setTimeout(() => {
            document.body.style.overflow = "auto";
          }, 1000);
        } else {
          e.preventDefault()
          sliderRef2.current.slickPrev()
          scrollToSectionStart()
          document.body.style.overflow = "hidden";
        }
      }
    }

    // Add event listener for mousewheel
    const sliderElement = document.querySelector('.stage-slider-main2')
    sliderElement.addEventListener('wheel', handleMouseWheel)

    return () => {
      // Remove event listener when the component unmounts
      sliderElement.removeEventListener('wheel', handleMouseWheel)
    }
  }, [activeIndex])
  const marketplace = marketPlaceData.find((x) => x.content);
  return (
    <VisibilitySensor onChange={handleVisibilityChange}
    partialVisibility={true}
    offset={{bottom:300, top:300}}
    >
    <StagesWrapper
      id="scene-trigger2"
      ref={scrollRef2}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="stage-slider-main2"
      marketplace={marketplace ? '' : '49px'}
    >
      <div>
        <Container>
          <div className="stages-header">
            <h2>Our 5-Step E-commerce Automation Process</h2>
            <p>To help you stand your ground in the ever-growing e-commerce district!</p>
          </div>
          <div className="slider-section">
            <Row>
              <Col lg={5} className="fixed-slider-column">
                <div className="pagination fixed-slider-pagination">
                  <ul className="mt-4">
                    {marketPlaceData?.map((item, index) => (
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
              <Col lg={7} md={12} className="ecom-section">
                <Slider {...sliderSettings} ref={sliderRef2}>
                  {marketPlaceData?.map((item, index) => (
                    <div key={index} className="slider-item">
                      <Row>
                        {!item.content ? (
                          item.image.map((img) => (
                            <Col md={6}>
                              <div className="mb-5">
                                <img src={img} alt="project" />
                              </div>
                            </Col>
                          ))
                        ) : (
                          <>
                            <Col lg={6} md={5}>
                              <div className="title title-responsive">
                                <h3>{item.title}</h3>
                              </div>
                              <img src={item.image} alt="project" />
                            </Col>
                            <Col lg={6} md={7} className="slider-column-text">
                              <div className="title title-desktop">
                                <h3>{item.title}</h3>
                              </div>
                              <div className="content">
                                {item.content}
                                <ul>
                                  {item.list?.map((listItem, listIndex) => (
                                    <li key={listIndex}>{listItem}</li>
                                  ))}
                                </ul>
                              </div>
                            </Col>
                          </>
                        )}
                      </Row>
                    </div>
                  ))}
                </Slider>
                {marketplace ? (
                  <div className="slider-btn">
                    <Button text="Book Free Demo" />
                  </div>
                ) : (
                  ''
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </StagesWrapper>
    </VisibilitySensor>
  )
}

export default Index;
