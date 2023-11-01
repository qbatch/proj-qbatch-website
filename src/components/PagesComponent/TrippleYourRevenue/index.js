import React from "react";

import { revenueData } from "../../../constants";
import Container from "../../UiComponent/Container";

import RevenueWrapper from "./style";
import { Col, Row } from "react-bootstrap";

const Index = () => {
  return (
    <RevenueWrapper>
      <Container>
        <Row>
          <Col xl={4} md={6}>
            <div className="revenue-heading">
              <h2>To all the sellers, it’s time to triple your revenue!</h2>
              <p>We tap multiple selling verticals not limited to</p>
            </div>
          </Col>
          {revenueData?.map((item, index) => (
            <Col xl={4} md={6}>
              <div className="revenue-box">
                <div key={index} className="revenue-data">
                  <div className="revenue-img">
                    <img src={item.img} alt="logo" />
                  </div>
                  <div className="revenue-desc d-flex flex-column justify-content-center h-100">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </RevenueWrapper>
  );
};

export default Index;
