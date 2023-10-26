import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { HelpWrapper, Card } from './style'
import Container from '../../UiComponent/Container'

const Index = () => {
  const helpingCard = [
    {
      img: '/custom-software.svg',
      title: 'Develop Custom Software Solutions',
      caption: 'We build custom software solutions for sellers, retailers, 3PLs, and agencies.',
    },
    {
      img: '/automate.svg',
      title: 'Automate Manual Processes ',
      caption: 'No more wasting time on non-value-added tasks, only flawless processes and results.',
    },
    {
      img: '/marketplace-data.svg',
      title: `Extract ${'&'} Integrate   Marketplace Data`,
      caption: 'Trace, analyze, and integrate competitor data, high/low-selling products, and market trends.',
    },
  ]
  return (
    <HelpWrapper>
      <Container>
        <h2 className="text-h2 color-primary">What Can You  Help Me With?</h2>
        <Row className="add-top-space">
          {helpingCard.map((card, index) => {
            const { title, img,caption } = card
            return (
              <Col lg={4} md={6} sm={12} key={index}>
                <Card>
                  <img src={img} alt="no-svg" />
                  <div className="title-box">
                  <h3 className="color-primary text-h4">{title}</h3>
                  <p>{caption}</p>
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </HelpWrapper>
  )
}
export default Index
