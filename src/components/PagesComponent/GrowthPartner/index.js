import React from "react";
import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";

import GrowthPartnerWrapper from "./style";

const Index = () => (
    <GrowthPartnerWrapper>
      <Container>
        <Row>
          <Col lg={6}>
            <h4 className="underline-heading">We are your</h4>
            <h2 className="main-heading">Growth Partners!</h2>
            <p className="paragraph">We don’t just code or design, our efficiency is rooted in deeply understanding your challenge.
             Our goal is to add technological value to your business and future-proof your success. Therefore, we aim to be your software development partners! </p>
            <p className="paragraph">Team Qbatch has happily delivered powerful and painless software services and solutions in HealthTech, EdTech, 
            3PL Warehousing, E-commerce Business Automation, FinTech, Food, Travel, and On-demand applications assuring lucrative results and optimal 
            customer happiness — channeled through reliable industry knowledge and robust technology support.</p>
          </Col>
          <Col lg={6}>
            <div className="image-portion">
             <img src="/company-portion-img.png" alt="company" />
            </div>
          </Col>
        </Row>
      </Container>
    </GrowthPartnerWrapper>
  )

export default Index;
