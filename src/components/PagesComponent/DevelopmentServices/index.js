import React from 'react';
import { navigate } from 'gatsby'; // Assuming you're using Gatsby for routing

import DevelopmentServicesWrapper from './style';
import Container from '../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';
import PrimaryButton from '../../UiComponent/PrimaryButton';

import BoxImg1 from '../../../../static/dev-service-box-img-1.svg';
import BoxImg2 from '../../../../static/dev-service-box-img-2.svg';
import BoxImg3 from '../../../../static/dev-service-box-img-3.svg';
import BoxImg4 from '../../../../static/dev-service-box-img-4.svg';
import BoxImg5 from '../../../../static/dev-service-box-img-5.svg';
import BoxImg6 from '../../../../static/dev-service-box-img-6.svg';
import BoxImg7 from '../../../../static/dev-service-box-img-7.svg';
import BoxImg8 from '../../../../static/dev-service-box-img-8.svg';
import BoxImg9 from '../../../../static/dev-service-box-img-9.svg';
import BoxImg10 from '../../../../static/dev-service-box-img-10.svg';
import BoxImg11 from '../../../../static/dev-service-box-img-11.svg';

const servicesData = [
  {
    img: BoxImg1,
    title: 'Full Stack Software Development',
    description: 'Deliver user-friendly interfaces, seamless functionality, and an invincible market position with our full-stack software development team. We build bespoke solutions across B2B, B2C, or SaaS needs leveraging technologies like Javascript, Python, RoR, React, Angular, Vue, & more.',
    buttonText: 'Explore More',
    buttonLink: '/contact', 
  },
  {
    img: BoxImg2,
    title: 'Enterprise Software Development Solutions',
    description: 'With deeper expertise in modern technologies and a team dedicated to delivering foolproof results, we offer viable and cross-platform software solutions for your business that minimize market risks and maximize monetary results.',
    buttonText: 'Explore More',
    buttonLink: '/services/enterprise-software-development', 
  },
  {
    img: BoxImg3,
    title: 'Mobile App Development',
    description: 'As custom web developers, we focus on both back-end and front-end systems to deliver amusing user experiences. Our Agile approach ensures on-time, on-budget product delivery with 100% stable, crash-free code.',
    buttonText: 'Explore More',
    buttonLink: '/services/mobile-app-development', 
  },
  {
    img: BoxImg4,
    title: 'Business Process Automation',
    description: 'Tired of monitoring internal and external E-commerce operations manually? Let’s automate routine operations and slow business workflows including chatbots, sales forecasting, order entry, and fulfillment. No more manual work — less effort and great results only!',
    buttonText: 'Explore More',
    buttonLink: '/services/e-commerce-automation/', 
  },
  {
    img: BoxImg5,
    title: 'CTO as a Service',
    description: 'Your digital journey can be challenging and unique but well-informed leadership and technical guidance can lead you to successful technology adoption. We are your trusted tech allies dedicated to providing and executing a sustainable roadmap per your business needs.',
    buttonText: 'Explore More',
    buttonLink: '/services/cto-as-a-service', 
  },
  {
    img: BoxImg6,
    title: 'Software Product Design',
    description: 'Jaw-dropping, navigable, and accessible interfaces await you! We highly believe design and code are only devices of expression. What sets our work apart is people who deliver an intuitive visual appeal giving your people what they need to see and experience.',
    buttonText: 'Explore More',
    buttonLink: '/services/product-design-development', 
  },
  {
    img: BoxImg7,
    title: 'MVP Development',
    description: 'Tired of monitoring internal and external E-commerce operations manually? Let’s automate routine operations and slow business workflows including chatbots, sales forecasting, order entry, and fulfillment. No more manual work — less effort and great results only!',
    buttonText: 'Explore More',
    buttonLink: '/contact', 
  },
  {
    img: BoxImg8,
    title: 'DevOps and Cloud Computing',
    description: 'You no longer have to spend time sharing files back and forth with your team members. DevOps and cloud computing allow us to accelerate automation and workflows to help you achieve easier collaboration & simpler data management.',
    buttonText: 'Explore More',
    buttonLink: '/services/devops', 
  },
  {
    img: BoxImg9,
    title: 'Application Modernization',
    description: 'Don’t block your success due to cost and time constraints. Bid farewell to your legacy system and leverage our Application Modernization Services featuring helpful cloud-native microservices. Rapidly innovate and refactor without any technical debt risks.',
    buttonText: 'Explore More',
    buttonLink: '/services/mobile-app-development', 
  },
  {
    img: BoxImg10,
    title: 'Browser Extension Development',
    description: 'Your “I wish this site had that feature” wish comes true with our highly customizable and fast-performing browser extensions, plug-ins, toolbars, and add-ons. We leverage modern technologies for robust browser extensions for Chrome, Safari, Edge, Firefox, and Brave.',
    buttonText: 'Explore More',
    buttonLink: '/contact', 
  },
  {
    img: BoxImg11,
    title: 'Web Data Scraping and Extraction',
    description: 'We specialize in unclogging data streams, eliminating the mess using top-tier proxy networks, powerful web scrapers, and a trusted data team scraping at Qbatch. Extract important data and march toward actionable business intelligence with our expert assistance.',
    buttonText: 'Explore More',
    buttonLink: '/services/web-and-data-scraping', 
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
