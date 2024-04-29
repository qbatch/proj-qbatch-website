import React from 'react'
import Container from '../../UiComponent/Container'
import Button from '../../UiComponent/Button'
import { technicalGuidanceData } from '../../../constants/index'
import { ExploreOurEnterpriseLevelWrapper } from './style'

const ExploreOurEnterpriseLevel = () => {

  return (
    <ExploreOurEnterpriseLevelWrapper>
      <Container>
        <div className='title-wrapper'>
          <h1>More Than Just “Technical Guidance” Explore Our Enterprise-level <span>CTO Services</span></h1>
        </div>
        <div className='card-overlay-wrapper'>
          {technicalGuidanceData.map((item, index) => (
            <div key={index} className='card-item-wrapper'>
              <img src={item.img} />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <Button text="Let’s Get Started" />
      </Container>
    </ExploreOurEnterpriseLevelWrapper>
  )
}

export default ExploreOurEnterpriseLevel
