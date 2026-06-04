import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from '../../UiComponent/Container';
import HowWeWorkWrapper from './style';

const steps = [
  {
    number: '01',
    title: 'Discover',
    desc: 'We deep-dive into your goals, users, and competitive landscape to build a product roadmap that is both realistic and ambitious.',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'From system architecture to pixel-perfect UI, every decision is made with performance, scalability, and user experience at the forefront.',
  },
  {
    number: '03',
    title: 'Develop',
    desc: 'Clean code, CI/CD pipelines, and rigorous QA — we ship features without shipping bugs. Senior engineers, not juniors, own your build.',
  },
  {
    number: '04',
    title: 'Deploy & Scale',
    desc: "We don't disappear at launch. We monitor, iterate, and scale your product alongside your growth — as true long-term partners.",
  },
];

const Index = () => {
  return (
    <HowWeWorkWrapper>
      <Container>
        <div className="section-heading text-center">
          <h2 className="heading">How We Work</h2>
          <p>A transparent, predictable process — so you always know what's happening and what's next.</p>
        </div>
        <Row className="steps-row">
          {steps.map((step, ind) => (
            <Col lg={3} md={6} key={ind} className="step-col">
              <div className="step-card">
                <span className="step-number">{step.number}</span>
                <h3 className="text-h4">{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {ind < steps.length - 1 && <div className="step-connector" />}
            </Col>
          ))}
        </Row>
      </Container>
    </HowWeWorkWrapper>
  );
};

export default Index;
