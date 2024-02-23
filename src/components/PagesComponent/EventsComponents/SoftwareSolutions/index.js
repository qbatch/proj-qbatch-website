import React from 'react';
import SoftwareSolutionsWrapper from './style';
import Container from '../../../UiComponent/Container';
import { Row, Col } from 'react-bootstrap';

import ButtonArrow from '../../../../../static/event-btn-arrow.svg'
import Abstract from "../../../../../static/event-abstract.svg"

const SoftwareSolutions = () => {
  return (
    <SoftwareSolutionsWrapper>
      <Container>
        <h2 className='text-h2 heading'>We power online sellers, retailers, and distributors with purpose-driven software solutions.</h2>
        <div className='boxes-wrapper'>
          <Row className='g-3'>
            <Col lg={4} md={6}>
              <div className='software-solution-box'><span>
                Business Process Automation</span></div>
            </Col>
            <Col lg={4} md={6}>
              <div className='software-solution-box'><span>
              Marketplace Data Extraction</span></div>
            </Col>
            <Col lg={4} md={6}>
              <div className='software-solution-box'><span>
              Data Analytics</span></div>
            </Col>
            <Col lg={4} md={6}>
              <div className='software-solution-box'><span>
              Amazon Reimbursement Service</span></div>
            </Col>
            <Col lg={4} md={6}>
              <div className='software-solution-box'><span>
               Fulfillment Automation</span></div>
            </Col>
            <Col lg={4} md={6}>
              <div className='software-solution-box'><span>
                PPC Automation </span></div>
            </Col>
          </Row>
        </div>
       <a href='#event-form'>
       <button  className='inner-btn' type='submit'>Let’s Meet<img src={ButtonArrow} alt='arrow' /></button>
       </a>
      </Container>
      <div className='solution-bg'>
        <img src={Abstract} />
      </div>
    </SoftwareSolutionsWrapper>
  );
};

export default SoftwareSolutions;