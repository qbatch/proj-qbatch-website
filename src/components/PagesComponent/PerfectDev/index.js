import React, { lazy } from "react";

import { DevData } from '../../../constants/index';

import { PerfectDevStyleWrapper } from  "./style";

const Container = lazy(() => import("../../../components/UiComponent/Container"));
const Button = lazy(() => import("../../../components/UiComponent/Button"));

const PerfectDev = () => {

  return (
    <PerfectDevStyleWrapper>
        <Container>
        <h2>Become Invincible With Your Perfect Devs </h2>
        <p>We offer convenience, flexibility,  and transparency. How?</p>
        <div className="perfect-devs-overlay-wrapper">
        <div className="perfect-devs-overlay">
          {DevData.map((item,index) => (
            <div key={index} className="perfect-devs-wrapper">
                {item.img}
            <div className="perfect-devs-item">
              <h3>{item.heading}</h3>
              <p>
              {item.text}
              </p>
            </div>
          </div>
          ))}
          <Button className="get-a-query-btn" text="Get a Query" />
        </div>
        </div>
    </Container>
      </PerfectDevStyleWrapper>
  );
};

export default PerfectDev;
