import React from "react";
import Container from "../../../components/UiComponent/Container";
import { RemoteDeveloperData } from '../../../constants/index'
import { RemoteDeveloperStyleWrapper } from "./style";

const RemoteDeveloper = () => {

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
