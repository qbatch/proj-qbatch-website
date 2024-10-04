import React from 'react'
import Slider from 'react-slick'

import Container from '../../UiComponent/Container'

import { dataGenericTravelApps } from '../../../constants'

import { GenericTravelAppsWrapper } from './style'

const GenericTravelApps = () => {

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <GenericTravelAppsWrapper>
      <Container>
        <h2>Generic travel apps are out of fashion! Ours are built for your tech-savvy travel buddies.</h2>
        <div className='card-items desktop'>
          {dataGenericTravelApps.map((item, index) => (
            <div key={index} className='cards'>
              <img src={item.img} alt={item.img} />
              <div className='content'>
                <h3>{item.heading}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='card-items mobile-responsive'>
          <Slider {...sliderSettings}>
            {dataGenericTravelApps.map((item, index) => (
              <div key={index} className='cards'>
                <img src={item.img} alt={item.img} />
                <div className='content'>
                  <p className='h3-text'>{item.heading}</p>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </GenericTravelAppsWrapper>
  )
}

export default GenericTravelApps;
