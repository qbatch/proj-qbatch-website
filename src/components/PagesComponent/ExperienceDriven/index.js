import React from 'react';
import ExperienceDrivenWrapper from './style'
import Container from '../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';
import Button from "../../UiComponent/Button"

const index = () => {
  return (
    <ExperienceDrivenWrapper>
      <Container>
        <span className='sub-heading'>You are bound to get several “Benefits” with our</span>
        <h2 className='heading'>Experience-Driven Browser Extensions and Plug-Ins</h2>
        <Row className='m-auto'>
          <Col xl={3} xs={6}>
            <div className='inner-box'>
              <img src='/high-security.svg' alt='hight-security' />
              <p>High-security</p>
            </div>
          </Col>
          <Col xl={3} xs={6}>
            <div className='inner-box'>
              <img src='/easy-to-approach-features.svg' alt='hight-security' />
              <p>Easy-to-Approach Features</p>
            </div>
          </Col>
          <Col xl={3} xs={6}>
            <div className='inner-box'>
              <img src='/ad-free-browsing.svg' alt='hight-security' />
              <p>Ad-Free Browsing</p>
            </div>
          </Col>
          <Col xl={3} xs={6}>
            <div className='inner-box'>
              <img src='/smooth-browsing-experience.svg' alt='hight-security' />
              <p>Smooth Browsing Experience</p>
            </div>
          </Col>
          <Col xl={3} xs={6}>
            <div className='inner-box'>
              <img src='/return-on-marketing-investment.svg' alt='hight-security' />
              <p>Return on Marketing Investment</p>
            </div>
          </Col>
          <Col xl={3} xs={6}>
            <div className='inner-box'>
              <img src='/streamlined-project-management.svg' alt='hight-security' />
              <p>Streamlined Project Management</p>
            </div>
          </Col>
          <Col xl={3} xs={6}>
            <div className='inner-box'>
              <img src='/organized-and-decluttered-workflow.svg' alt='hight-security' />
              <p>Organized and Decluttered Workflow</p>
            </div>
          </Col>
          <Col xl={3} xs={6}>
            <div className='inner-box'>
              <img src='/multi-channel-product-distribution.svg' alt='hight-security' />
              <p>Muti-Channel Product Distribution</p>
            </div>
          </Col>
        </Row>
        <Button text="Build Custom Browser Extension" btnType="submit" className="m-auto" />
      </Container>
    </ExperienceDrivenWrapper>
  );
};

export default index;