import React from 'react';
import EmbraceEnterpriseWrapper from './style';
import Container from '../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';

import Button from "../../UiComponent/Button";

const EmbraceEnterprise = () => {
  return (
    <EmbraceEnterpriseWrapper>
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className='heading'>Embrace Enterprise-Driven DevOps Supremacy</h2>
          </Col>
          <Col lg={6}>
            <div className='content-wrapper'>
              <h4 className='sub-heading'>Your recipe to technical viability, strong business footprint, and reputation.</h4>
              <p className='paragraph'>DevOps transformations require full-time iterations for frequent version releases responding to user demands and market situations. Enterprises are rapidly adopting the powerful DevOps culture for cloud-native systems and high-end tools to ensure fault-tolerant software delivery pipelines and release cycles.</p>
            </div>
          </Col>
        </Row>
        <div className='d-flex justify-content-center'>
          <Button text="Get Free Consultation" onClick={() => navigate('/contact')} />

        </div>
      </Container>
    </EmbraceEnterpriseWrapper>
  );
};

export default EmbraceEnterprise;