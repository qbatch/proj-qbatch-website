import React from 'react'
import { BuildRetailOpportunitiesWrapper } from './style'
import Container from '../../UiComponent/Container'

const BuildRetailOpportunities = () => {
  return (
    <BuildRetailOpportunitiesWrapper>
      <Container>
        <div className='build-retail-wrapper'>
          <h2>Break the siloes, build retail opportunities</h2>
          <div className='right-section-wrapper'>
            <p>Retail, instead of being a powerful touchpoint, becomes a forgotten end in the product lifecycle.</p>
            <div className='right-section-item'><img src='/rgba-arrow.svg' alt="rgba-arrow" title='rgba-arrow' /><h3>What do customers truly want?</h3></div>
            <div className='right-section-item'><img src='/rgba-arrow.svg' alt="rgba-arrow" title='rgba-arrow' /><h3>What influences their in-store behavior?</h3></div>
            <div className='right-section-item'><img src='/rgba-arrow.svg' alt="rgba-arrow" title='rgba-arrow' /><h3>How can packaging and point-of-sale displays be more effective?</h3></div>
          </div>
        </div>
      </Container>
    </BuildRetailOpportunitiesWrapper>
  )
}

export default BuildRetailOpportunities
