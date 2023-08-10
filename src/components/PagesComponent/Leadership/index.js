import React from "react";
import LeadershipWrapper from "./style";
import { Col, Row } from "react-bootstrap";
import Container from "../../UiComponent/Container";
const Index = () => {
  return (
    <LeadershipWrapper>
      <Container>
        <Row className="g-0">
          <Col lg={4}>
            <div className="content-wrapper">
              <h2 className="heading">Leadership you can Trust</h2>
              <p className="paragraph">We partner with visionaries like you to assist your business’ technological  transformation on a massive scale</p>
              <ul className="list">
                <li>With logic, innovation, and emotion</li>
                <li>Beyond traditional problem-solving technique and old-fashioned promises.</li>
              </ul>
            </div>
          </Col>
          <Col lg={8}>
            <Row className="leaders-wrapper">
              <Col md={6} className="leader">
                <div className="leader-info">
                  <h4 className="leader-name">Ibrahim Zahoor</h4>
                  <span className="leader-title">CEO & Founder</span>
                </div>
                <div className="leader-img-wrapper">
                  <img className="leader-img" src="/leader-1.jpeg" />
                </div>
              </Col>
              <Col md={6} className="leader">
                <div className="leader-info">
                  <h4 className="leader-name">Hassan Akram</h4>
                  <span className="leader-title">CTO & co - Founder Qbatch</span>
                </div>
                <div className="leader-img-wrapper">
                  <img className="leader-img" src="/leader-2.jpeg" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </LeadershipWrapper>
  )
}

export default Index;