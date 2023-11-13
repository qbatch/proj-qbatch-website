import React from "react";

import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";

import TechnicalExcellenceWrapper from "./style";

const Index = (props) => {
  const { heading, title, paragraph1, paragraph2, className } = props;

  return (
    <TechnicalExcellenceWrapper className={className}>
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className="technical-heading">{heading}</h2>
          </Col>
          <Col lg={6}>
            <div className="technical-paragraph">
              {title && (
                <h4>
                  Do you know?{" "}
                  <a
                    href="https://www.deloitte.com/an/en/our-thinking/insights/topics/leadership/digital-transformation-topics-for-corporate-technology-leadership.html"
                    target="blank"
                  >
                    3 in 10
                  </a>{" "}
                  company leaders are not sure if technology is well integrated
                  into their systems or not. Are you sure about yours?
                </h4>
              )}
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </TechnicalExcellenceWrapper>
  );
};

export default Index;
