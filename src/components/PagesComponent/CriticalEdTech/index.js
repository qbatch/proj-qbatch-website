import React, { lazy } from 'react'
import { Row, Col } from 'react-bootstrap'

import AssistantWrapper from './style'

const Container  = lazy(() => import('../../UiComponent/Container'));
const Divider  = lazy(() => import('../../UiComponent/Divider'));

const Index = ({data, heading}) => {

  return (
    <>
      <AssistantWrapper>
        <Container>
          <div className="text-lg-center text-start heading-box">
            <h2 className="color-primary">{heading}</h2>
          </div>

          <div className="images-box">
            <Row>
              {data.map((list) => {
                return (
                  <Col md={4}>
                    <div className="assistent-box">
                      <img src={list.img} alt={list.title} title={list.title} loading='lazy' />
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
