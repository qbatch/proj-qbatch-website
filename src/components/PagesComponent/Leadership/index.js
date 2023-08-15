import React from "react";
import { Col, Row } from "react-bootstrap";

import Container from "../../UiComponent/Container";

import LeadershipWrapper from "./style";

const leaderData = [
  {
    id: 1,
    name: "Ibrahim Zahoor",
    title: "CEO & Founder",
    imageSrc: "/leader-1.jpeg",
  },
  {
    id: 2,
    name: "Hassan Akram",
    title: "CTO & co - Founder Qbatch",
    imageSrc: "/leader-2.jpeg",
  },
  // Add more leaders as needed
];

const Index = () => {
  return (
    <LeadershipWrapper>
      <Container>
        <Row className="g-0">
          <Col lg={4}>
            <div className="content-wrapper">
              <h2 className="heading">Leadership you can Trust</h2>
              <p className="paragraph">We partner with visionaries like you to assist your business’ technological transformation on a massive scale</p>
              <ul className="list">
                <li>With logic, innovation, and emotion</li>
                <li>Beyond traditional problem-solving technique and old-fashioned promises.</li>
              </ul>
            </div>
          </Col>
          <Col lg={8}>
            <Row className="leaders-wrapper">
              {leaderData.map((leader) => (
                <Col md={6} className="leader" key={leader.id}>
                  <div className="leader-info">
                    <h4 className="leader-name">{leader.name}</h4>
                    <span className="leader-title">{leader.title}</span>
                  </div>
                  <div className="leader-img-wrapper">
                    <img className="leader-img" src={leader.imageSrc} alt={leader.name} />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </LeadershipWrapper>
  );
};

export default Index;
