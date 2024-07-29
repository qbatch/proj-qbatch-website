import React, { lazy } from "react";

import { AffordableHiringData } from '../../../constants/index';

import { AffordableHiringWrapper } from "./style";

const Container = lazy(() => import("../../UiComponent/Container"));
const Button = lazy(() => import("../../UiComponent/Button"));

const AffordableHiring = () => {

  return (
    <AffordableHiringWrapper>
      <Container>
        <h2>Affordable Hiring Models For Startups</h2>
        <p>
          Qbatch’s developers serve Fortune 500 companies and Startups saving
          them from high prices and limited results.
        </p>
        <div className="cards-overlay-wrapper">
          {AffordableHiringData.map((item,index) => (
            <div key={index} className="card-items">
              <h3>{item.heading}</h3>
              <div className="item-content">
                <p>{item.hours}</p>
                <ul>
                  <li>{item.dayHours}</li>
                  <li>{item.billing}</li>
                  <li>{item.hiringPeried}</li>
                  <li>{item.demand}</li>
                </ul>
              </div>
              <Button className="explore-more-btn" text="Explore More" />
            </div>
          ))}
        </div>
      </Container>
    </AffordableHiringWrapper>
  );
};

export default AffordableHiring;
