import React from 'react'
import Container from '../../UiComponent/Container'
import { HealthCareWrapper } from './style'
import { cardData } from '../../../constants'

const HealthCare = () => {

  return (
    <HealthCareWrapper>
        <Container>
        <h2>Qbatch places people at the heart of healthcare.</h2>
        <p>We leverage proven technologies (AI/ML, Blockchain) and digital adoption strategies to empower providers and improve patient care experiences.</p>
        <div className='card-wrapper'>
          {cardData.map((item, index) => (
            <div key={index} className='card-item'>
              <img src={item.image} alt={item.alt} />
              <p>{item.disc}</p>
            </div>
          ))}
        </div>
    </Container>
      </HealthCareWrapper>
  )
}

export default HealthCare
