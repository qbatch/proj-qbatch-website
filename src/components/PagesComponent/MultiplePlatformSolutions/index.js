import React from "react";
import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";

import MultiPlatformWrapper from "./style";

const Index = ({data, heading, paragraph, wrapperClass}) => {
  return (
    <MultiPlatformWrapper className={wrapperClass}>
      <Container>
        <Row>
          <Col lg={5}>
            <div className="platform-heading">
              <h2>
                {heading}
              </h2>
              <p>
                {paragraph}
              </p>
            </div>
          </Col>
          <Col lg={7}>
            {data.map((item, ind) => (
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
