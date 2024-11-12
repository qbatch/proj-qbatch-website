import React from 'react'

import Container from '../../UiComponent/Container'

import { FinTechAppDevelopmentServicesWrapper } from './style'

import { FinTechAppDevelopmentServicesCardData } from '../../../constants'

const FinTechAppDevelopmentServices = () => {

  return (
    <FinTechAppDevelopmentServicesWrapper>
      <Container>
        <h2>Explore FinTech App Development Services </h2>
        <p>Qbatch is a leading FinTech software development company dedicated to crafting resilient, scalable, and high-performing solutions. We empower you to disrupt the financial landscape with our comprehensive suite of services:</p>
        <div className='cards-wrapper'>
          {FinTechAppDevelopmentServicesCardData.map((item, index) => (
            <div key={index} className='card-item'>
              <div className='title'>
                <img src={item.img} title={item.img} alt={item.img} />
                <h3>{item.heading}</h3>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </FinTechAppDevelopmentServicesWrapper>
  )
}

export default FinTechAppDevelopmentServices
