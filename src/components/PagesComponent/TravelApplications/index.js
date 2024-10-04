import React from 'react'

import Container from '../../UiComponent/Container'

import { dataTravelApplications } from '../../../constants'

import { TravelApplicationsWrapper } from './style'

const TravelApplications = () => {
 
  return (
    <TravelApplicationsWrapper>
      <Container>
        <h2>Travel applications may not pack your luggage, but they can carry rest of your burdens: </h2>
        <div className='card-item'>
          {dataTravelApplications.map((item, index) => (
            <div key={index} className='cards'>
              <img src={item.img} />
              <div className='card-content'>
                <h3>{item.heading}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </TravelApplicationsWrapper>
  )
}

export default TravelApplications
