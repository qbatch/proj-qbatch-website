import React from "react";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";

import BannerWrapper from "./style"

const Index = () => {
  return (
    <BannerWrapper>
      <Container>
        <div className="banner-headings">
          {["Team Spirit", "Great Work", "lasting Partnerships"].map((value, i) => (
            <h2 key={i}>{value}</h2>
          ))}
          <h4>As a close-knit team, we work hard to create products that facilitate millions of people every day. 
            Uncompromised quality is not our thing, and for this, we heavily focus on building high-potential teams 
            that believe in deriving real and lasting human experiences.</h4>
        </div>
        <div className="banner-button">
          <Button text="Let’s Start Building" />
        </div>
      </Container>
    </BannerWrapper>
  )
}

export default Index;