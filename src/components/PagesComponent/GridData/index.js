import React from "react";

import { automationData } from "../../../constants";
import Container from "../../UiComponent/Container";

import RevenueWrapper from "./style";
import { Col, Row } from "react-bootstrap";

const Index = () => {
  return (
    <RevenueWrapper>
      <Container>
      
            <div className="revenue-heading">
              <h2>Automation is 99% software but,
              1% mindset<span> (and oh, that 1%)</span></h2>
            </div>
            <Row>
          {automationData?.map((item, index) => (
            <Col lg={4} xl={3} md={6} xs={12}  className='d-flex flex-column'>
              <div className="revenue-box">
                <div key={index} className="revenue-data">
                  <div className="revenue-img">
                    <img src={item.image} alt="logo" />
                  </div>
                  <div className="revenue-desc d-flex flex-column justify-content-center h-100">
                    <p>{item.content}</p>
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
