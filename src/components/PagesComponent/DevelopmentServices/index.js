import React from 'react';
import { navigate } from 'gatsby';
import { Col, Row } from 'react-bootstrap';

import Container from '../../UiComponent/Container';
import PrimaryButton from '../../UiComponent/PrimaryButton';

import DevelopmentServicesWrapper from './style';

const Index = ({ servicesData, industryHeading }) => {
  return (
    <DevelopmentServicesWrapper>
      <Container>
        <Row>
          <Col lg={4}>
            {industryHeading ? <h2 className='text-h2 section-main-heading'>Industries We<br /> <span>Serve</span></h2> : <h2 className='text-h2 section-main-heading'>Explore Full Cycle Software Development Services:<br /> <i>From Zero to One.</i></h2>
            }
          </Col>
          {servicesData.map((service, index) => (
            <Col lg={4} key={index}>
              <div className='dev-service-box'>
                <div className='box-header'>
                  <img src={service.img} alt='icon' loading='lazy' width='60px' height='60px' />
                  <h3 className='text-h4 box-heading'>{service.title}</h3>
                </div>
                <div className="box-body">
                  <p className='paragraph'>{service.description}</p>
                  <PrimaryButton onClick={() => navigate(service.buttonLink)} borderbottom text={service.buttonText} />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </DevelopmentServicesWrapper>

  );
};

export default Index;
