import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from '../../UiComponent/Container';
import Button from "../../UiComponent/Button";

import TackleSaasWrapper from './style';

const tackleSaas = () => {
  return (
    <TackleSaasWrapper>
      <Container>
        <Row className='g-5 align-items-center'>
          <Col lg={6}>
            <div className='d-flex justify-content-center'>
              <img src='/tackle-saas-challenges.svg' alt='tackle-saas-challenges' />
            </div>
          </Col>
          <Col lg={6}>
            <h2 className='heading text-h2'>
              Tackle SaaS challenges head-on with Qbatch’s expertise-driven
              SaaS development — from discovery to support.
            </h2>
            <p className='paragraph'>You can grow your SaaS business without losing customers left and right with Qbatch’s multi-tenant, platform-agnostic SaaS experiences. We offer “No-frills<b> ”custom SaaS product development solutions</b> to build market-fit apps, ensuring long-term relevance. Our <b>dedicated SaaS developers</b> follow industry-proven testing and vulnerability assessment practices to build high-performing and resilient mobile apps, web apps, cloud hosting, APIs, and data storage. </p>
            <Button text="Hire Seasoned SaaS Experts" onClick={() => navigate('/contact')} />
          </Col>
        </Row>
      </Container>
    </TackleSaasWrapper>
  );
};

export default tackleSaas;
