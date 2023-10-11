import React from "react";
import { Row, Col } from "react-bootstrap";

import AchievementsWrapper from "./style";
import Container from "../../UiComponent/Container";

import CountUp from "react-countup";

import { counterData } from "../../../constants";

const Index = ({ page }) => {
  
  const pageNumber = page === "home";
  const numCols = pageNumber ? 4 : 3;
  const displayedCounterData = pageNumber ? counterData.slice(0, 3) : counterData;

  return (
    <AchievementsWrapper>
      <div className="achievements-main">
        <Container className="achievements-inner-wrapper">
          <h2 className="heading text-h1">Achievements Through The Years...</h2>
          <Row>
            {displayedCounterData.map((data, ind) => (
              <Col md={numCols} sm={numCols} xs={12} key={ind} className="achievements-col">
                <span className={`${pageNumber &&  "heading text-h1 fw-bold" }`}>
                  <CountUp end={data.count} duration={3} />
                  {data.symbol && <span className="color-danger fw-light ms-2">{data.symbol}</span>}
                </span>
                <p>{data.desc}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </AchievementsWrapper>
  );
};

export default Index;
