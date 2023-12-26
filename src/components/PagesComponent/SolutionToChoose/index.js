import React from "react";
import { navigate } from 'gatsby'
import { Container } from "react-bootstrap";

import Button from "../../UiComponent/Button";

import SolutionToChooseWrapper from "./style";

const Index = () => {
  return (
    <SolutionToChooseWrapper>
      <Container>
        <div className="solution-heading">
          <h2 className="text-h1">Not Sure Which Solution to Choose?</h2>
          <Button onClick={() => navigate('/contact')} text="Yes, All Set" className="secondary-btn" />
        </div>
      </Container>
    </SolutionToChooseWrapper>
  )
};

export default Index;
