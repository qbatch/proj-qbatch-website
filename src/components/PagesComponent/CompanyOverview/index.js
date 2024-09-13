import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from '../../UiComponent/Container';

import CompanyOverviewWrapper from './style';

const companyOverview = ({companySize, team, industry, duration, useCase}) => {
  return (
    <CompanyOverviewWrapper>
      <Container>
      <Row >
        <Col lg={5}>
          <h2 className='heading text-h1'>Company<br/> <span>Overview</span></h2>
        </Col>
        <Col lg={7}>
          <Row className='gy-lg-5 gy-2'>
            <Col md={6}>
              <span className='text-h5 sub-heading'>Company Size</span>
              <h3 className='text-h4'>{companySize}</h3>
            </Col>
            <Col md={6}>
              <span className='text-h5 sub-heading'>Team</span>
              <h3 className='text-h4'>{team}</h3>
            </Col>
            <Col md={6}>
              <span className='text-h5 sub-heading'>Industry</span>
              <h3 className='text-h4'>{industry}</h3>
            </Col>
            <Col md={6}>
              <span className='text-h5 sub-heading'>Duration</span>
              <h3 className='text-h4'>{duration}</h3>
            </Col>
            <Col md={12}>
              <span className='text-h5 sub-heading'>Use Case</span>
              <h3 className='text-h4'>{useCase}</h3>
            </Col>
          </Row>
        </Col>
      </Row>
      </Container>
    </CompanyOverviewWrapper>
  );
};

export default companyOverview;
