import React from 'react';
import MvpDevelopmentServiceWrapper from './style';
import Container from '../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';

const Index = ({ heading, serviceData }) => {
  return (
    <MvpDevelopmentServiceWrapper>
      <Container>
        <h2 className='heading text-h2 text-center'>{heading}</h2>
        <Row className='g-4'>
          {serviceData.map((service, index) => (
            <Col lg={4} key={index}>
              <div className='service-box'>
                <div className='service-box-header'>
                  <img src={service.image} alt='box-icon' />
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
