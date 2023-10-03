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
          <h1 className="heading">Achievements Through The Years...</h1>
          <Row>
            {displayedCounterData.map((data, ind) => (
              <Col md={numCols} sm={numCols} xs={12} key={ind} className="achievements-col">
                <h1 className={`${pageNumber &&  "heading" }`}>
                  <CountUp end={data.count} duration={3} />
                  {data.symbol && <span className="color-danger fw-light ms-2">{data.symbol}</span>}
                </h1>
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
