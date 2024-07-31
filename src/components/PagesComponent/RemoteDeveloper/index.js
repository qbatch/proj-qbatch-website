import React, { lazy } from "react";

import { RemoteDeveloperData } from '../../../constants/index'

import { RemoteDeveloperStyleWrapper } from "./style";

const Container = lazy(() => import("../../../components/UiComponent/Container"));

const RemoteDeveloper = () => {

  return (
    <RemoteDeveloperStyleWrapper>
        <Container>
        <div className="content-wrapper">
          <h2>
            Onboarding Remote Developers is nothing less than a
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
