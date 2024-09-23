import React from 'react'
import { ExploreOurIndustrySpecificRetailPotentialWrapper } from './style'
import Container from '../../UiComponent/Container'
import { ExploreOurIndustrySpecificRetailPotentialData } from '../../../constants'

const ExploreOurIndustrySpecificRetailPotential = () => {

  return (
    <ExploreOurIndustrySpecificRetailPotentialWrapper>
      <Container>
        <h2>Explore Our Industry-Specific Retail Potential</h2>
        <p>Tired of generic solutions? At Qbatch, we understand that one-size-fits-all software doesn't cut it in today's competitive retail landscape..</p>
        <div className='cards-wrapper'>
         {ExploreOurIndustrySpecificRetailPotentialData.map((item, index) => (
          <div key={index} className='card-item'>
            <img src={item.img} alt={item.img} title={item.img} />
            <div className='card-item-text'>
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          </div>
         ))}
        </div>
      </Container>
    </ExploreOurIndustrySpecificRetailPotentialWrapper>
  )
}

export default ExploreOurIndustrySpecificRetailPotential
