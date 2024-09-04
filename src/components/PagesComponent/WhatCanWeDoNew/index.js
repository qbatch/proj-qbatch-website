import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from '../../UiComponent/Container';
import Button from '../../UiComponent/Button';
import { weDoDataNew } from '../../../constants';

import WhatCanYouDoWrapper from './style';

const Index = () => {
  return (
    <WhatCanYouDoWrapper>
      <Container>
        <h2 className='heading text-center'>What can we do for you?</h2>
        <Row>
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
        <div className='mt-5 d-flex justify-content-end'>
          <Button text='View All Services' />
        </div>
      </Container>
    </WhatCanYouDoWrapper>
  )
}

export default Index;
