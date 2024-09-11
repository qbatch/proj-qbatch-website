import React from 'react'
import { InstitutionsBenefitingWrapper } from './style'
import Container from '../../UiComponent/Container'
import { listItem1, listItem2 } from '../../../constants'

const InstitutionsBenefiting = () => {

  return (
    <InstitutionsBenefitingWrapper>
      <Container>
    <h2>Institutions Benefiting from Custom Healthcare Software Development</h2>
    <p>Custom healthcare software development services benefit a wide range of institutions within the healthcare industry by addressing their unique challenges and optimizing workflows. These institutions include:</p>
    <div className='section'>
      <div className='item'>
        <ul className='child'>
        {listItem1.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
        </ul>
        <ul className='child'>
        {listItem2.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
        </ul>
      </div>
      <div className='item item-2'>
        <img src="/institutions-benefiting.svg" alt="institutions-benefiting" />
      </div>
    </div>
      </Container>
    </InstitutionsBenefitingWrapper>
  )
}

export default InstitutionsBenefiting
