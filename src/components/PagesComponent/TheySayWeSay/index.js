import React from 'react';
import Container from "../../UiComponent/Container";
import { Col, Row } from 'react-bootstrap';
import TheySayWeSayWrapper from './style';

const index = () => {
  return (
    <TheySayWeSayWrapper>
      <Container>
        <Row className="section-row g-0">
          <Col md={6}>
            <div className="img-wrapper">
              <img
                src="/enterpize-img.svg"
                className="side-img"
                alt="no-enterprizeExplore our Full-Cycle Product Development Services"
              />
            </div>
          </Col>
          <Col md={6}>
            <h2 className="heading text-h2">They say:</h2>
            <h3 className="sub-heading text-h3">
              “There are <a href="#">50% - 80%</a> chances your software project will fail.”
            </h3>
            <h2 className="heading text-h2">We say:</h2>
            <h3 className="sub-heading text-h3">Not in our case.</h3>
            <p className="paragraph">
              Anyone can put code together. However many great teams fail to deliver successful products due to
              loopholes in planning, design thinking, or execution. In our case, every nook and crook is perfected with
              precision and proficiency.
            </p>
          </Col>
        </Row>
      </Container>
    </TheySayWeSayWrapper>
  )
};

export default index;
