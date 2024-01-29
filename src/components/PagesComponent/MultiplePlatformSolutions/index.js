import React from "react";
import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";
import { multiPlatformData } from "../../../constants";

import MultiPlatformWrapper from "./style";

const Index = () => {
  return (
    <MultiPlatformWrapper>
      <Container>
        <Row>
          <Col lg={5}>
            <div className="platform-heading">
              <h2>
                Mission-Critical Mobile App Development Solutions For Multiple
                Platforms
              </h2>
              <h3 className="text-h5">
                We offer multi-disciplinary mobile app development services that
                are not limited to
              </h3>
            </div>
          </Col>
          <Col lg={7}>
            {multiPlatformData.map((item, ind) => (
              <div
                className="d-flex align-items-start gap-3 platform-list"
                key={ind}
              >
                <img src={item.icon} alt="mobile app" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </MultiPlatformWrapper>
  );
};

export default Index;
