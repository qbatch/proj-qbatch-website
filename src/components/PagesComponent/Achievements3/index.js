import React from "react";
import { Row, Col } from "react-bootstrap";
import CountUp from 'react-countup';

import Container from "../../UiComponent/Container";
import AchievementsWrapper from './style'

import { counterData3 } from "../../../constants";

const Index = ({ headingClass, page, mainHeading,textClass }) => {
  const displayedCounterData = counterData3.slice(0, 4);
  const heading = mainHeading ;

  return (
    <AchievementsWrapper>
      <div className="achievements-main">
        <Container className="achievements-inner-wrapper">
          <h2 className="heading text-h2">
            {heading}
          </h2>
          <Row className="g-xl-0 g-5">
            {displayedCounterData.map((data, ind) => (
              <Col  lg={3} sm={6} xs={12} key={ind} className="achievements-col">
                <span className="text-h1 inner-heading">
                  {parseFloat(data.count.toFixed(1)).toLocaleString()} {/* Round to 1 decimal place and add comma */}
                  {data.symbol && (
                    <span className="color-danger fw-light ms-2">{data.symbol}</span>
                  )}
                </span>
                <p className="description fw-normal">{data.desc}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </AchievementsWrapper>
  );
};

export default Index;
