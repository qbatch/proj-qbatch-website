import React from "react";
import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";

import GrowthPartnerWrapper from "./style";

const Index = () => {
  return(
    <GrowthPartnerWrapper>
      <div className="growth-wrapper">
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className="main-heading"><span className="underline-heading text-h4">We are your </span>Growth Partners!</h2>
            <p className="paragraph">We don’t just code or design, our efficiency is rooted in deeply understanding your challenge.
             Our goal is to add technological value to your business and future-proof your success. Therefore, we aim to be your software development partners! </p>
            <p className="paragraph">Team Qbatch has happily delivered powerful and painless software services and solutions in HealthTech, EdTech, 
            3PL Warehousing, E-commerce Business Automation, FinTech, Food, Travel, and On-demand applications assuring lucrative results and optimal 
            customer happiness — channeled through reliable industry knowledge and robust technology support.</p>
          </Col>
          <Col lg={6}>
            <div className="image-portion">
             <img src="/growth-partner.svg" alt="growth partners" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="growth-wrapper">
    <Container>
      <Row className="content-col content-right">
      <Col lg={6} className="order-1 order-lg-2">
          <div className="content-wrapper">
          <div className="content">
            <h2 className="heading">Our Vision</h2>
            <p className="paragraph">We are working every day and night to become your pedestal where innovation grows and flows freely into a worryless future. </p>
          </div>
          </div>
        </Col>
        <Col lg={6} className="order-2 order-lg-1">
          <div className="image-portion-md">
             <img src="/our-visions.svg" alt="our vision" />
            </div>
        </Col>
      </Row>
      <Row className="content-col">
      <Col lg={6}>
          <div className="content-wrapper justify-content-start">
          <div className="content mission">
            <h2 className="heading">Our Mission</h2>
            <p className="paragraph">We are on a mission to help you modernize without fretting about financial and operational bottlenecks through intelligently designed and carefully deployed software solutions.  </p>
          </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="image-portion-md">
             <img src="/our-missions.svg" alt="our mission" />
            </div>
        </Col>
      </Row>
      
    </Container>
   </div>
    </GrowthPartnerWrapper>
   
  )
}

export default Index;
