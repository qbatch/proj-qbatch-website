import React from 'react'
import { navigate } from 'gatsby'

import Container from '../../UiComponent/Container'
import Button from '../../UiComponent/Button'

import { ImagineRetailExperienceWrapper } from './style'

const ImagineRetailExperience = ({ ImagineRetailExperienceData, travelApp, heading, text, button }) => {

  return (
    <ImagineRetailExperienceWrapper className={travelApp ? 'travel-app-wrapper' : ''}>
      <Container>
        <h2>{heading || "Imagine a retail experience that's as exciting for you as it is for your customers."}</h2>
        {text && <p className='p-text'>{text || "It's time to rebuild your retail business with Qbatch. Forget the cookie-cutter stores of yesterday.  Qbatch is your partner in creating the future of retail, where cutting-edge technology meets real-world expertise to transform your business."}</p>}
        <div className='cards-wrapper'>
          {ImagineRetailExperienceData.map((item, index) => (
            <div key={index} className='card-item'>
              <img src={item.img} alt={item.img} title={item.img} width={50} height={50} />
              <div className='card-item-text'>
                <h3 className='text-h4'>{item.heading}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        {button ? <Button text="Build Your SaaS Solution" onClick={() => navigate("/contact")} /> : null}
      </Container>
    </ImagineRetailExperienceWrapper>
  )
}

export default ImagineRetailExperience
