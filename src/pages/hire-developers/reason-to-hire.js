import React from "react";
import Container from "../../components/UiComponent/Container";
import Button from "../../components/UiComponent/Button";
import CheckIcon from "../../../static/checked-mark.svg";
import { ReasonToHireWrapper } from "./style";

const ReasonToHire = () => {
  const cardsData = [
    {
     img:CheckIcon,
      text: 'Proven Coding Practices',
      className:'text-wrapper'
    },
    {
     img:CheckIcon,
      text: 'No Hidden Costs',
    },
    {
     img:CheckIcon,
      text: 'No Sudden Replacements'
    },
    {
     img:CheckIcon,
      text: 'Best Quality-Price Ratio'
    },
    {
     img:CheckIcon,
      text: 'Leaders’ Mentality'
    },
    {
     img:CheckIcon,
      text: 'Trustworthy & Transparent'
    },
  ]
  return (
    <ReasonToHireWrapper>
      <Container>
        <h2>
          Only the best reasons to hire our solution-focused software developers
        </h2>
        <div className="cards-wrapper">
           {cardsData.map((item,index) => (
          <div className="card-items">
            <img src={item.img} />
              <p className={item.className} key={index}>{item.text}</p>
          </div>
           ))}
        </div>
        <Button className="hire-developers-btn" text="Hire Your Developers" />
      </Container>
    </ReasonToHireWrapper>
  );
};

export default ReasonToHire;
