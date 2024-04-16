import React, { useState } from "react";
import Container from "../../components/UiComponent/Container";
import CountNum from '../../../static/arrow-line.svg'
import { FourStepsProcessWrapper } from "./style";

const FourStepsProcess = () => {
  const FourStepsProcessData = [
    {
      img: CountNum,
      number:1,
      heading: "Tell us your requirements",
      text: "We carefully understand your needs, goals, and dynamics.",
    },
    {
      img: CountNum,
      number:2,
      heading: "Meet A-grade developers",
      text: "We screen the most suitable developer profiles & present them to you within 24 hours.",
    },
    {
      img: CountNum,
      number:3,
      heading: "Find the right fit",
      text: "Meet the devs and find your best match. We take care of the rest!",
    },
    {
      number:4,
      heading: "Begin your trial",
      text: "Start building with a no-risk 1-week trial period.",
    },
  ];

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
