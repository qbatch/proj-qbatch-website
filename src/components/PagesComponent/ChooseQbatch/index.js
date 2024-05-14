import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Container from '../../UiComponent/Container'
import Divider from '../../UiComponent/Divider'

import ChoseQbatchWrapper from './style'

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
      title: 'Cross-Sector \n Expertise',
    },
    {
      img: '/founders-mentality.svg',
      title: '100% Founders \n Mentality',
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
      img: '/technical-excellence-scraping.svg',
      title: 'Technical \n Excellence',
    },

    {
      img: '/efficient-talent-pool-scraping.svg',
      title: 'Efficient Talent \n Pool',
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
      img: '/proactive-communication-scraping.svg',
      title: 'Proactive Communication',
    },
    {
      img: '/flexible-business-models.svg',
      title: 'Flexible Business \n Models',
    },
    {
      img: '/great-value-for-money.svg',
      title: 'Great Value \n for Money',
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
          <Row className="images-box">
            {dataDrivenData.map((list) => {
              return (
                <Col md={2} sm={4} xs={6}>
                  <div className="d-flex flex-column flex-wrap gap-3 align-items-center mb-4">
                    <img src={list.img} alt={list.title} />
                    <p>{list.title}</p>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </ChoseQbatchWrapper>
      <Divider />
    </>
  )
}
export default Index
