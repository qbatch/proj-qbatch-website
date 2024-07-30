import React, { lazy } from 'react';
import { Col, Row } from 'react-bootstrap';

import MvpDevelopmentServiceWrapper from './style';

const Container = lazy(() => import('../../UiComponent/Container'));

const Index = ({ heading, serviceData, className, paragraph }) => {
  return (
    <MvpDevelopmentServiceWrapper className={className}>
      <Container>
        <div className='header'>
          <h2 className='heading text-h2 text-lg-center text-start'>{heading}</h2>
          <p className='paragraph'>{paragraph}</p>
        </div>
        <Row className='g-4'>
          {serviceData.map((service, index) => (
            <Col lg={4} key={index}>
              <div className='service-box'>
                <div className='service-box-header'>
                  <img src={service.image} alt='box-icon' title='box-icon' loading='lazy' />
                  <h3 className='text-h4'>{service.title}</h3>
                </div>
                <p className='inner-paragraph'>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </MvpDevelopmentServiceWrapper>
  );
};

export default Index;
