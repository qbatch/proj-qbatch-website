import React from "react";
import CountUp from 'react-countup'

import Container from "../../UiComponent/Container";
import AchievementsWrapper from './style'

import { counterData2 } from "../../../constants";

const Index = ({ innerPage, page, mainHeading }) => {
  const heading = mainHeading || "Achievements Through The Years...";

  return (
    <AchievementsWrapper>
      <div className="achievements-main">
        <Container className="achievements-inner-wrapper">
          <div className="counter-wrapper">
            {counterData2.map((data, ind) => (
              <div key={ind} className="achievements-col">
                <span className="heading">
                  <CountUp end={data.count} duration={3} />
                  {data.symbol && (
                    <span className="color-danger fw-light ms-2">{data.symbol}</span>
                  )}
                </span>
                <p>{data.desc}</p>
              </div>
            ))}
            <div className="achievements-col">
                <span className="heading">
                  3
                    <span className="color-danger fw-light ms-2">/</span>
                    4
                </span>
                <p>Customers stay for future projects</p>
              </div>
          </div>
        </Container>
      </div>
    </AchievementsWrapper>
  );
};

export default Index;
