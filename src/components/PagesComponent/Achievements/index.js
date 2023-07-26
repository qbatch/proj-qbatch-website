import React from "react";

import AchievementsWrapper from "./style";
import Container from "../../UiComponent/Container";

import { Row, Col } from "react-bootstrap";

import CountUp from "react-countup";

const counterData = [
  {
    id: 1,
    count: 150,
    desc: "Full stack Developers",
  },
  {
    id: 2,
    count: 300,
    desc: "Solutions Delivered \n Successfully",
  },
  {
    id: 3,
    count: 98,
    desc: "Customer Happiness \n Index",
  },
];

const Index = () => {
  return (
    <AchievementsWrapper>
      <div className="achievements-main d-flex flex-column">
        <Container>
          <h1 className="heading text-center">Achievements Through The Years...</h1>

          <Row>
            {counterData.map((data, ind) => (
              <Col md={4} sm={12}>
                <div className="achievements">
                  <h1>
                    <CountUp end={data.count} duration={3} />
                    <span className="color-danger fw-light ms-2">{ind === 2 ? "%" : "+"}</span>
                  </h1>
                </div>
                <p className="skill-caption">{data.desc}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </AchievementsWrapper>
  );
};

export default Index;
