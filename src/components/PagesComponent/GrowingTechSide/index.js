import React from "react";
import { Container } from "react-bootstrap";

import Button from "../../UiComponent/Button";

import GrowingTechWrapper from "./style";

const Index = () => {
  return (
    <GrowingTechWrapper>
      <Container>
        <h1>Hesitant about growing the tech side of your business?</h1>
        <Button text="Get Unbiased Consultation" className="secondary-btn" />
      </Container>
    </GrowingTechWrapper>
  );
};

export default Index;

