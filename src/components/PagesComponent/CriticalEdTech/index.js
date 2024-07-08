import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { navigate } from 'gatsby'
import AssistantWrapper from './style'
import Container from '../../UiComponent/Container'
import Divider from '../../UiComponent/Divider'
import Button from '../../UiComponent/Button'

const Index = ({data, heading}) => {

  return (
    <>
      <AssistantWrapper>
        <Container>
          <div className="text-center heading-box">
            <h2 className="color-primary">{heading}</h2>
          </div>

          <div className="images-box">
            <Row>
              {data.map((list) => {
                return (
                  <Col md={4}>
                    <div className="assistent-box">
                      <img src={list.img} alt={list.title} />
                      <div>
                        <h3 className='text-h4'>{list.title}</h3>
                        <p> {list.description}</p>
                      </div>
                    </div>
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
