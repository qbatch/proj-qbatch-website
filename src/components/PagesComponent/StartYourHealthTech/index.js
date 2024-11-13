import React from 'react';
import { navigate } from 'gatsby';

import Button from '../../UiComponent/Button';
import Container from '../../UiComponent/Container';

import { StartYourHealthTechWrapper } from './style';

const StartYourHealthTech = ({heading, className, text, StartYourHealthTechData, btnText }) => {

  return (
    <StartYourHealthTechWrapper className={className}>
        <Container>
          <h2>{heading || 'Start Your HealthTech Journey Today!'}</h2>
         {text && <p>{text}</p>}
          <div className="process-card-overlay">
            {StartYourHealthTechData.map((item, index) => (
              <div key={index} className="process-card-wrapper">
                <p className="num-icon">{item.number}</p>
                {item.img ? <img src={item.img} alt={item.img} loading="lazy" /> : null}
                <h3>{item.heading}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
          <Button onClick={() => navigate('/contact')}  text={btnText || "Request Free Proposal"} />
    </StartYourHealthTechWrapper>
  )
}

export default StartYourHealthTech
