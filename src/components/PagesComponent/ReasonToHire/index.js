import React from "react";
import Container from "../../../components/UiComponent/Container";
import Button from "../../../components/UiComponent/Button";
import { cardsData } from '../../../constants/index'
import { ReasonToHireWrapper } from "./style";

const ReasonToHire = () => {
  return (
    <ReasonToHireWrapper>
      <Container>
        <h2>
          Only the best reasons to hire our solution-focused software developers
        </h2>
        <div className="cards-wrapper">
           {cardsData.map((item,index) => (
          <div className="card-items">
            <img src={item.img} alt={item.img} loading="lazy" />
              <h3 className={item.className} key={index}>{item.text}</h3>
          </div>
           ))}
        </div>
        <Button className="hire-developers-btn" text="Hire Your Developers" />
      </Container>
    </ReasonToHireWrapper>
  );
};

export default ReasonToHire;
