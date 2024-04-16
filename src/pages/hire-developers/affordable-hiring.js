import React from "react";
import Container from "../../components/UiComponent/Container";
import Button from "../../components/UiComponent/Button";
import { AffordableHiringWrapper } from "./style";

const AffordableHiring = () => {
  const AffordableHiringData = [
    {
      heading: "Full-time Developer",
      hours: "160 Hours/ Month",
      dayHours: "8 hrs/ day - 5 days/ week",
      billing: "Monthly billing or as needed",
      hiringPeried: "Hiring Period: 2-3 days",
      demand: "Availability: Dedicated, On-demand",
    },
    {
      heading: "Part-time Developer",
      hours: "80 Hours/Month",
      dayHours: "4 hours/ day, 5 days/ week",
      billing: "Monthly billing or as needed",
      hiringPeried: "Hiring period: 1-2 days",
      demand: "Availability: As required",
    },
    {
      heading: "Hourly Developer",
      hours: "On-Demand",
      billing: "Monthly billing or as needed",
      hiringPeried: "Hiring period: 40-48 hrs",
      demand: "Availability: Retainer-based support and availability",
    },
  ];

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
