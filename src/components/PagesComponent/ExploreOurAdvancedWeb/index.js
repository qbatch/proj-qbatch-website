import React from 'react'
import { AdvancedWebExploreWrapper } from './style'
import Container from '../../UiComponent/Container'
import { webExpertiseData } from '../../../constants'

const AdvancedWebExplore = () => {
  return (
    <AdvancedWebExploreWrapper>
      <Container>
        <div className='title-overlay-wrapper'>
          <h2>Explore Our Advanced Web Application Expertise</h2>
          <p>From legacy system modernization to developing high-performing microservices, team Qbatch has delivered 300+ custom solutions for several businesses globally. </p>
        </div>
        <ul>
         {webExpertiseData.map((item, index) => (
          <li key={index}>
            <img src={item.image} />
            <p>{item.title}</p>
          </li>
         ))}
        </ul>
      </Container>
    </AdvancedWebExploreWrapper>
  )
}

export default AdvancedWebExplore
