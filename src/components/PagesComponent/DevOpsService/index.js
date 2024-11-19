import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from '../../UiComponent/Container';

import DeveOpsServiceWrapper from './style';

const Index = ({heading, subHeading, paragraph, data, className}) => {
  return (
    <DeveOpsServiceWrapper className={className}>
      <Container>
        <Row>
          <Col xl={8}>
            <div className='section-main'>
              <h2 className='text-h2 section-main-heading'>{heading}</h2>
              {subHeading && <p className='section-main-subtitle'>{subHeading}</p>}
              <p className='section-main-paragraph text-h5'>{paragraph}</p>
            </div>
          </Col>
          {data.map((service, index) => (
            <Col xl={4} md={6} key={index}>
              <div className='dev-service-box'>
                <div className='box-header'>
                  <img src={service.img} alt='icon' />
                  <h3 className='text-h4 box-heading'>{service.title}</h3>
                </div>
                <div className="box-body">
                  <p className='paragraph'>{service.description}</p>

                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </DeveOpsServiceWrapper>

  );
};

export default Index;
