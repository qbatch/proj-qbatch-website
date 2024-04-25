import React from "react";
import { Col, Row } from "react-bootstrap";

import Container from "../../UiComponent/Container";


import LeadershipWrapper from "./style";
import LeaderCard from "../leaderCard";

const Index = () => {
  return (
    <LeadershipWrapper>
      <Container>
        <Row className="g-24">
          <Col lg={4}>
            <div className="content-wrapper">
              <h2 className="heading">Leadership you can Trust</h2>
              <p className="paragraph">
              We partner with visionaries like you to assist your business’ 
              technological transformation on a massive scale
              </p>
              <ul className="list">
                <li>With Logic, Innovation, And Emotion</li>
                <li>
                Beyond traditional problem-solving technique and old-fashioned promises.
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={8}>
            <div className="leaders-cards-wrapper">
              <LeaderCard
                title="Ibrahim Zahoor"
                profile="/ceo.png"
                designation="CEO & Co-Founder"
                socialLink="https://www.linkedin.com/in/ibrahimzahoor/"
                aboutText="“With a wealth of experience streamlining crucial E-commerce business processes, I offer a reliable approach to simplify complex tasks and operations.”"
              />
              <LeaderCard
                title="Hassan Akram"
                profile="/cto.png"
                designation="CTO & Co-Founder"
                socialLink="https://www.linkedin.com/in/hassanakram/"
                aboutText="“Having faced challenging technical situations, I thrive on problem-solving, automating difficult tasks, and creating impactful products.”"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </LeadershipWrapper>
  );
};

export default Index;
