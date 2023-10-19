import React from "react";
import { Container } from "react-bootstrap";

import Button from "../../UiComponent/Button";
import  MarketplaceSellersWrapper from "./style";

const Index = () => {
  return (
    < MarketplaceSellersWrapper>
      <Container>
        <h2 className="text-h2 heading">Saving Marketplace Sellers from doing too much work.</h2>
        <p className="paragraph">Shrug off non-value-adding, repetitive tasks through modern technology and genius domain savvies. </p>
        <Button text="Take my worries away!" className="secondary-btn" />
      </Container>
    </ MarketplaceSellersWrapper>
  );
};

export default Index;

