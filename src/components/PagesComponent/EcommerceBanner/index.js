import React from 'react';
import { ECommerceBannerWrapper, H1 } from './style';
import Button from "../../UiComponent/Button";

import Container from "../../UiComponent/Container";

const index = () => {
  return (
    <ECommerceBannerWrapper>
      <Container>
        <div className='title-portion'>
          <p className='sub-heading'>Custom E-Commerce Software Solutions</p>
          <H1><span className="bigger">BIGGER</span>Returns Required </H1>
        </div>
      </Container>
      <img src='/bold-text.svg' alt='bold-text' className='banner-img' />
      <Container>
        <div className='title-portion'>
          <span className='overlay-text'>Transformation</span>
          <p className='paragraph'>Stuck on the old traditional E-commerce ways? Stop spending time on slow, repetitive tasks and switch to data-driven processes with our custom solutions for Sellers, aggregators, and brand owners. </p>

        <div className='button-wrapper'>
          <Button text="Kickstart Your Transformation Journey" className="secondary-btn" />
        </div>
        </div>

      </Container>

    </ECommerceBannerWrapper>
  );
};

export default index;