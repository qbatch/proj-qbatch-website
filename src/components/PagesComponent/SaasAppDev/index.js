import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Container from '../../UiComponent/Container';

import SaasAppDevWrapper from './style';

const SaasAppDev = ({ heading }) => {
  return (
    <SaasAppDevWrapper>
      <Container>
        <h2 className='heading text-h2'>{heading}</h2>
        <Row className='align-items-center'>
          <Col lg={6}>
            <ul>
              <li>Uncertainty in choosing the tech stack</li>
              <li>No backup availability, leading to outages</li>
              <li>Weak data security and confidentiality</li>
              <li>Difficulty in gaining and maintaining user trust</li>
              <li>Lack of a proper monetization strategy</li>
              <li>Poor infrastructure and integration issues</li>
              <li>Complex payment system with limited transaction options</li>
              <li>Ineffective management of the subscription lifecycle</li>
              <li>Absence of self-service portals</li>
              <li>Poor customer support and availability</li>
            </ul>
          </Col>
          <Col lg={6}>
            <div className='d-flex justify-content-center'>
              <img src='/are-you-familiar.svg' alt='are-you-familiar' />
            </div>
          </Col>
        </Row>
      </Container>
    </SaasAppDevWrapper>
  );
};

export default SaasAppDev;
