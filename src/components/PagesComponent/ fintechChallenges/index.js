import React from 'react'

import Container from '../../UiComponent/Container';

import { FinTechChallengesWrapper } from './style';

import { FinTechChallengesCardsData } from '../../../constants';

const FinTechChallenges = () => {

  return (
    <FinTechChallengesWrapper>
      <Container>
        <h2>We address your fintech challenges with exclusive industry-grade solutions</h2>
        <p>Security breaches, regulatory hurdles, and unmanageable legacy systems can stifle your progress as a fintech innovator. Let’s work together to empower your fintech mission.</p>
        <div className='cards-wrapper'>
          {FinTechChallengesCardsData.map((item, index) => (
            <div key={index} className='card-item'>
              <img src={item.img} title={item.img} alt={item.img} />
              <div className='title-wrapper'>
                <h3>{item.heading}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FinTechChallengesWrapper>
  )
}

export default FinTechChallenges;
