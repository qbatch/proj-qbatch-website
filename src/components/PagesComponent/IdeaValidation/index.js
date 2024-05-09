import React from 'react';
import IdeaValidtionWrapper from './style';
import Container from '../../UiComponent/Container';
import Button from "../../../components/UiComponent/Button";
import { Col, Row } from 'react-bootstrap';


const index = () => {
  return (
    <IdeaValidtionWrapper>
      <Container>
        <div className='section-head'>
          <h2 className='heading text-h2'>Your idea is validated in three ways. How would you like to get it checked?</h2>
          <p>Proof of Concept: Why and how the idea is good? This is validated through a theoretical framework.</p>
        </div>
        <Row className='gx-5 justify-content-center'>
          <Col lg={4} md={6}>
            <div className='steps-wrapper'>
              <span className='step-icon text-h2'>1</span>
              <h3 className='text-h4 step-heading'>Proof of Concept</h3>
              <p className='step-paragraph'>Why and how the idea is good? This is validated through a theoretical framework.</p>
            </div>
          </Col>
          <img className='steps-arrow d-lg-block d-none' src='/steps-arrow.svg' alt='arrow' />
          <Col lg={4} md={6}>
            <div className='steps-wrapper'>
              <span className='step-icon text-h2'>2</span>
              <h3 className='text-h4 step-heading'>Prototype</h3>
              <p className='step-paragraph'>A barebone design, interaction flow, and experience that proves the idea’s viability in the real world.</p>
            </div>
          </Col>
          <img className='steps-arrow-2 d-lg-block d-none' src='/step-arrow-2.svg' alt='arrow' />
          <Col lg={4} md={6}>
            <div className='steps-wrapper'>
              <span className='step-icon text-h2'>3</span>
              <h3 className='text-h4 step-heading'>Minimum Viable Product (MVP)</h3>
              <p className='step-paragraph'>The most basic, market-ready version of a potential, sellable product idea.</p>
            </div>
          </Col>
        </Row>
        <div className='d-flex justify-content-center'>
          <Button onClick={() => navigate('/')} text="Get Price Estimate" />
        </div>
      </Container>
    </IdeaValidtionWrapper>
  );
};

export default index;