import React from 'react';
import DevOpsSupremacyWrapper from './style';
import Container from '../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup'

const DevOpsSupremacy = () => {
  return (
    <DevOpsSupremacyWrapper>
       <Container>
        <Row>
          <Col lg={6}>
            <div className='wrapper'>
            <h2 className='heading text-h2'>
            Is DevOps Relevant to Your Business?
            </h2>
            <p className='paragraph mb-lg-0'>Industry leaders believe that responding quickly to emerging market needs and innovating faster is a cornerstone to growing a better and stronger business. DevOps practices can help you get there. </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className='counter-text-wrapper'>
              <span className='counter-text'>
                <CountUp end={77}/><span className='counter-symbol'>%</span>
              </span>
              <p className='counter-paragraph'>of organizations depend on DevOps to deploy software</p>
            </div>
            <div className='counter-text-wrapper'>
              <span className='counter-text'>
                <CountUp end={99}/><span className='counter-symbol'>%</span>
              </span>
              <p className='counter-paragraph'>of organizations saw great results after DevOps implementation in their business infrastructure</p>
            </div>
          </Col>
        </Row>
       </Container>
    </DevOpsSupremacyWrapper>
  );
};

export default DevOpsSupremacy;