import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Col, Container, Row } from 'react-bootstrap'

import { marketPlaceData } from '../../../constants'

import StagesWrapper from '../DevelopmentStages/style'

const Index = () => {

  const sliderRef2 = useRef(null)
  const scrollRef2 = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
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
  const marketplace = marketPlaceData.find((x) => x.content);
  return (
    <StagesWrapper
      id="scene-trigger2"
      ref={scrollRef2}
      className="stage-slider-main2"
      marketplace={marketplace ? '' : '49px'}
    >
      <div>
        <Container>
          <div className="stages-header">
            <h2>Integrations for Your Marketplace</h2>
          </div>
          <div className="slider-section marketplace-section">
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
                <Slider {...sliderSettings} ref={sliderRef2} className='marketplace-slider'>
                  {marketPlaceData?.map((item, index) => (
                    <div key={index} className="slider-item">
                      <Row className='pt-4'>
                          {item.image.map((img) => (
                            <Col md={6}>
                              <div className="marketplace-logo">
                                {img === "" ? "" :
                                  <img src={img} width='200px' alt="project" />
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
          </div>
        </Container>
      </div>
    </StagesWrapper>
  )
}

export default Index;
