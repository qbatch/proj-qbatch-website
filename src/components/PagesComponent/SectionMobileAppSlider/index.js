import React from 'react'
import Container from '../../UiComponent/Container'
import { developmentServicesData } from '../../../constants'
import { SectionMobileAppWrapper } from './style'

const SectionMobileApp = () => {
  return (
    <SectionMobileAppWrapper>
      <Container>
      <h2>Full Suite of Custom Mobile App Development Services</h2>
      <p>ExploreTime-tested Web Application Development tools and technologies to build a cross-platform and secure application:</p>
      <ul>
        {developmentServicesData.map(( item, index )=> (
          <li>
          <img src={item.image} title={item.image} alt={item.image} />
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </li>
        ))}
      </ul>
      </Container>
    </SectionMobileAppWrapper>
  )
}

export default SectionMobileApp
