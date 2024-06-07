import React from "react";
import { navigate } from 'gatsby'

import Button from "../../UiComponent/Button";
import { dedicatedTiles } from "../../../constants";
import Container from "../../UiComponent/Container";

import DedicatedMobileWrapper from "./style";

const Index = (props) => {
  const { heading, desc, isList, btnText, className } = props;
  return (
    <DedicatedMobileWrapper className={className}>
      <Container>
        <div className="dedicated-heading">
          <h2 className="text-h1">{heading}</h2>
          <h3 className="text-h3">{desc}</h3>
        </div>
        {isList && (
          <div className="dedicated-list">
            {dedicatedTiles.map((value, i) => (
              <h4 className="list-heading" key={i}>
                {value}
              </h4>
            ))}
          </div>
        )}
        <div className="d-flex justify-content-center">
          <Button onClick={() => navigate('/contact')} text={btnText} className="secondary-btn" />
        </div>
      </Container>
    </DedicatedMobileWrapper>
  )
};

export default Index;
