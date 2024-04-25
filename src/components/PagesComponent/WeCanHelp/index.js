import React from "react";
import { navigate } from 'gatsby'

import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container";

import WeCanHelpWrapper from "./style";

const Index = () => {
  return (
    <WeCanHelpWrapper>
      <Container>
        <div className="help-heading">
          <h2 className="text-h3">
            Can’t get the hang of latest tools & technology? We know, deciding &
            making the right investments is difficult.
          </h2>
          <Button text="We Can Help" onClick={() => navigate('/contact')} className="secondary-btn" />
          <span>No, we, won’t charge you.</span>
        </div>
      </Container>
    </WeCanHelpWrapper>
  );
};

export default Index;
