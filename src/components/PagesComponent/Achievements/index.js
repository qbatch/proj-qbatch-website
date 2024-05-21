import React from "react";
import { Row, Col } from "react-bootstrap";
import CountUp from 'react-countup'

import Container from "../../UiComponent/Container";
import { counterData } from "../../../constants";

import AchievementsWrapper from './style'

const Index = ({ innerPage, page, mainHeading, labelText }) => {
  const numCols = page === "contact" ? 3 : 4;
  const displayedCounterData = page === "contact" ? counterData : counterData.slice(0, 3);
  const heading = mainHeading || "Achievements Through The Years...";

  return (
    <AchievementsWrapper>
      <div className="achievements-main">
        <Container className="achievements-inner-wrapper">
          <h2 className={innerPage ? "" : "text-h1 color-primary"}>
            {heading}
          </h2>
          <p>{labelText}</p>
          <Row>
            {displayedCounterData.map((data, ind) => (
              <Col md={numCols} sm={numCols} xs={12} key={ind} className="achievements-col">
                <span className={page === "contact" ?  "text-h1" : "heading"}>
                  <CountUp end={data.count} duration={3} />
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
