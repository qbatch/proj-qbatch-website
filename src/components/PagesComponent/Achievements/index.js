import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import CountUp from 'react-countup'

import Container from "../../UiComponent/Container";
import { counterData } from "../../../constants";

import AchievementsWrapper from './style'

const Index = ({ innerPage, page, mainHeading, labelText, className }) => {
  const numCols = page === "contact" ? 3 : 4;
  const displayedCounterData = page === "contact" ? counterData : counterData.slice(0, 3);
  const heading = mainHeading || "Achievements Through The Years...";

  const [width, setWidth] = useState(0);

   useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <AchievementsWrapper className={className}>
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
                {typeof window !== 'undefined' && width >= 480 ?
                  <CountUp end={data.count} duration={3} />
                  :
                  <span>{data.count}</span>
                }
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
