import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Container from '../../UiComponent/Container'
import Button from '../../UiComponent/Button'
import {projects} from '../../../constants'
import ManagementWrapper from './style'
const Index = () => {

  return (
    <ManagementWrapper>
      <Container>
        <h3 className="text-h2">Custom e-commerce business management software solutions for your next big project.</h3>
        <Row>
          <Col lg={6} md={12} sm={12} >
            {projects.slice(0, 5).map((project, index) => {
              const { title, img, description } = project
              return (
                <div className="hover-box">
                  <div className="d-flex gap-4 align-items-center pb-4">
                    <img src={img} alt="no-project" />
                    <h4>{title}</h4>
                  </div>
                  <div className="description">{description}</div>
                </div>
              )
            })}
          </Col>
          <Col lg={6} md={12} sm={12}>
            {projects.slice(5, 10).map((project, index) => {
              const { title, img, description } = project
              return (
                <div className="hover-box">
                  <div className="d-flex gap-4 align-items-center pb-4">
                    <img src={img} alt="no-project" />
                    <h4>{title}</h4>
                  </div>
                  <div className="description">{description}</div>
                </div>
              )
            })}
          </Col>
          <Col lg={12} md={12} >
            <div className="d-flex justify-content-center add-space">
              <Button text="Get Services" className="secondary-btn"  />
              </div>
            </Col>
        </Row>
      </Container>
    </ManagementWrapper>
  )
}
export default Index
