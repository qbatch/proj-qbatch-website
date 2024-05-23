import React from "react";
import Container from "../../../components/UiComponent/Container";
import { hassleData } from '../../../constants/index'
import { HiringHassleWrapper } from "./style";

const HiringHassle = () => {

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
                <img src={item.img} alt={item.img} loading="lazy" />
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
