import React from "react";
import { Row, Col } from "react-bootstrap";

import { clientsData } from "../../../constants";

import Container from "../../UiComponent/Container";

import AwardsWrapper from "./style";


const Index = () => {
  
  return (
    <AwardsWrapper>
      <div className="awards-main">
        <Container>
          <Row className="g-0">
            <Col lg={3} className="d-flex align-items-center">
              <h2 className="heading">Our <br className="d-lg-block d-none"/> Client's</h2>
            </Col>
            <Col lg={9}>
              <div className="clients-logos">
                {clientsData.map((data, ind) => (
                  <div className="logo" key={ind}>
                    <a href={data.link} target="blank">
                      <img src={data.img} alt="client_logo"/>
                    </a>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </AwardsWrapper>
  );
};

export default Index;
