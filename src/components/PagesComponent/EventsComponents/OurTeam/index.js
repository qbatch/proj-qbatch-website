import React from 'react';
import OurTeamWrapper from './style';
import { Col, Container, Row } from 'react-bootstrap';

const OurTeam = () => {
  return (
    <OurTeamWrapper>
      <Container>
        <h2 className='heading'>Meet our team</h2>
        <p className='sub-title'>Qbatch’s leadership has done exceptional work in building concrete business automation solutions for 300+ e-commerce marketplace businesses.</p>
        <div className='team-wrapper'>
          <Row>
            <Col md={6}>
              <div className='inner-box-wrapper'>
                <img className='boss-img' src="/ceo.png" alt='CTO' />
                <div className='inner-box'>
                  <div className='inner-box-header'>
                    <h3 className='name'>Ibrahim Zahoor</h3>
                    <span>CEO & Co-Founder</span>
                  </div>
                  <div className='social'>
                    <a target='_blank' href='https://www.linkedin.com/in/ibrahimzahoor/'><img src='/linkedin.svg' /></a>
                  </div>
                  <p className='paragraph'>“With a wealth of experience streamlining crucial E-commerce business processes, I offer a reliable approach to simplify complex tasks and operations.”</p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className='inner-box-wrapper'>
                <img className='boss-img' src="/cto.png" alt='CTO' />
                <div className='inner-box'>
                  <div className='inner-box-header'>
                    <h3 className='name'>Hassan Akram</h3>
                    <span>CTO & Co-Founder</span>
                  </div>
                  <div className='social'>
                    <a target='_blank' href='https://www.linkedin.com/in/hassanakram/'><img src='/linkedin.svg' /></a>
                  </div>
                  <p className='paragraph'>“Having faced challenging technical situations, I thrive on problem-solving, automating difficult tasks, and creating impactful products.”</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className='solution-bg'>
        <img src="/event-abstract.svg" />
      </div>
    </OurTeamWrapper>
  );
};

export default OurTeam;