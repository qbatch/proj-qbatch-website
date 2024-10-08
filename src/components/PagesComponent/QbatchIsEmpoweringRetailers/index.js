import React from 'react'
import { navigate } from 'gatsby'
import Button from '../../UiComponent/Button'
import Container from '../../UiComponent/Container'
import { QbatchIsEmpoweringRetailersWrapper } from './style'

const QbatchIsEmpoweringRetailers = () => {

  const QbatchIsEmpoweringRetailersData = [
    {
      img: '/deep-customer-understanding.svg',
      text: 'Deep customer understanding.'
    },
    {
      img: '/ability-to-translate.svg',
      text: 'Ability to translate insights into action'
    },
    {
      img: '/the-product-journey.svg',
      text: 'A stronger voice in the product journey.'
    },
    {
      img: '/data-driven-decision-making.svg',
      text: 'Data-driven decision making.'
    },
  ]

  return (
    <QbatchIsEmpoweringRetailersWrapper>
      <Container>
      <h2>Qbatch is empowering retailers by ensuring:</h2>
      <div className='cards-wrapper'>
      {QbatchIsEmpoweringRetailersData.map((item, index) => (
        <div key={index} className='card-item'>
          <img src={item.img} alt={item.img} title={item.img} />
          <h3>{item.text}</h3>
        </div>
      ))}
      </div>
      <Button text="Request Free Proposal"  onClick={() => navigate('/contact')} />
      </Container>
    </QbatchIsEmpoweringRetailersWrapper>
  )
}

export default QbatchIsEmpoweringRetailers
