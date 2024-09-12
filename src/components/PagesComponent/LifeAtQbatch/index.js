import React from 'react'
import Slider from 'react-slick'
import Container from '../../UiComponent/Container'
import { LifeAtQbatchWrapper } from './style'

const LifeAtQbatch = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { id: 1, imageUrl: "/slider-banner.svg" },
    { id: 2, imageUrl: "/slider-banner.svg" },
    { id: 3, imageUrl: "/slider-banner.svg" },
  ];
  const mobileScreen = [
    { id: 1, imageUrl: "/mobile-first.svg" },
    { id: 2, imageUrl: "/mobile-second.svg" },
    { id: 3, imageUrl: "/mobile-first.svg" },
    { id: 4, imageUrl: "/mobile-second.svg" },
  ];

  return (
    <LifeAtQbatchWrapper>
      <Container>
      <h2>Life at Qbatch</h2>
      <p>Take a peek at the amazing memories we make and cherish every day at Qbatch!</p>
      <div className='slider-wrapper web-base'>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} style={{ width: "100%", height: "auto" }} />
          </div>
        ))}
      </Slider>
      </div>
      <div className='slider-wrapper mobile-base'>
      <Slider {...settings}>
        {mobileScreen.map((slide) => (
          <div key={slide.id}>
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} style={{ width: "100%", height: "auto" }} />
          </div>
        ))}
      </Slider>
      </div>
      </Container>
    </LifeAtQbatchWrapper>
  )
}

export default LifeAtQbatch
