import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';

import Container from '../../UiComponent/Container';
import Button from '../../UiComponent/Button';
import { weDoDataNew } from '../../../constants';

import WhatCanYouDoWrapper from './style';

const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  }
  return (
    <WhatCanYouDoWrapper>
      <Container>
        <h2 className='heading text-center'>What can we do for you?</h2>
        <Row className='d-sm-flex d-none'>
          {weDoDataNew.map((item, ind) => (
            <Col xl={3} sm={6} key={ind} className='box-col'>
              <div className='box-wrapper'>
                <div className='back-img'>
                  <img src={item.icon} alt={item.title} title={item.title} loading='lazy' />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row className='d-sm-none d-flex'>
          <Slider {...settings}>
            {weDoDataNew.map((item, ind) => (
              <Col xl={3} sm={6} key={ind} className='box-col'>
                <div className='box-wrapper'>
                  <div className='back-img'>
                    <img src={item.icon} alt={item.title} title={item.title} loading='lazy' />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Slider>
        </Row>
        <div className='mt-5 d-flex justify-content-sm-end justify-content-center'>
          <Button text='View All Services' />
        </div>
      </Container>
    </WhatCanYouDoWrapper>
  )
}

export default Index;
