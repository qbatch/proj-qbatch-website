import React from 'react'
import { navigate } from 'gatsby'
import Container from '../../UiComponent/Container'
import Button from '../../UiComponent/Button'
import { WhyTrustQbatchWrapper } from './style'
import { WhyTrustQbatchData1, WhyTrustQbatchData2 } from '../../../constants'

const WhyTrustQbatch = ({ heading }) => {
  return (
    <WhyTrustQbatchWrapper>
      <Container>
        <div className='card-wrapper'>
          <img src="/why-trust-qbatch.svg" alt="Why Trust Qbatch" width="auto" height="auto" />
          <div className='card-items-wrapper'>
            <h2>{heading || 'Why trust Qbatch for your business-critical TravelTech project?'}</h2>
            <div className='card-item'>
              <ul>
                {WhyTrustQbatchData1.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
              <ul>
                {WhyTrustQbatchData2.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
            </div>
            <Button onClick={() => navigate('/contact')}  text="Let’s Get Started" />
          </div>
        </div>
      </Container>
    </WhyTrustQbatchWrapper>
  )
}

export default WhyTrustQbatch
