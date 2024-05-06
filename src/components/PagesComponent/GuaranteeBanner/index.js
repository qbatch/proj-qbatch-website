import React from "react";
import { navigate } from 'gatsby'
import { Container } from "react-bootstrap";

import Button from "../../UiComponent/Button";

import InnerBannerWrapper from "./style";

const Index = (props) => {
  const {
    className,
  } = props;

  return (
    <InnerBannerWrapper className={className}>
      <Container>
        <span className="sub-heading">No mistakes! You deserve the best value for your limited investment and time. And we make sure of it.</span>
        <div className="inner-wrapper">
          <h2 className="heading">30-Day MVP Guarantee</h2>
          <p className="paragraph">
            We stand behind you. That's why we offer a 30-day guarantee – we will fix any bugs found in the first month post-launching your MVP app free of charge.
          </p>
        </div>
      </Container>
    </InnerBannerWrapper>
  )
};

export default Index;
