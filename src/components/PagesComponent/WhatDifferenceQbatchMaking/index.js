import React from "react";
import QbatchMakingWrapper from "./style";

import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";

import GradientArrow from "../../../assets/images/icons/gradient-arrow.svg";

const data = [
  {
    id: 1,
    challenges: "Inability to find top talent",
    solve: "100+ experts ready to fill possible gaps",
    icon1: "/top-talent-icon1.svg",
    icon2: "/top-talent-icon2.svg",
  },
  {
    id: 2,
    challenges: "Slow delivery and time-to-market",
    solve: "5x your time-to-market with our mission-critical services",
    icon1: "/delivery-time-icon1.svg",
    icon2: "/delivery-time-icon2.svg",
  },
  {
    id: 3,
    challenges: "Unpredictability about making investments",
    solve: "No more spending on unproven ideas",
    icon1: "/investment-icon1.svg",
    icon2: "/investment-icon2.svg",
  },
  {
    id: 4,
    challenges: "Is your idea risk-free",
    solve: "Build minimal- to zero-risk solutions",
    icon1: "/risk-free-icon1.svg",
    icon2: "/risk-free-icon2.svg",
  },
  {
    id: 5,
    challenges: "Tired of slow development and delivery",
    solve: "Readily identify blockers for a quick launch",
    icon1: "/development-icon1.svg",
    icon2: "/development-icon2.svg",
  },
  {
    id: 6,
    challenges: "Honest feedback feels like a dream",
    solve: "Get market-friendly feedback to set your next move",
    icon1: "/feedback-icon1.svg",
    icon2: "/feedback-icon2.svg",
  },
  {
    id: 7,
    challenges: "A future-ready plan is what you ever wanted",
    solve: "Intense industry research and project mapping",
    icon1: "/future-plan-icon1.svg",
    icon2: "/future-plan-icon2.svg",
  },
];

const Index = () => {
  return (
    <QbatchMakingWrapper>
      <Container>
        <div className="container-padding">
          <div className="section-heading text-center">
            <h1>What Difference is Qbatch Making?</h1>
            <p>We always present problems with tangible solutions.</p>
          </div>
          <Row>
            <Col md={5} sm={6}>
              <div className="text-center text-sm-end">
                <h3 className="color-danger">Your Challenges</h3>
              </div>
            </Col>
            <Col md={2} className="d-sm-none d-md-block"></Col>
            <Col md={5} sm={6}>
              <div className="text-center text-sm-start">
                <h3 className="color-primary">We Solve Them</h3>
              </div>
            </Col>
          </Row>
          <div className="challenges-section">
            {data.map((item, ind) => (
              <Row key={ind} className="challenges-box">
                <Col xs={5}>
                  <div className="text-end pe-sm-0 pe-2">
                    <p>{item.challenges}</p>
                  </div>
                </Col>
                <Col xs={2}>
                  <div className="d-flex align-items-center justify-content-center gap-md-3 gap-1 challenges-icons">
                    <img src={item.icon1} alt="icon" />
                    <GradientArrow />
                    <img src={item.icon2} alt="icon" />
                  </div>
                </Col>
                <Col xs={5}>
                  <div className="ps-sm-0 ps-2">
                    <p>{item.solve}</p>
                  </div>
                </Col>
              </Row>
            ))}
          </div>
        </div>
      </Container>
    </QbatchMakingWrapper>
  );
};

export default Index;
