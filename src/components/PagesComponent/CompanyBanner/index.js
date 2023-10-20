import React from "react";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";

import {BannerWrapper,H1} from "./style"

const Index = () => (
    <BannerWrapper>
      <Container>
        <div className="banner-headings">
          <H1>
          {["Team Spirit ", "Great Work ", "lasting Partnerships"].map((value, i) => <span className={value.includes('lasting') ? "color-change" : ""} key={i}>{value}</span> )}
          </H1>
          <p>
            As a close-knit team, we strive to create products that facilitate millions of people every
            day. We heavily focus on building high-potential teams that believe in deriving real and
            lasting human experiences.
            </p>
        </div>
        <div className="banner-button">
          <Button text="Let’s Start Building" className="secondary-btn" />
        </div>
      </Container>
    </BannerWrapper>
)

export default Index;
