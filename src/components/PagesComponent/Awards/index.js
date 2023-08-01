import React from "react";

import AwardsWrapper from "./style";
import Container from "../../UiComponent/Container";

import { Row, Col } from "react-bootstrap";

import CountUp from "react-countup";

const counterData = [
  {
    id: 1,
    count: 150,
    desc: "Full stack Developers",
  },
  {
    id: 2,
    count: 300,
    desc: "Solutions Delivered \n Successfully",
  },
  {
    id: 3,
    count: 98,
    desc: "Customer Happiness \n Index",
  },
];

const Index = () => {
  return (
    <AwardsWrapper>
      <div className="awards-main">
        <Container>
          <Row>
            {/* {counterData.map((data, ind) => ( */}
            <Col md={4} sm={12}>
              <h2 className="heading">Awards & Recognition</h2>
            </Col>
            <Col md={8} sm={12}>
              <Row className="awards-logos">
                <Col md={3}>
                  <a
                    href="https://www.designrush.com/agency/profile/qbatch"
                    target="_blank"
                  >
                    <img src="https://www.designrush.com/topbest/images/svg/top-agency-badges/top-web-development-companies.svg" />
                  </a>
                </Col>
                <Col md={3}>
                  <a
                    target="_blank"
                    href="https://www.topdevelopers.co/profile/qbatch"
                  >
                    <img
                      src="https://www.topdevelopers.co/assets/badges/app-2023/Mobile-App/Global/badge-top-mobile-app-developers-2023.png"
                      alt="Mobile App Development Companies"
                      title="Mobile App Development Companies"
                    />
                  </a>
                </Col>
              </Row>
            </Col>
            {/* ))} */}
          </Row>
        </Container>
      </div>
    </AwardsWrapper>
  );
};

export default Index;
