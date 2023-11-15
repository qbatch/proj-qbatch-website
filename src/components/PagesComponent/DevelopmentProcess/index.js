import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from '../../UiComponent/Container';
import DevelopmentProcessWrapper from './style';

const Index = ({ boxesData }) => {
  return (
    <DevelopmentProcessWrapper>
      <Container>
        <h2 className='heading'>Lost to Launched with Qbatch’s Software Product Development Process</h2>
        <Row>
          {boxesData.map((data, index) => (
            <Col lg={4} key={index}>
              <div className='box'>
                <div className='box-header'>
                  <img src={data.image} alt='box-image' />
                  <h3 className='text-h3'>{data.duration}</h3>
                </div>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </DevelopmentProcessWrapper>
  );
};

export default Index;
