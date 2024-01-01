import React from "react";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button"

import { ServicesBannerWrapper, H1 } from './style'

const Index = () => {
  return (
    <ServicesBannerWrapper>
      <Container>
        <div className="banner-headings">
          <H1>
            {['The Trust Us. ', 'So Can You '].map((value, i) => (
              <span key={i}>{value}</span>
            ))}
          </H1>
          <p>
            Every project and partnership has been a journey of faith and commitment. We are gratefully playing a part
            in this massive technology adoption and transformation marathon - with science, passion, and innovation
            through sustainable and low-cost software implementations.
          </p>
        </div>
        <div className="banner-button">
          <Button text="Let’s Start Building" className="secondary-btn" />
        </div>
      </Container>
    </ServicesBannerWrapper>
  )
};

export default Index;
