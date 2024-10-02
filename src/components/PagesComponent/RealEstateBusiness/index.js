import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from '../../UiComponent/Button';
import Container from '../../UiComponent/Container';

import RealEstateBusinessWrapper from './style';

const Index = () => {
  return (
    <RealEstateBusinessWrapper>
      <Container>
        <Row>
          <Col lg={6}>
            <div className='img-desc'>
              <img src='/real-estate-reasons.svg' alt='real estate' title='real estate' loading='lazy' />
              <h3 className='text-h4'>61% have already integrated technology into their processes. Surprised?</h3>
            </div>
          </Col>
          <Col lg={6}>
            <div className='estate-business'>
              <h2>Reasons why you’re not transforming your real estate business.</h2>
              <ul>
                <li>High Cost;</li>
                <li>Lack of required tech talents;</li>
                <li>If-it-isn’t-broken-don’t-fix-it culture towards legacy systems.</li>
              </ul>
              <Button text='Let’s begin with expert consultation' />
            </div>
          </Col>
        </Row>
      </Container>
    </RealEstateBusinessWrapper>
  )
}

export default Index;
