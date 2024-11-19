import React from 'react';
import Container from '../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';
import OnDemandWrapper from './style';

const OnDemandFeatures = ({ heading, featuresData }) => {
  return (
    <OnDemandWrapper>
      <Container>
        <h2>{heading}</h2>
        <Row>
          {featuresData.map((item, ind) => (
            <Col xl={3} lg={4} xs={6} key={ind} className='d-flex flex-column'>
              <div className='features-col'>
                <img src={item.img} alt='listing' title='listing' loading='lazy' />
                <p>{item.data}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </OnDemandWrapper>
  );
};

export default OnDemandFeatures;
