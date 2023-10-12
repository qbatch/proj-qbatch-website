import React from "react";

import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";

import CtoBannerWrapper from "./style";

const Index = () => {
  return (
    <CtoBannerWrapper>
      <Container>
        <Row>
          <Col lg={7} md={12} sm={12} xs={12}>
            <div className="banner-main">
              <h4 className="underline-heading">CTO as a Service</h4>
              <h1>
                <span>Rethink and Rebuild</span>
                <br /> Your Technical Prowess
              </h1>
              <p>
                Neglecting a tiny detail can lead to huge technical debts. Get
                high-impact technical guidance and confidently deal with time-
                and money-critical situations toward greater business growth.
              </p>
              <Button
                text="Get Free CTO Consultation"
                className="mx-lg-0 mx-auto"
              />
            </div>
          </Col>
          <Col
            lg={5}
            md={0}
            sm={0}
            xs={0}
            className="d-flex justify-content-end p-0"
          ></Col>
        </Row>
      </Container>
    </CtoBannerWrapper>
  );
};

export default Index;
