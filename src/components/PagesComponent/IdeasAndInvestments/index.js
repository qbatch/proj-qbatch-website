import React from "react";
import { Container } from "react-bootstrap";

import Button from "../../UiComponent/Button";

import IdeasWrapper from "./style";

const Index = () => {
  return (
    <IdeasWrapper>
      <Container>
        <h2 className="text-h1 heading">100+ businesses trusted us with their ideas and investments,<br className="d-xl-block d-none" /> will you?</h2>
      </Container>
    </IdeasWrapper>
  );
};

export default Index;

