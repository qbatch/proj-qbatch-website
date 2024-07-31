import React, { lazy } from "react";

import { FourStepsProcessData } from '../../../constants/index'

import { FourStepsProcessWrapper } from "./style";

const Container = lazy(() => import("../../UiComponent/Container"));

const FourStepsProcess = () => {


  return (
    <FourStepsProcessWrapper>
      <Container>
        <h2>Simple 4-step process to hire your developers</h2>
        <div className="process-card-overlay">
          {FourStepsProcessData.map((item, index) => (
            <div key={index} className="process-card-wrapper">
              <p className="num-icon">{item.number}</p>
             {item.img ? <img src={item.img} alt={item.img} loading="lazy" /> : null}
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </FourStepsProcessWrapper>
  );
};

export default FourStepsProcess;
