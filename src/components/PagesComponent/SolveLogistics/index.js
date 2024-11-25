import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { navigate } from 'gatsby';

import Container from '../../UiComponent/Container';
import Button from "../../UiComponent/Button";

import SolveLogisticsWrapper from './style';

const tackleSaas = () => {
  return (
    <SolveLogisticsWrapper>
      <Container>
        <Row className='g-5 align-items-center'>
          <Col lg={6} className='order-lg-1 order-2'>
            <h2 className='heading text-h2'>
              We solve your logistics and transportation challenges — with human touch and tech power.
            </h2>
            <p className='paragraph'>Today's logistics landscape is brutal. Globalization has its perks, but delivering goods internationally. Every supply chain business struggles with soaring costs and sky-high customer expectations.</p>
            <p className='paragraph'>At Qbatch, we're your trusted partner. We combine human expertise with contemporary technology to tackle your logistics challenges. We build highly tailored software solutions that boost efficiency, increase visibility, and unlock growth.</p>
            <Button text="Ready to conquer logistics? Let’s talk." onClick={() => navigate('/contact')} />
          </Col>
          <Col lg={6} className='order-lg-2 order-1'>
            <div className='d-flex justify-content-center'>
              <img src='/solve-logistics-img.svg' alt='solve-logistics' loading='eager' width={574} height={396} />
            </div>
          </Col>
        </Row>
      </Container>
    </SolveLogisticsWrapper>
  );
};

export default tackleSaas;
