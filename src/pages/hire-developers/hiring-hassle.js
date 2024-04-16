import React from "react";
import StopWatch from "../../../static/stopwatch.svg";
import Retention from "../../../static/retention-01.svg";
import FastTime from "../../../static/fast-time.svg";
import Cost from "../../../static/cost-01.svg";
import Hours from "../../../static/dev-match-time-1.svg";
import Container from "../../components/UiComponent/Container";

import { HiringHassleWrapper } from "./style";

const HiringHassle = () => {
  const hassleData = [
    {
      img: <img src={StopWatch} />,
      number: 10,
      sign: "X",
      heading: "Faster Onboarding",
    },
    {
      img: <img src={Retention} />,
      number:60,
      sign: "X",
      heading: "Less Time Hiring",
    },
    {
      img: <img src={Cost} />,
      number: 50,
      sign: "%",
      heading: "Cost Optimization",
    },
    {
      img: <img src={FastTime} />,
      number: 98,
      sign: "%",
      heading: "Retention Rate",
    },
    {
      img: <img src={Hours} />,
      number: 48,
      sign: "hr",
      heading: "Dev Match Time",
    },
  ];

  return (
    <HiringHassleWrapper>
        <Container>
        <h2>Let’s Skip The Hiring Hassle!</h2>
        <p>
          Your development team decides your market position. We’ve got you:
        </p>
        <div className="hiring-hassle-overlay">
          {hassleData.map((item, index) => (
            <div key={index} className="hiring-hassle-cards">
              <div className="hiring-hassle-card-tem">
                {item.img}
                <p>
                  <span>{item.number}</span>
                  <span>{item.sign}</span>
                </p>
              </div>
              <p>{item.heading}</p>
            </div>
          ))}
        </div>
    </Container>
      </HiringHassleWrapper>
  );
};

export default HiringHassle;
