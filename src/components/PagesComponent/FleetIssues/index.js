import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { navigate } from 'gatsby';

import Container from '../../UiComponent/Container';
import Button from '../../UiComponent/Button';

import FleetIssuesWrapper from './style';

const FleetIssues = () => {
  return (
    <FleetIssuesWrapper>
      <Container>
        <Row className='build-retail-wrapper'>
          <Col md={6}>
            <h2>Don't Let Fleet Issues Slow You Down. Get Your Logistics Solution!</h2>
          </Col>
          <Col md={6}>
            <div className='right-section-wrapper'>
              <div className='right-section-item'><img src='/rgba-arrow.svg' alt="rgba-arrow" title='rgba-arrow' /><h3>Poor communication between your customer and courier?</h3></div>
              <div className='right-section-item'><img src='/rgba-arrow.svg' alt="rgba-arrow" title='rgba-arrow' /><h3>Damaged goods during transit?</h3></div>
              <div className='right-section-item'><img src='/rgba-arrow.svg' alt="rgba-arrow" title='rgba-arrow' /><h3>Poor coordination for multiple deliveries?</h3></div>
            </div>
            <div className='mt-4'>
              <Button text="Tranform Your Logistics" className="secondary-btn" onClick={() => navigate('/contact')} />
            </div>
          </Col>
        </Row>
      </Container>
    </FleetIssuesWrapper>
  )
}

export default FleetIssues;
