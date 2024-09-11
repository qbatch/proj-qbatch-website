import React from 'react'
import { CollaborationModelsWrapper } from './style'
import Container from '../../UiComponent/Container'

const CollaborationModels = () => {

  const CollaborationModelsData = [
    {
      image: '/time-&-matrial.svg',
      heading: 'Time and Material',
      disc: 'We empower you to choose our Time and Material model where you only pay for the time and quality resources spent on the project.'
    },
    {
      image: '/fixed-scop.png',
      heading: 'Fixed Scope Product Development',
      disc: 'Pull down barriers like compromised quality and slow project delivery with our Fixed Scope Product Development model under a fixed budget.'
    },
    {
      image: '/hire-developer-icon.svg',
      heading: 'Hire Dedicated Development Team ',
      disc: 'Leverage your global footprint in the rising techno-verse with Qbatch’s self-driven, smart, and skilled team of software developers.'
    },
  ]

  return (
    <CollaborationModelsWrapper>
      <Container>
        <h2>Collaboration Models</h2>
        <h2>For Everlasting Partnerships</h2>
        <p>Our unique "Happy Paths" approach is a predictive and transparent way to implement your idea. Choose what suits you best</p>
        <div className='cards-wrapper'>
          {CollaborationModelsData.map((item, index) => (
            <div key={index} className='cards-item'>
            <img src={item.image} />
            <div className='card-data'>
              <h3>{item.heading}</h3>
              <p>{item.disc}</p>
            </div>
          </div>
          ))}
        </div>
      </Container>
    </CollaborationModelsWrapper>
  )
}

export default CollaborationModels
