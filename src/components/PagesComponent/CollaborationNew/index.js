import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from '../../UiComponent/Container';
import { collaborationData } from '../../../constants';

import CollaborationNewWrapper from './style';

const Index = ({borderBottom}) => {
  const heading = 'Collaboration Models \n For Everlasting Partnerships';

  return (
    <CollaborationNewWrapper style={{borderBottom: borderBottom && '1px solid #D2D9DC'}}>
      <Container>
        <div className="section-heading text-center">
          <h2 className='heading'>{heading}</h2>
          <p>Our unique "Happy Paths" approach is a predictive and transparent way to implement your idea. Choose what suits you best</p>
        </div>
        <Row className='equal-height-row'>
          {collaborationData.map((data, ind) => (
            <Col lg={4} key={ind} className='collaboration-col'>
              <div className='d-flex flex-column align-items-center'>
                <img src={data.img} alt='time' title='time' loading='lazy' height="76" width="76"/>
                <div className='collaboration-box'>
                  <h3 className='text-h4'>{data.title}</h3>
                  <p className='mb-0'>{data.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </CollaborationNewWrapper>
  )
}

export default Index;
