import React from 'react';
import { navigate } from 'gatsby'
import { EcommerceBannerWrapper, H1 } from './style';
import Button from "../../UiComponent/Button";

import Container from "../../UiComponent/Container";

const index = () => {
  return (
    <EcommerceBannerWrapper>
      <Container>
        <div className="title-portion">
          <h1 className="sub-heading">Custom E-Commerce Software Solutions</h1>
          <H1>
            <span className="bigger">Bigger</span> Returns Required{' '}
          </H1>
        </div>
      </Container>
      <img src="/bold-text.svg" alt="bold-text" className="banner-img" />
      <Container>
        <div className="title-portion">
          <span className="overlay-text">Transformation</span>
          <p className="paragraph">
            Stuck on the old traditional E-commerce ways? Stop spending time on slow, repetitive tasks and switch to
            data-driven processes with our custom solutions for Sellers, aggregators, and brand owners. 
          </p>

          <div className="button-wrapper">
            <Button
              onClick={() => navigate('/contact')}
              text="Kickstart Your Transformation Journey"
              className="secondary-btn"
            />
          </div>
        </div>
      </Container>
    </EcommerceBannerWrapper>
  )
};

export default index;