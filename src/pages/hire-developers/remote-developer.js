import React from "react";
import Developer from "../../../static/hiring-senior-devs-qa-engineers.svg";
import ScaleImage from "../../../static/scaling-team-inescapable-hassle.svg";
import GrouthImage from "../../../static/different-timezone-hindering-growth.svg";
import Product from "../../../static/ruining-product-health.svg";
import Container from "../../components/UiComponent/Container";
import { RemoteDeveloperStyleWrapper } from "./style";

const RemoteDeveloper = () => {
  const RemoteDeveloperData = [
    {
      img: <img src={Product} alt="Product" />,
      text: <h2>Talent shortage is ruining your product's health.</h2>,
    },
    {
      img: <img src={ScaleImage} alt="ScaleImage" />,
      text: <h2>Managing and scaling your team is an inescapable hassle.</h2>,
    },
    {
      img: <img src={Developer} alt="Developer" />,
      text: <h2>Hiring senior devs and QA engineers takes forever.</h2>,
    },
    {
      img: <img src={GrouthImage} alt="GrouthImage" />,
      text: (
        <h2>
          Clash of cultures, poor communication, and different timezones are
          hindering your growth.
        </h2>
      ),
    },
  ];

  return (
    <RemoteDeveloperStyleWrapper>
        <Container>
        <div className="content-wrapper">
          <h2>
            We realize onboarding Remote Developers is nothing less than a
            headache.
          </h2>
        </div>
        <div className="card-overlay-wrapper">
          {RemoteDeveloperData.map((item, index) => (
            <div key={index} className="card-item">
              {item.img}
              {item.text}
            </div>
          ))}
        </div>
    </Container>
      </RemoteDeveloperStyleWrapper>
  );
};

export default RemoteDeveloper;
