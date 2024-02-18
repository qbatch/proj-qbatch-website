import React from 'react';
import { navigate } from 'gatsby'; // Assuming you're using Gatsby for routing

import DevelopmentServicesWrapper from './style';
import Container from '../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';
import PrimaryButton from '../../UiComponent/PrimaryButton';

import BoxImg1 from '../../../../static/dev-service-box-img-1.svg';

const servicesData = [
  {
    img: BoxImg1,
    title: 'Full Stack Software Development',
    description: 'Deliver user-friendly interfaces, seamless functionality, and an invincible market position with our full-stack software development team. We build bespoke solutions across B2B, B2C, or SaaS needs leveraging technologies like Javascript, Python, RoR, React, Angular, Vue, & more.',
    buttonText: 'Explore More',
    buttonLink: '/contact', 
  },
  {
    img: BoxImg1,
    title: 'Full Stack Software Development',
    description: 'Deliver user-friendly interfaces, seamless functionality, and an invincible market position with our full-stack software development team. We build bespoke solutions across B2B, B2C, or SaaS needs leveraging technologies like Javascript, Python, RoR, React, Angular, Vue, & more.',
    buttonText: 'Explore More',
    buttonLink: '/contact', 
  },
  {
    img: BoxImg1,
    title: 'Full Stack Software Development',
    description: 'Deliver user-friendly interfaces, seamless functionality, and an invincible market position with our full-stack software development team. We build bespoke solutions across B2B, B2C, or SaaS needs leveraging technologies like Javascript, Python, RoR, React, Angular, Vue, & more.',
    buttonText: 'Explore More',
    buttonLink: '/contact', 
  },
  {
    img: BoxImg1,
    title: 'Full Stack Software Development',
    description: 'Deliver user-friendly interfaces, seamless functionality, and an invincible market position with our full-stack software development team. We build bespoke solutions across B2B, B2C, or SaaS needs leveraging technologies like Javascript, Python, RoR, React, Angular, Vue, & more.',
    buttonText: 'Explore More',
    buttonLink: '/contact', 
  },
];

const Index = () => {
  return (
    <DevelopmentServicesWrapper>
      <Container>
        <Row>
        <Col lg={4}>
            <h2 className='text-h2 section-main-heading'>Explore Full Cycle Software Development Services:<br /> <i>From Zero to One.</i></h2>
          </Col>
          {servicesData.map((service, index) => (
            <Col lg={4} key={index}>
              <div className='dev-service-box'>
                <div className='box-header'>
                  <img src={service.img} alt='icon' />
                  <h3 className='text-h4 box-heading'>{service.title}</h3>
                </div>
                <div className="box-body">
                  <p className='paragraph'>{service.description}</p>
                  <PrimaryButton onClick={() => navigate(service.buttonLink)} borderbottom text={service.buttonText} />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </DevelopmentServicesWrapper>
    
  );
};

export default Index;
