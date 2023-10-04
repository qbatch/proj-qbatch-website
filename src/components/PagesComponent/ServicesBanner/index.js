import React from "react";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button"

import ServicesBannerWrapper from "./style";

const Index = () => {
  return (
    <ServicesBannerWrapper>
      <Container>
        <div className="banner-content">
          <h2>These companies trusted us. So can you.</h2>
          <h4>
            Every project and partnership has been a journey of faith and
            commitment. We’ve assisted low-cost and sustainable software
            implementations in multiple domains including HealthTech, EdTech,
            3PL Warehousing, E-commerce Business Automation, FinTech, Food,
            Travel, and On-demand applications.
          </h4>
          <h4>
            We are developers, gratefully playing a part in this massive
            technology adoption and transformation marathon
            <br /> <b>— with science, passion, and innovation.</b>
          </h4>
          <div className="mt-5">
           <Button text="Get in Touch" className="secondary-btn" />
          </div>
        </div>
      </Container>
    </ServicesBannerWrapper>
  );
};

export default Index;
