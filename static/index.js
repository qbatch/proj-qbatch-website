import React from "react";
import { Row, Col } from "react-bootstrap";
import { awardsData } from "../../../constants";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";


import CompanyAwardsWrapper from "./style";



const Index = () => {
  
  return (
    <CompanyAwardsWrapper>
      <div className="awards-main">
        <Container>
          <Row>
            <Col md={4} sm={12}>
              <h2 className="heading">Awards & Recognition</h2>
            </Col>
            <Col md={8} sm={12}>
              <Row className="awards-logos">
                {awardsData.map((data, ind) => (
                  <Col md={3} sm={3} xs={6} key={ind}>
                    <a href={data.link} target="_blank">
                      {data.img}
                    </a>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </CompanyAwardsWrapper>
  );
};

export default Index;
