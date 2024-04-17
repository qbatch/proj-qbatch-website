import React, { useState } from "react";
import Container from "../../components/UiComponent/Container";

import { FourStepsProcessData } from '../../constants/index'

import { FourStepsProcessWrapper } from "./style";

const FourStepsProcess = () => {


  return (
    <FourStepsProcessWrapper>
      <Container>
        <h2>Simple 4-step process to hire your developers</h2>
        <div className="process-card-overlay">
          {FourStepsProcessData.map((item, index) => (
            <div key={index} className="process-card-wrapper">
              <h3>{item.number}</h3>
             {item.img ? <img src={item.img} alt={item.img} /> : null}
              <h4>{item.heading}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </FourStepsProcessWrapper>
  );
};

export default FourStepsProcess;
