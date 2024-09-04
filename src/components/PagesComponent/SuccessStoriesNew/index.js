import React from 'react';
import { navigate } from 'gatsby';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';

import Container from '../../UiComponent/Container';
import Button from '../../UiComponent/Button';

import SuccessStoriesNewWrapper from './style';

const Index = () => {
  return (
    <SuccessStoriesNewWrapper>
      <Container>
        <div className="section-heading d-flex flex-wrap justify-content-between align-items-start">
          <div>
            <h2 className='heading mb-3'>Success Stories</h2>
            <p className='mb-0'>Innovators from across the industry have trusted Qbatch to build high-impact products.</p>
          </div>
          <div className="mt-md-0 mt-3">
            <Button onClick={() => navigate('/portfolio')} text="Explore More" />
          </div>
        </div>
        <Row>
          <Col md={6} className='mb-md-0 mb-5'>
            <Card>
              <div className='position-relative card-img'>
                <Card.Img variant="top" src="/block-dash.svg" loading='lazy' alt='block-dash' title='block-dash' />
                <div className='arrow-div'>
                  <img src='/arrow-black.svg' alt='arrow' title='arrow' />
                </div>
              </div>
              <Card.Body>
                <div className='d-flex align-items-center justify-content-between card-logo mb-3'>
                  <img src='/block-dash-logo.svg' />
                  <div>Blockchain</div>
                </div>
                <p className='card-desc mb-0'>The Future of Ownership: NFTs Are More Than Just a Fad</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <div className='position-relative card-img'>
                <Card.Img variant="top" src="/alfaris-group.svg" loading='lazy' alt='block-dash' title='block-dash' />
                <div className='arrow-div'>
                  <img src='/arrow-black.svg' alt='arrow' title='arrow' />
                </div>
              </div>
              <Card.Body>
                <div className='d-flex align-items-center justify-content-between card-logo mb-3'>
                  <img src='/alfaris-group-logo.svg' />
                  <div>Human Resources</div>
                </div>
                <p className='card-desc mb-0'>Empowering HR Excellence: Qbatch Enhances Al-Faris International School’s Operations with AIG HR</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </SuccessStoriesNewWrapper>
  )
}

export default Index;
