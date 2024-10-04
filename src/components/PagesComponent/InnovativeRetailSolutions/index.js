import React from 'react'

import Container from '../../UiComponent/Container'

import { InnovativeRetailSolutionsWrapper } from './style'

const InnovativeRetailSolutions = ({InnovativeRetailSolutionsData, heading}) => {
  return (
    <InnovativeRetailSolutionsWrapper>
      <Container>
        <div className='innovative-retail'>
          <h2>{heading || "That's just the tip of the iceberg. We offer a toolbox brimming with innovative Retail solutions"}</h2>
          <div className='cards-wrapper'>
            {InnovativeRetailSolutionsData.map((item, index) => (
              <div key={index} className='card-item'>
                <img src={item.img} alt={item.img} title={item.img} />
                <div className='card-item-text'>
                  <h3>{item.heading}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </InnovativeRetailSolutionsWrapper>
  )
}

export default InnovativeRetailSolutions
