import React from "react";
import { navigate } from 'gatsby'
import { Container } from "react-bootstrap";

import Button from "../../UiComponent/Button";

import GrowingTechWrapper from "./style";

const Index = () => {
  return (
    <GrowingTechWrapper>
      <Container>
        <h2 className="text-h1">Hesitant about growing the tech side of your business?</h2>
        <Button onClick={() => navigate('/contact')} text="Get Unbiased Consultation" className="secondary-btn" />
      </Container>
    </GrowingTechWrapper>
  )
};

export default Index;

