import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from '../../UiComponent/Button';
import Container from '../../UiComponent/Container';
import { navigate } from 'gatsby';

import EcommerceFutureWrapper from './style';

const EcommerceFuture = () => {
  return (
    <EcommerceFutureWrapper>
      <Container>
        <Row>
          <Col lg={6}>
            <div className='img-desc'>
              <img src='/ecommerce-future.svg' alt='real estate' title='real estate' loading='lazy' />
            </div>
          </Col>
          <Col lg={6}>
            <div className='estate-business'>
              <h2>Future of E-Commerce is Here</h2>
              <p>Achieve ultimate freedom, performance, and scalability with your ready-made, self-driven developers — focused on your product success </p>
              <Button text='Let’s begin with expert consultation' onClick={()=> navigate('/contact')} />
            </div>
          </Col>
        </Row>
      </Container>
    </EcommerceFutureWrapper>
  )
}

export default EcommerceFuture;
