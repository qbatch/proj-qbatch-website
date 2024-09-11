import React from 'react'
import { SuccessStoriesHealthcarePortfolioWrapper } from './style'
import Button from '../../UiComponent/Button'
import Container from '../../UiComponent/Container'

const SuccessStoriesHealthcarePortfolio = () => {

  return (
    <SuccessStoriesHealthcarePortfolioWrapper>
      <Container>
        <div className='header'>
          <h2>Success Stories From Qbatch’s Healthcare Portfolio</h2>
          <Button text="Explore More" />
        </div>
        <div className='cards-wrapper'>
          <div className='card-item'>
            <img className="banner-image" src="/sale-support-banner.svg" />
            <div className='card-header'>
              <img src="/sale-support-logo.svg" />
              <p className='text'>Supply Chain</p>
            </div>
            <p>Sales.support Launches 1000+ Thriving Amazon Businesses Leveraging Qbatch’s Software Solutions</p>
          </div>
          <div className='card-item'>
            <img className="banner-image" src="/Saleha.svg" />
            <div className='card-header'>
              <img src="/Saleha_Logo.svg" />
              <p className='text'>Fin-Tech</p>
            </div>
            <p>From Fragmented Finance to Streamlined Solutions: Sahelha & Qbatch Revolutionize Debt Crowdfunding</p>
          </div>
        </div>
        <Button className="mobile-base-button" text="Explore More" />
      </Container>
    </SuccessStoriesHealthcarePortfolioWrapper>
  )
}

export default SuccessStoriesHealthcarePortfolio
