import React from 'react'
import Container from '../../UiComponent/Container'
import { YourWellBeingMattersQbatchWrapper } from './style'
import { MattersQbatchCardsData } from '../../../constants'

const YourWellBeingMattersQbatch = () => {

  return (
    <YourWellBeingMattersQbatchWrapper>
      <Container>
        <h2>Your Well-Being Matters at Qbatch</h2>
        <div className='cards-overlay-wrapper'>
          {MattersQbatchCardsData.map((item, index) => (
            <div key={index} className='card-item'>
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </YourWellBeingMattersQbatchWrapper>
  )
}

export default YourWellBeingMattersQbatch
