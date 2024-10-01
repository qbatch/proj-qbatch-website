import React from 'react'
import { HospitalityAndTravelBusinessesWrapper } from './style'
import Container from '../../UiComponent/Container'

const HospitalityAndTravelBusinesses = () => {

const hospitalityAndTravel = [
  {
    text:'Hotels and resorts',
  },
  {
    text:'Airlines and aviation',
  },
  {
    text:'Travel agencies',
  },
  {
    text:'Cruise lines',
  },
  {
    text:'Restaurants and food services',
  },
  {
    text:'Event management',
  },
  {
    text:'Travelers',
  },
  {
    text:'Airlines, airports, hotels, car rentals, and railways',
  },
  {
    text:'Various hospitality providers',
  },
]

  return (
    <HospitalityAndTravelBusinessesWrapper>
      <Container>
        <section>
          <div className='item'>
            <h2>Hospitality and travel businesses we work with</h2>
            <p>We assist a wide range of hospitality and travel businesses, including:</p>
            <ul>
             {hospitalityAndTravel.map((item, index) => (
              <li key={index}>{item.text}</li>
             ))}
            </ul>
          </div>
          <div className='item item-2'>
            <img src='/hospitality-section.svg' />
          </div>
        </section>
      </Container>
    </HospitalityAndTravelBusinessesWrapper>
  )
}

export default HospitalityAndTravelBusinesses
