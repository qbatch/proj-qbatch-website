import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from '../../UiComponent/Container';
import Button from "../../UiComponent/Button";

import QuickResponseWrapper from './style';

const serviceOptions = [
  {
    imgSrc: '/saas-consulting.svg',
    altText: 'saas-consulting',
    heading: 'SaaS Consulting',
    paragraph: 'Trust Qbatch’s solution architects to materialize your idea into a detailed Software requirements specification (SRS) and cost-benefit estimation plan.',
    buttonText: 'Get Services',
    link: '/contact'
  },
  {
    imgSrc: '/saas-development.svg',
    altText: 'saas-development',
    heading: 'SaaS Development',
    paragraph: 'Delegate your SaaS development project to our seasoned software developers and well-experienced PMs.',
    buttonText: 'Get Services',
    link: '/contact'
  },
  {
    imgSrc: '/saas-modernization.svg',
    altText: 'saas-modernization',
    heading: 'SaaS Modernization and Support',
    paragraph: 'Revamp your existing SaaS or request standard support & maintenance services to keep your app updated and functional for your end-users.',
    buttonText: 'Get Services',
    link: '/contact'
  }
];

const QuickResponse = () => {
  return (
    <QuickResponseWrapper>
      <Container>
        <h2 className='heading text-h2'>
          Choose Your Service Option for a Quick Response
        </h2>
        <Row className='g-4'>
          {serviceOptions.map((service, index) => (
            <Col lg={4} key={index}>
              <div className='quick-response-box'>
                <div className='img-wrapper'>
                  <img src={service.imgSrc} alt={service.altText}/>
                </div>
                <div className='quick-response-inner'>
                  <h3 className='text-h4 box-heading'>{service.heading}</h3>
                  <p className='inner-paragraph'>{service.paragraph}</p>
                </div>
                <div className='d-flex justify-content-end'>
                  <Button text={service.buttonText} onClick={() => navigate(service.link)} className="primary-btn" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </QuickResponseWrapper>
  );
};

export default QuickResponse;
