import React from 'react'
import Slider from 'react-slick'

import Container from '../../UiComponent/Container'

import { FinTechBeyondTheBasicsWrapper } from './style'

import { FinTechBeyondTheBasicsCardData } from '../../../constants'

const FinTechBeyondTheBasics = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <FinTechBeyondTheBasicsWrapper>
     <Container>
      <h2>FinTech: Beyond the Basics</h2>
      <p>We offer advanced solutions to future-proof your FinTech platform:</p>
      <div className='cards-wrapper'>
        {FinTechBeyondTheBasicsCardData.map((item, index) => (
          <div className='card-item'>
          <img src={item.img} alt={item.img} title={item.img} />
          <h3>{item.heading}</h3>
          <p>{item.text}</p>
        </div>
        ))}
      </div>
      <div className='mobile-cards'>
      <div className='card-for-mobile'>
          <Slider {...settings}>
          {FinTechBeyondTheBasicsCardData.map((item, index) => (
          <div className='card-item'>
          <img src={item.img} alt={item.img} title={item.img} />
          <h3>{item.heading}</h3>
          <p>{item.text}</p>
        </div>
        ))}
          </Slider>
        </div>
      </div>
     </Container>
    </FinTechBeyondTheBasicsWrapper>
  )
}

export default FinTechBeyondTheBasics
