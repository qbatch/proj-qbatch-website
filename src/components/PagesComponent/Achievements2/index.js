import React, { useEffect, useState } from "react";
import CountUp from 'react-countup'

import Container from "../../UiComponent/Container";
import { counterData2 } from "../../../constants";

import AchievementsWrapper from './style'

const Index = () => {
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
    <AchievementsWrapper>
      <div className="achievements-main">
        <Container className="achievements-inner-wrapper">
            <h2>Achievements Through The Years...</h2>
          <div className="counter-wrapper">
            {counterData2.map((data, ind) => (
              <div key={ind} className="achievements-col">
                <span className="heading">
                {typeof window !== 'undefined' && width >= 480 ?
                  <CountUp end={data.count} duration={3} />
                  :
                  <span>{data.count}</span>
                }
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
                    <span className="color-danger fw-light mx-2">/</span>
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
