import React from 'react';
import DevOpsBoxesWrapper from './style';
import Container from '../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';

const DevOpsBoxes = () => {
  return (
    <DevOpsBoxesWrapper>
      <Container>
        <Row className='g-3'>
          <Col lg={4}>
            <div className='box'>
              <h3 className='box-text'>
                30
                <span>DevOps Experts</span>
              </h3>
            </div>
          </Col>
          <Col lg={4}>
            <div className='box'>
              <h3 className='box-text'>
                70
                <span>Cloud Infrastructures Designed</span>
              </h3>
            </div>
          </Col>
          <Col lg={4}>
            <div className='box'>
              <h3 className='box-text'>
                300
                <span>Pipelines Developed & Executed</span>
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </DevOpsBoxesWrapper>
  );
};

export default DevOpsBoxes;