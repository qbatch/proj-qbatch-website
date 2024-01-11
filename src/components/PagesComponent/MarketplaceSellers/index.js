import React from "react";
import { navigate } from 'gatsby'
import { Container } from "react-bootstrap";

import Button from "../../UiComponent/Button";
import  MarketplaceSellersWrapper from "./style";

const Index = ({ heading, paragraph, btnText, wrapperClass, backgroundImage }) => {
  return (
    <MarketplaceSellersWrapper className={wrapperClass} backgroundImage={backgroundImage}>
      <Container>
        <h2 className="text-h2 heading">{heading}</h2>
        <p className="paragraph">{paragraph}</p>
        <Button onClick={() => navigate('/contact')} text={btnText} className="secondary-btn" />
      </Container>
    </MarketplaceSellersWrapper>
  )
}

export default Index;

