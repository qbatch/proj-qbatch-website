import React from 'react'
import { ImagineRetailExperienceWrapper } from './style'
import Container from '../../UiComponent/Container'
import { ImagineRetailExperienceData } from '../../../constants'

const ImagineRetailExperience = () => {

  return (
    <ImagineRetailExperienceWrapper>
      <Container>
        <h2>Imagine a retail experience that's as exciting for you as it is for your customers.</h2>
        <p>It's time to rebuild your retail business with Qbatch. Forget the cookie-cutter stores of yesterday.  Qbatch is your partner in creating the future of retail, where cutting-edge technology meets real-world expertise to transform your business.</p>
        <div className='cards-wrapper'>
         {ImagineRetailExperienceData.map((item, index) => (
          <div key={index} className='card-item'>
            <img src={item.img} alt={item.img} title={item.img} />
            <div className='card-item-text'>
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          </div>
         ))}
        </div>
      </Container>
    </ImagineRetailExperienceWrapper>
  )
}

export default ImagineRetailExperience
