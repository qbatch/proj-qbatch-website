import React from 'react';
import Container from '../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';

import { onDemandFeaturesData } from '../../../constants';

import OnDemandWrapper from './style';

const Index = () => {
  return (
    <OnDemandWrapper>
      <Container>
        <h2>On-demand features for your real estate app for human-centric experience and higher productivity</h2>
        <Row>
          {onDemandFeaturesData.map((item, ind) => (
            <Col xl={3} lg={4} xs={6} key={ind} className='d-flex flex-column'>
              <div className='features-col'>
                <img src={item.img} alt='listings' title='listings' loading='lazy' />
                <p>{item.data}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </OnDemandWrapper>
  )
}

export default Index;
