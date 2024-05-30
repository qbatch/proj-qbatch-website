import React from 'react';

import DeveOpsServiceWrapper from './style';
import Container from '../../UiComponent/Container';
import { Col, Row } from 'react-bootstrap';

const servicesData = [
  {
    img: "/ci-cd-services.svg",
    title: 'CI/CD Services',
    description: 'Keep track of test cases, code changes, instant feedback loops, and release cycles bridging the Dev and Ops gap via CI/CD services. This ensures constant software quality, end-to-end security, reduced costs, and of course continuous integration and delivery of new changes as needed.',
  },
  {
    img: "/devops-and-cloud-computing.svg",
    title: 'DevOps and Cloud Computing',
    description: 'Hyper-scale public clouds like AWS Cloud, Azure, and Google Cloud Platform have enabled enterprises to enjoy more reliability and stability in their DevOps adoption journeys. Our AWS DevOps consulting services offer compliance, planning, and tools for building a stable DevOps-Cloud infrastructure.',
  },
  {
    img: "/devsecops-services.svg",
    title: 'DevSecOps Services',
    description: 'Assure grass-root level security through the ‘Security as Code’ mechanism with our senior DevOps engineers. We perform DevSecOps to determine risk tolerance throughout the continuous integration and delivery pipeline assuring clean code, better visibility, and quick insights into possible risks.',
  },
  {
    img: "/devops-consulting-services.svg",
    title: 'DevOps Consulting Services',
    description: 'We offer discovery workshops on DevOps use case-driven services, tools, and advisory that highlight improvement areas for pipeline optimization. Our DevOps consultants perform audits and maturity assessments and offer a holistic roadmap for change enablement and coaching. ',
  },
  {
    img: "/devops-automation-services.svg",
    title: 'DevOps Automation Services',
    description: 'Limit time outages and possible technical debts by automating the software pipeline from coding to development and production stages across APIs and environments with our DevOps services. We help you accelerate operational efficiency and business agility assuring fluent workflows and end results.  ',
  },
  {
    img: "/infrastructure-as-code-services.svg",
    title: 'Infrastructure as Code Services',
    description: 'Automate infrastructure at scale instead of manually setting up and configuring resources by availing our IaC DevOps services. IaC increases agility and reduces human error in the software delivery pipeline, ensuring provisioning, configuration, and system management.',
  },
  {
    img: "/virtualization.svg",
    title: 'Virtualization',
    description: 'Deal with money constraints and standardize software deployments by working in the same network environments with the self-contained virtualization approach. We as DevOps engineering services providers employ self-contained virtual containers to assure responsiveness toward business demands.',
  },
];

const Index = () => {
  return (
    <DeveOpsServiceWrapper>
      <Container>
        <Row>
          <Col lg={8}>
            <div className='section-main'>
              <h2 className='text-h2 section-main-heading'>Explore Qbatch’s DevOps Services</h2>
              <p className='section-main-subtitle'>Accelerate Business Agility and Automation Through Continuous Improvements</p>
              <p className='section-main-paragraph'>Qbatch’s DevOps experts offer a hard-earned domain experience to help your idea move freely and continuously from development to deployment stages featuring task automation, environment standardization, and performance tracking. </p>
            </div>
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

                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </DeveOpsServiceWrapper>

  );
};

export default Index;
