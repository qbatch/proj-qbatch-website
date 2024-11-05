import React, { lazy } from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import { navigate } from 'gatsby';

import { weDoDataNew } from '../../../constants';
import WhatCanYouDoWrapper from './style';

const Container = lazy(() => import('../../UiComponent/Container'));
const Button = lazy(() => import('../../UiComponent/Button'));

const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
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
                  <img src={item.icon} alt={item.title} title={item.title} rel='preload' loading='lazy' aria-hidden="true" />
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
                    <img
                      src={item.icon}
                      alt={item.title}
                      title={item.title}
                      rel="preload"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="high"
                      width={160}
                      height={160}
                      aria-hidden="true"
                    />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Slider>
        </Row>
        <div className='mt-5 d-flex justify-content-sm-end justify-content-center'>
          <Button text='View All Services' onClick={() => navigate('/services')} />
        </div>
      </Container>
    </WhatCanYouDoWrapper>
  )
}

export default Index;
