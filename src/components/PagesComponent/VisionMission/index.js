import React from "react";
import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";

import VisionWrapper from "./style";

const Index = () => {
  return (
   <VisionWrapper>
    <Container>
      <Row className="content-col content-right">
      <Col lg={6} className="order-1 order-lg-2">
          <div className="content-wrapper">
          <div className="content">
            <h2 className="content-heading">Our Vision</h2>
            <p className="content-paragraph">We are working every day and night to become your pedestal where innovation grows and flows freely into a worryless future. </p>
          </div>
          </div>
        </Col>
        <Col lg={6} className="order-2 order-lg-1">
          <div className="image-portion">
             <img src="/company-portion-img.png" />
            </div>
        </Col>
      </Row>
      <Row className="content-col">
      <Col lg={6}>
          <div className="content-wrapper justify-content-start">
          <div className="content">
            <h2 className="content-heading">Our Mission</h2>
            <p className="content-paragraph">We are on a mission to help you modernize without fretting about financial and operational bottlenecks through intelligently designed and carefully deployed software solutions.  </p>
          </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="image-portion">
             <img src="/company-portion-img.png" />
            </div>
        </Col>
      </Row>
      
    </Container>
   </VisionWrapper>
  )
}

export default Index;
