import React from 'react';

import Container from '../../UiComponent/Container';
import Button from "../../UiComponent/Button";

import GuaranteeBannerWrapper from './style';

const GuaranteeBanner = () => {
  return (
    <GuaranteeBannerWrapper>
      <Container>
        <div className='inner-wrapper'>
          <div className='subtitle text-h4'>
            <span>No mistakes! You deserve the best value for your limited investment and time. And we make sure of it.</span>
          </div>
          <div className='title'>
            <h2 className='text-h2 heading'>30-Day MVP Guarantee</h2>
          </div>
          <div className='paragraph text-h4'>
            <span>We stand behind you. That's why we offer a 30-day guarantee – we will fix any bugs found in the first month post-launching your MVP app free of charge. </span>
          </div>
          <div className='d-flex justify-content-center'>
          <Button text="Launch Your MVP" onClick={() => navigate('/contact')} className="secondary-btn" />
          </div>
        </div>
      </Container>
    </GuaranteeBannerWrapper>
  );
};

export default GuaranteeBanner;
