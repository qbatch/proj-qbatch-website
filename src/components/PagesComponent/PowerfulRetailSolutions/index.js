import React from 'react'

import Container from '../../UiComponent/Container'

import { PowerfulRetailSolutionsCardData } from '../../../constants'

import { PowerfulRetailSolutionsWrapper } from './style'

const PowerfulRetailSolutions = () => {
  return (
    <PowerfulRetailSolutionsWrapper>
      <Container>
        <h2>Let’s navigate the “chicken and egg” dilemma with powerful retail solutions</h2>
        <p>Our retail software developers help retailers combine customer demand generation with efficient inventory management.</p>
        <div className='card-wrapper'>
          {PowerfulRetailSolutionsCardData.map((card, index) => (
            <div className='card-item' key={index}>
              <div className='card-title'>
                <img src={card.imgSrc} alt={card.title} />
                <h3>{card.title}</h3>
              </div>
              {card.content.map((item, idx) => (
                <div className='content' key={idx}>
                  <h4>{item.subtitle}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </PowerfulRetailSolutionsWrapper>
  )
}

export default PowerfulRetailSolutions
