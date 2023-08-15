import React from "react";
import { Row, Col } from "react-bootstrap";
import CountUp from "react-countup";

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

const companyCounter = [
  {
    id: 1,
    count: 98,
    desc: "Customer Happiness Index",
    symbol: "%", 
  },
  {
    id: 2,
    count: 300,
    desc: "Partnerships Achieved",
    symbol: "+", 
  },
  {
    id: 3,
    count: 150,
    desc: "Projects Delivered",
    symbol: "+", 
  },
  {
    id: 4,
    count: 15,
    desc: "SaaS-Based Platforms Developed",
    symbol: "+",
  },
  {
    id: 5,
    count: 30000,
    desc: "Hrs Of Productivity Unlocked!",
    symbol: "+",
  },
  {
    id: 6,
    count: 100,
    desc: "Industry Experts",
    symbol: "+",
  },
  {
    id: 7,
    count: 10,
    desc: "Years Of Excellency",
    symbol: "", 
  },
  {
    id: 8,
    count: 3,
    desc: "Global Offices",
    symbol: "", 
  },
];

const Index = () => {
  return (
    <AchievementsWrapper>
      <Container>
        <h4 className="underline-heading">Together</h4>
        <h2 className="main-heading">We can achieve more — Beyond these numbers</h2>
        <div className="counter-wrapper">
        <Row>
          {companyCounter.map((data, ind) => (
            <Col md={3} sm={4} xs={6} key={ind} className="achievements-col">
              <h1>
                <CountUp end={data.count} duration={3} formattingFn={(value) => formatNumber(value)} />
                <span className="color-danger fw-light ms-2">
                  {data.symbol}
                </span>
              </h1>
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
