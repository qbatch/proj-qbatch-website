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
    symbol: "+",
  },
  {
    id: 2,
    count: 300,
    desc: "Solutions Delivered \n Successfully",
    symbol: "+",
  },
  {
    id: 3,
    count: 98,
    desc: "Customer Happiness \n Index",
    symbol: "%",
  },
  {
    id: 4,
    count: 10,
    desc: "Customer Happiness \n Index",
    symbol: "",
  },
];

const Index = ({ page }) => {
  const displayedCounterData = page === "index" ? counterData.slice(0, 3) : counterData;

  return (
    <AchievementsWrapper>
      <div className="achievements-main">
        <Container className="achievements-inner-wrapper">
          <h1 className="heading">Achievements Through The Years...</h1>
          <Row>
            {displayedCounterData.map((data, ind) => (
              <Col
                md={page === "index" ? 4 : 3} 
                sm={page === "index" ? 4 : 3} 
                xs={12} 
                key={ind} 
                className="achievements-col"
              >
                <h1 className={`${page === "index" ? "heading" : ""}`}>
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
