import React from 'react';
import { Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import ProblumSolvingWrapper from './style'
import Container from '../../UiComponent/Container'

const Index =()=>{
    return (
      <ProblumSolvingWrapper>
        <Container>
          <Row>
            <Col md={8}>
              <h2>
                We go beyond traditional problem-solving techniques and old-fashioned promises to assist visionaries
                like you to transform on a massive scale<br></br> — <b>with logic, innovation and emotion.</b>
              </h2>
            </Col>
            <Col md={4}>
            <div className="box-center">
              <div class="circle-box">
                <svg class="text-svg" viewBox="0 0 100 100" width="100" height="100">
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50
                        m -37, 0
                        a 37,37 0 1,1 74,0
                        a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text font-size="17">
                    <textPath href="#circle">
                      Launch Your idea . Launch Your idea . Launch Your idea . Launch Your idea .
                    </textPath>
                  </text>
                </svg>
                <BsArrowRight className="red-arrow" />
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </ProblumSolvingWrapper>
    );
}
export default Index;