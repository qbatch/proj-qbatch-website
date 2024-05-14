import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AssistantWrapper from './style'
import Container from '../../UiComponent/Container'
import Divider from '../../UiComponent/Divider'
import Button from '../../UiComponent/Button'

const Index = () => {
  const dataDrivenData = [
    {
      img: '/transformdata.svg',
      title: 'Transform data into any structure or format',
      description:
        'SmartScrapers helps you to scrape data and transform it into any structure or format you like - TXT, PDF, Image, JSON, FTP, API and CSV ensuring ease of convenience to use it for day to day business activities. ',
      to: '/',
    },
    {
      img: '/automateddata .svg',
      title: 'Automated data delivery to any location',
      description:
        'Without compromising with the security and confidentiality of the information, we smoothly facilitate data delivery at any location.',
      to: '/',
    },
  ]

  return (
    <>
      <AssistantWrapper>
        <Container>
          <div className="images-box">
            <h2 className="color-primary">Data Delivery & Formats</h2>
            <p>
              We make effort to transmit data in a format that is effortless and easily accessible for our clients.
              Our experts can transform data into formats like - XLS, CVS, JSON, PDF, TXT, Image & more. Keeping
              your convenience in mind we provide you with simple & clean data that is insightful and easily
              sortable to get any information faster, smoother and reliable.
            </p>
            <Row>
              {dataDrivenData.map((list) => {
                return (
                  <Col md={6}>
                    <div className="d-flex flex-column delivery-data">
                      <div className="d-flex flex-column justfiy-content-center align-items-center add-image-space">
                        <img src={list.img} alt={list.title} />
                      </div>
                      <h4>{list.title}</h4>
                      <p> {list.description}</p>
                      <div className="d-flex justify-content-end add-border-gap">
                        <Button text="Contact Sales" />
                      </div>
                    </div>
                    <Divider />
                  </Col>
                )
              })}
            </Row>
          </div>
        </Container>
      </AssistantWrapper>
      <Divider />
    </>
  )
}
export default Index
