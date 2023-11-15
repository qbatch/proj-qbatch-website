import React from "react";
import { Container } from "react-bootstrap";

import Button from "../../UiComponent/Button";
import  MarketplaceSellersWrapper from "./style";

const Index = ({heading, paragraph, btnText, wrapperClass}) => {
  return (
    < MarketplaceSellersWrapper className={wrapperClass}>
      <Container>
        <h2 className="text-h2 heading">{heading}</h2>
        <p className="paragraph">{paragraph}</p>
        <Button text={btnText} className="secondary-btn" />
      </Container>
    </ MarketplaceSellersWrapper>
  );
};

export default Index;

