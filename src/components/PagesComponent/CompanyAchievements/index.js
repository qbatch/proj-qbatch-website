import React from "react";
import { Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { companyCounter } from "../../../constants";

import Container from "../../UiComponent/Container";

import AchievementsWrapper from "./style";

const formatNumber = (count) => {
  if (count >= 1000) {
    if (count % 1000 === 0) {
      return `${count / 1000}K`;
    }
    return `${Math.floor(count / 1000)}k`;
  }
  return count;
};

const Index = () => {
  return (
    <AchievementsWrapper>
      <Container>
        <h2 className="main-heading"><span className="underline-heading text-h4">Together </span>Together, we can achieve more — beyond these numbers.</h2>
        <div className="counter-wrapper">
          <Row>
            {companyCounter.map((data, ind) => (
              <Col md={3} sm={4} xs={6} key={ind} className="achievements-col">
                <h3 className="text-h1">
                  <CountUp end={data.count} duration={3} formattingFn={(value) => formatNumber(value)} />
                  <span className="color-danger fw-light ms-2">{data.symbol}</span>
                </h3>
                <p>{data.desc}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </AchievementsWrapper>
  );
};

export default Index;
