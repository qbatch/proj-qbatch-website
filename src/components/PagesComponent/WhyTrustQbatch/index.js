import React from 'react'
import Container from '../../UiComponent/Container'
import Button from '../../UiComponent/Button'
import { WhyTrustQbatchWrapper } from './style'

const WhyTrustQbatch = () => {
  const WhyTrustQbatchData1 = [
    { text: '- Total Process Transparency' },
    { text: '- Cross-Sector Expertise' },
    { text: "- 100% Founder's Mentality" },
    { text: '- Technology Leadership' },
    { text: '- Spectacular Price-Quality Ratio' }
  ]
  
  const WhyTrustQbatchData2 = [
    { text: '- Pay-as-you-go Model' },
    { text: '- Dependable Engineering Craftsmanship' },
    { text: "- No Biases, Only Neutral Feedback" },
    { text: '- Highly Solution-Oriented Mindset' }
  ]

  return (
    <WhyTrustQbatchWrapper>
      <Container>
        <div className='card-wrapper'>
          <img src="/why-trust-qbatch.svg" alt="Why Trust Qbatch" />
          <div className='card-items-wrapper'>
            <h2>Why trust Qbatch for your business-critical TravelTech project?</h2>
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
            <Button text="Let’s Get Started" />
          </div>
        </div>
      </Container>
    </WhyTrustQbatchWrapper>
  )
}

export default WhyTrustQbatch
