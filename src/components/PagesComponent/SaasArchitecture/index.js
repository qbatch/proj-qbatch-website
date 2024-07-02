import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Button from "../../UiComponent/Button"
import Container from '../../UiComponent/Container';

import SaasArchitectureWrapper from './style';

const SaasArchitecture = () => {
  const backendArchitectures = [
    'Multi-tenancy architecture',
    'Serverless architecture',
    'Microservices architecture',
    'Command and Query Responsibility Segregation (CQRS)',
    'Event-driven architecture',
    'Domain-driven design (DDD)',
    'Clean architecture',
    'Decoupled architecture / Headless architecture, and more'
  ];

  const frontendArchitectures = [
    'Model-view-controller (MVC)',
    'Single-page application (SPA)',
    'Model-view-viewModel (MVVM)',
    'Progressive web app (PWA)',
    'Reactive',
    'Micro-frontend architecture'
  ];

  return (
    <SaasArchitectureWrapper>
      <Container>
        <Row className='g-5'>
          <Col lg={5}>
            <h2 className='heading text-h2'>Architecture Patterns We Execute</h2>
            <p className='paragraph'>Adept in all prevalent front- and back-end architecture patterns, Qbatch’s software engineers help you evaluate and design functional and non-functional requirements for your SaaS system based on microservices or single-page applications (SPA).</p>
            <div className='d-flex justify-content-md-start justify-content-center'>
              <Button text="Need Technical Guidance?" btnType="submit" />
            </div>
          </Col>
          <Col lg={7}>
            <div className='d-flex flex-lg-row flex-column gap-4'>
              <div className='inner-box'>
                <h3 className='text-h4'>Backend</h3>
                <ul>
                  {backendArchitectures.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className='inner-box'>
                <h3 className='text-h4'>Front-end</h3>
                <ul>
                  {frontendArchitectures.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SaasArchitectureWrapper>
  );
};

export default SaasArchitecture;
