import React from "react";
import { Container } from "react-bootstrap";

import CrewWrapper from "./style";

const Index = () => {
  return (
    <CrewWrapper>
      <Container>
        <div className="crew-heading">
          <h2 className="text-h1">
            We are your <span>“Crew”,</span> not <span>Vendors</span>
          </h2>
        </div>
      </Container>
    </CrewWrapper>
  );
};

export default Index;
