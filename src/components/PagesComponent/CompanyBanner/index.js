import React from "react";
import Container from "../../UiComponent/Container";
import BannerWrapper from "./style"
import Button from "../../UiComponent/Button";
const Index = () => {
  return (
    <BannerWrapper>
      <Container>
        <div className="banner-headings">
          {["Team Spirit", "Great Work", "lasting Partnerships"].map((value, i) => (
            <h2 className="banner-heading" key={i}>{value}</h2>
          ))}
        </div>
        <div className="banner-subheading">
          <h3>We bring your business ideas to the masses using modern technology and top-grade expertise</h3>
        </div>
        <div className="banner-paragraph">
          <h4>As a close-knit team, we work hard and share the passion for creating products that facilitate millions of people every day. Uncompromised work quality is not our thing, and for this, we heavily focus on building high-potential teams that believe in deriving real and lasting human experiences.  </h4>
        </div>
        <div className="banner-button">
          <Button text="Let’s Start Building" />
        </div>
      </Container>
    </BannerWrapper>
  )
}

export default Index;