import React from 'react'
import { RetailersFaceTheChallengeWrapper } from './style'
import Container from '../../UiComponent/Container'

const RetailersFaceTheChallenge = () => {
  return (
      <RetailersFaceTheChallengeWrapper>
    <Container>
      <div className='item-overlay-wrapper'>
        <div className='item-wrapper'>
          <h2>Chicken or egg? Retailers face the challenge of determining which comes first.</h2>
          <p>Let’s imagine two situations:</p>
        </div>
        <div className='item-wrapper-2'>
          <div className='card-item'>
            <h3>Situation 1: Customer demand (🥚) vs. inventory supply (🐔)</h3>
            <p>Imagine a new retail store with unique products that need customers to justify stocking shelves, yet customers will only arrive with attractive products on display.</p>
            <p>This leaves new brands in a bind—they require customers to stock their products, yet need stocked shelves to attract customers.</p>
          </div>
          <div className='card-item'>
            <h3>Situation 2: Online marketplace (🥚) and unknown vendors (🐔)</h3>
            <p>Similarly, online marketplace owners need established sellers to attract customers looking for trusted brands. However, sellers hesitate to join a platform with a small customer base, fearing a lack of sales.</p>
            <p>The roadblock? your platform needs sellers to entice customers, but sellers need customers to justify joining the platform.</p>
          </div>
        </div>
        </div>
    </Container>
      </RetailersFaceTheChallengeWrapper>

  )
}

export default RetailersFaceTheChallenge
