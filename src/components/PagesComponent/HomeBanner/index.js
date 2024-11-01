import React, { lazy } from "react";
import { navigate } from "gatsby";
import { Row, Col } from "react-bootstrap";

import HomeBannerWrapper from "./style";

const Container = lazy(() => import("../../UiComponent/Container"));
const Button = lazy(() => import("../../UiComponent/Button"));

const Index = () => {
  return (
    <HomeBannerWrapper>
      <Container>
        <Row>
          <Col lg={7}>
            <div className="banner-home">
              <h1>
                Software Development & Consultancy
              </h1>
              <p>Over 200 enterprises have achieved financial success and market growth with our proven development flow, flawless code quality, and punctual project delivery.</p>
              <Button
                text='Schedule a Meeting'
                onClick={() => navigate("/contact")}
                className="header-btn banenr-btn"
              />
            </div>
          </Col>
          <Col lg={5}>
            <div className="banner-img">
              <img
                src='/ships-img.svg'
                alt='ships'
                title='ships'
                height="597"
                width="787"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </HomeBannerWrapper>
  );
};

export default Index;
