import React from 'react'
import { PowerfulRetailSolutionsWrapper } from './style'
import Container from '../../UiComponent/Container'


const cardData = [
  {
    imgSrc: '/chart.svg',
    title: 'Data-Driven Forecasting',
    content: [
      {
        subtitle: 'Advanced Analytics',
        description: 'Leverage big data to analyze historical sales data, customer behavior, and market trends to predict product demand accurately.'
      },
      {
        subtitle: 'AI and ML Retail Solutions',
        description: 'We integrate these technologies to continuously learn from new data, improving the accuracy of demand forecasts over time.'
      }
    ]
  },
  {
    imgSrc: '/inventry-icon.svg',
    title: 'Agile Inventory Management',
    content: [
      {
        subtitle: 'Just-in-Time Inventory Management Solutions',
        description: 'Adopt JIT practices to reduce holding costs and minimize excess inventory. Develop efficient inventory software that helps you receive required goods.'
      },
      {
        subtitle: 'Adaptive Supply Chain Solutions',
        description: 'Build supply chain and vendor management software to respond to demand changes and maintain relationships with multiple suppliers for faster product deliveries.'
      }
    ]
  },
  {
    imgSrc: '/customer-icon.svg', 
    title: 'Customer-Centric Strategies',
    content: [
      {
        subtitle: 'Pre-Orders and Waitlists',
        description: 'Use customer data and campaign management tools to create targeted marketing campaigns that drive demand for specific products.'
      },
      {
        subtitle: 'Personalized Marketing',
        description: 'Use customer data and campaign management tools to create targeted marketing campaigns that drive demand for specific products.'
      }
    ]
  },
  {
    imgSrc: '/ecomerce-icon.svg', 
    title: 'All-in-One Commerce Platform Development',
    content: [
      {
        subtitle: 'Advanced Analytics',
        description: 'Integrate all sales channels (online, offline, mobile) on one portal to have a real-time view of inventory and demand and easily reallocate stock to where it’s needed most.'
      }
    ]
  }
];


const PowerfulRetailSolutions = () => {
  return (
    <PowerfulRetailSolutionsWrapper>
      <Container>
        <h2>Let’s navigate the “chicken and egg” dilemma with powerful retail solutions</h2>
        <p>Our retail software developers help retailers combine customer demand generation with efficient inventory management.</p>
        <div className='card-wrapper'>
          {cardData.map((card, index) => (
            <div className='card-item' key={index}>
              <div className='card-title'>
                <img src={card.imgSrc} alt={card.title} />
                <h3>{card.title}</h3>
              </div>
              {card.content.map((item, idx) => (
                <div className='content' key={idx}>
                  <h4>{item.subtitle}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </PowerfulRetailSolutionsWrapper>
  )
}

export default PowerfulRetailSolutions
