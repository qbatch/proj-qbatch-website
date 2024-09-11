import React, { lazy } from 'react';
import { Col, Row } from 'react-bootstrap';

import MvpTypesWrapper from './style';

const Container  = lazy(() => import('../../UiComponent/Container'));

const MvpTypes = () => {
  return (
    <MvpTypesWrapper>
      <Container>
        <h2 className='text-h2 heading'>Types of MVPs We Can Build for You</h2>
        <Row className='first-box'>
          <Col lg={6}>
            <h3 className='text-h3 inner-heading'>Low-fidelity</h3>
            <p className='inner-paragraph'>Low-fidelity MVPs are the smart choice for startups aiming to test ideas without making hefty investments. The stripped-down versions of these MVPs include:</p>
          </Col>
          <Col lg={6}>
            <div className='type-list'>
              <h4 className='list-heading'>Landing Page MVP</h4>
              <p className='list-paragraph'>A single web page describing the product or service without really building a tangible product to gauge interest and validate demand through user sign-ups.</p>
            </div>
            <div className='type-list'>
              <h4 className='list-heading'>Flintstone MVP or Manual-first MVP</h4>
              <p className='list-paragraph'>A fully functional product to the outside world while, in reality, all back-office tasks get manually handled by humans to test the market and understand user choices and pain points.</p>
            </div>
            <div className='type-list'>
              <h4 className='list-heading'>Concierge MVP</h4>
              <p className='list-paragraph'>A personalized experience to test the product in a controlled environment. Team members or founders directly connect with the users, learn their responses, and make real-time adjustments.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <h3 className='text-h3 inner-heading'>High-fidelity MVPs</h3>
            <p className='inner-paragraph'>These MVPs represent a more advanced stage in software development, offering a refined user experience with limited features. Subtypes include:</p>
          </Col>
          <Col lg={6}>
            <div className='type-list'>
              <h4 className='list-heading'>Single-feature MVP</h4>
              <p className='list-paragraph'>Focuses on one core, high-standard functionality, showcasing a compelling value proposition and unique selling point to attract users before scaling up.</p>
            </div>
            <div className='type-list'>
              <h4 className='list-heading'>Piecemeal MVP</h4>
              <p className='list-paragraph'>A series of interconnected "mini-MVPs," each representing a different product feature. When combined, they form a functional product that enables assessing and building new valuable features.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </MvpTypesWrapper>
  );
};

export default MvpTypes;
