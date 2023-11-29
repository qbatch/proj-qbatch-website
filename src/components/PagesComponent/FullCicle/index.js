import React from 'react'
import {Row,Col} from 'react-bootstrap'

import Container from '../../UiComponent/Container'
import Button from '../../UiComponent/Button'
import {fullCycle} from '../../../constants'

import FullCycleWrapper from './style'

const Index = () => {

  return (
    <FullCycleWrapper>
      <Container>
        <h2 className='main-heading'>Full-Cycle Web Application Development Services</h2>
        <p className='paragraph'>Explore the best web app solutions that escalate your performance and position in the highly saturated market.</p>
        <Row>
          <Col lg={6} md={12} sm={12} >
            {fullCycle.slice(0, 4).map((project, index) => {
              const { title, img, description } = project
              return (
                <div className="hover-box" key={index}>
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
            {fullCycle.slice(4, 8).map((project, index) => {
              const { title, img, description } = project
              return (
                <div className="hover-box" key={index}>
                  <div className="d-flex gap-4 align-items-center pb-4">
                    <img src={img} alt="no-project" />
                    <h3 className="text-h4 title">{title}</h3>
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
