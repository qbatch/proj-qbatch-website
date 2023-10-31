import React from "react";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button"

import ServicesBannerWrapper from "./style";

const Index = () => {
  return (
    <ServicesBannerWrapper>
      <Container>
        <div className="banner-content">
          <h1>
            These companies trusted us.
            <span className="second-h1"> So can you.</span>
          </h1>
          <h2 className="text-h4">
            Every project and partnership has been a journey of faith and commitment. We’ve assisted low-cost and
            sustainable software implementations in multiple domains including HealthTech, EdTech, 3PL Warehousing,
            E-commerce Business Automation, FinTech, Food, Travel, and On-demand applications.
          </h2>
          <h2 className="text-h4">
            We are developers, gratefully playing a part in this massive technology adoption and transformation marathon
            <br /> <b>— with science, passion, and innovation.</b>
          </h2>
          <div className="button-box">
            <Button text="Get in Touch" className="secondary-btn" />
          </div>
        </div>
      </Container>
    </ServicesBannerWrapper>
  )
};

export default Index;
