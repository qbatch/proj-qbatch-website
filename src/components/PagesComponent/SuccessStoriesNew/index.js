import React from 'react';
import { navigate } from 'gatsby';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';

import Container from '../../UiComponent/Container';
import Button from '../../UiComponent/Button';

import SuccessStoriesNewWrapper from './style';

const Index = ({ data }) => {
  return (
    <SuccessStoriesNewWrapper>
      <Container>
        <div className="section-heading d-flex flex-wrap justify-content-between align-items-start">
          <div>
            <h2 className='heading mb-3'>Success Stories</h2>
            <p className='mb-0'>Innovators from across the industry have trusted Qbatch to build high-impact products.</p>
          </div>
          <div className="mt-lg-0 mt-3">
            <Button onClick={() => navigate('/portfolio')} text="Explore More" />
          </div>
        </div>
        <Row>
          {data.map((item, ind) => (
            <Col md={6} className='mb-md-0 mb-5' key={ind}>
              <Card>
                <div className='position-relative card-img'>
                  <Card.Img variant="top" src={item.img} loading='lazy' alt={item.category} title={item.category} />
                  <div className='arrow-div'>
                    <img src='/arrow-black.svg' alt='arrow' title='arrow' />
                  </div>
                </div>
                <Card.Body>
                  <div className='d-flex align-items-center justify-content-between card-logo mb-3'>
                    <img src={item.logo} alt='logo' title='logo' loading='lazy' />
                    <div>{item.category}</div>
                  </div>
                  <p className='card-desc mb-0'>{item.title}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </SuccessStoriesNewWrapper>
  )
}

export default Index;
