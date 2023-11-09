import React from "react";

import Button from "../../UiComponent/Button";
import { dedicatedTiles } from "../../../constants";
import Container from "../../UiComponent/Container";

import DedicatedMobileWrapper from "./style";

const Index = () => {
  return (
    <DedicatedMobileWrapper>
      <Container>
        <div className="dedicated-heading">
          <h2 className="text-h1">Hire Dedicated Mobile App Developers</h2>
          <h3 className="text-h2">For building stunning mobile apps</h3>
        </div>
        <div className="dedicated-list">
          {dedicatedTiles.map((value, i) => (
            <h4 className="list-heading" key={i}>
              {value}
            </h4>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <Button text="Get Your Devs" className="secondary-btn" />
        </div>
      </Container>
    </DedicatedMobileWrapper>
  );
};

export default Index;
