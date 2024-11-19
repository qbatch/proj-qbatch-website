import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from '../../UiComponent/Button';
import Container from '../../UiComponent/Container';
import { navigate } from 'gatsby';

import EcommerceDevelopmentWrapper from './style';

const EcommerceDevelopment = () => {
  return (
    <EcommerceDevelopmentWrapper>
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <div className='estate-business'>
              <h2>Are e-commerce development services too expensive?</h2>
              <p className='text-h5'>At Qbatch, we prioritize ROI and are committed to transforming your brand into a thriving e-business. From initial wireframes to the final website, we focus on delivering captivating user experiences. We aim to create websites that meet design trends and adapt to future changes.</p>
              <p className='text-h5 mb-5'><b>Contrary to common belief, investing in e-commerce website development doesn't have to break the bank. With the right company, the returns can exceed the initial investment.</b></p>
              <Button text='Request Free Consultation' onClick={()=> navigate('/contact')} />
            </div>
          </Col>
          <Col lg={6}>
            <div className='img-desc'>
              <img src='/ecommerce-dev.svg' alt='real estate' title='real estate' loading='lazy' />
            </div>
          </Col>
        </Row>
      </Container>
    </EcommerceDevelopmentWrapper>
  )
}

export default EcommerceDevelopment;
