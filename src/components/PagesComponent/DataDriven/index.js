import React from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import DataDriven from './style'
import Container from '../../UiComponent/Container'
import Divider from '../../UiComponent/Divider'

const Index = () => {

    const dataDrivenData = [
      {
        img: '/retain-23x-more-customers.svg',
        title: 'Acquire 23X more customers',
      },
      {
        img: '/retain-6x-more-customers.svg',
        title: 'Retain 6X more customers',
      },
      {
        img: '/retain-19x-more-customers.svg',
        title: `Gain 19X more profit`,
      },
    ] 

  return (
    <>
      <DataDriven>
        <Container>
          <div className="text-center heading-box">
            <h2 className="color-primary">Do you know?</h2>
            <h2 className="color-primary">Data-driven organizations are more likely to</h2>
          </div>
          <div className="images-box">
            <Row>
              {dataDrivenData.map((list) => {
                return (
                  <Col md={4}>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <img width="100px" src={list.img} alt={list.title} />
                      <h4>{list.title}</h4>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </div>
          <div className="text-center mt-4">
            <Link target="blank" to="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights">
              Mckinsey Global Institute
            </Link>
          </div>
        </Container>
      </DataDriven>
      <Divider />
    </>
  )
}
export default Index
