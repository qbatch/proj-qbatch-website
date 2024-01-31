import React from "react";
import { Col, Row } from "react-bootstrap";
import { values } from "../../../constants";

import Container from "../../UiComponent/Container";

import ValueSystemWrapper from "./style";


const Index = () => {
  return (
    <ValueSystemWrapper>
      <Container>
        <div className="heading-wrapper">
          <h2 className="heading">
            <span className="underline-heading text-h4">It’s not about being different, </span>
            <span className="text-lowercase">it’s about having a </span> <span className='value-system'>“Value System”</span>
          </h2>
        </div>

        <div className="col-wrapper">
          <Row>
            {values.map((value, index) => (
              <Col xl={4} md={6} className="value-col" key={index}>
                <img className="value-icon" src={value.icon} alt={`Value Icon ${index}`} />
                <div className="col-inner">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </ValueSystemWrapper>
  )
}

export default Index;
