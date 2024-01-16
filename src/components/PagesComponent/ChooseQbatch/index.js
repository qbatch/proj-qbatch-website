import React from 'react'
import ChoseQbatchWrapper from './style'
import Container from '../../UiComponent/Container'
import Divider from '../../UiComponent/Divider'

const Index = () => {
  const dataDrivenData = [
    {
      img: '/price-quality.svg',
      title: 'Spectacular Price-Quality Ratio',
    },
    {
      img: '/total-process-transparency.svg',
      title: 'Total Process Transparency',
    },
    {
      img: '/cross-sector.svg',
      title: 'Cross-Sector Expertise',
    },
    {
      img: '/founders-mentality.svg',
      title: '100% Founders Mentality',
    },
    {
      img: '/dependable-engineering.svg',
      title: 'Dependable Engineering Craftsmanship',
    },
    {
      img: '/neutral-software-analysis.svg',
      title: 'Neutral Software Analysis',
    },
    {
      img: '/technical-excellence.svg',
      title: 'Technical Excellence',
    },

    {
      img: '/efficient-talent-pool-scraping.svg',
      title: 'Efficient Talent Pool',
    },

    {
      img: '/data-ownership-scraping.svg',
      title: 'Data Ownership and Control',
    },
    {
      img: '/optimal.svg',
      title: 'Optimal R&D',
    },
    {
      img: '/proactive-communication.svg',
      title: 'Proactive Communication',
    },
    {
      img: '/flexible-business-models.svg',
      title: 'Flexible Business Models',
    },
    {
      img: '/great-value-for-money.svg',
      title: 'Great Value for Money',
    },
  ]
  return (
    <>
      <ChoseQbatchWrapper>
        <Container>
          <div className="text-center heading-box">
            <h2 className="color-primary">Why Choose Qbatch as Your Growth Partner?</h2>
            <p>
              Source, extract, package, and deliver the most business-critical goals with our trusted website scraping
              tools: 
            </p>
          </div>

          <div className="images-box">
            {dataDrivenData.map((list) => {
              return (
                <div className="d-flex flex-column flex-wrap gap-3 align-items-center mb-5">
                  <img src={list.img} alt={list.title} />
                  <h6>{list.title}</h6>
                </div>
              )
            })}
          </div>
        </Container>
      </ChoseQbatchWrapper>
      <Divider />
    </>
  )
}
export default Index
