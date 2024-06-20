import React from 'react'
import {Row,Col} from 'react-bootstrap'

import Container from '../../UiComponent/Container'

import FullCycleWrapper from './style'

const Index = ({className, heading, paragraph, data }) => {

  return (
    <FullCycleWrapper className={className}>
      <Container>
        <h2 className='main-heading'>{heading}</h2>
        <p className='paragraph'>{paragraph}</p>
        <Row>
          <Col lg={6} md={12} sm={12} >
            {data.slice(0, 4).map((project, index) => {
              const { title, img, description } = project
              return (
                <div className="hover-box">
                  <div className="d-flex gap-4 align-items-center pb-4">
                    <img src={img} alt="no-project" />
                    <h3 className='text-h4 title'>{title}</h3>
                  </div>
                  <div className="description">{description}</div>
                </div>
              )
            })}
          </Col>
          <Col lg={6} md={12} sm={12}>
            {data.slice(4, 8).map((project, index) => {
              const { title, img, description } = project
              return (
                <div className="hover-box">
                  <div className="d-flex gap-4 align-items-center pb-4">
                    <img src={img} alt="no-project" />
                    <h3 className='text-h4 title'>{title}</h3>
                  </div>
                  <div className="description">{description}</div>
                </div>
              )
            })}
          </Col>
        </Row>
      </Container>
    </FullCycleWrapper>
  )
}
export default Index
