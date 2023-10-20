import React from "react";
import { Col, Row } from "react-bootstrap";

import Container from "../../UiComponent/Container";

import { leaderData } from "../../../constants";

import LeadershipWrapper from "./style";

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
              {leaderData.map((leader,i) => (
                <Col md={6} className="leader" key={i}>
                  <div className="leader-info order-2 order-md-1">
                    <h3 className="leader-name text-h4">{leader.name}</h3>
                    <span className="leader-title">{leader.title}</span>
                  </div>
                  <div className="leader-img-wrapper order-1 order-md-2">
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
