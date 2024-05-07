import React from "react";

import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";

import TechnicalExcellenceWrapper from "./style";

const Index = (props) => {
  const { heading, title, paragraph1, paragraph2, className } = props;

  return (
    <TechnicalExcellenceWrapper className={className}>
      <Container>
        <Row className='justify-content-between'>
          <Col lg={5}>
            <h2 className="technical-heading">{heading}</h2>
          </Col>
          <Col lg={6}>
            <div className="technical-paragraph">
              {title && (
                <h3>
                  Do You know?
                  <a
                    href="https://www.deloitte.com/an/en/our-thinking/insights/topics/leadership/digital-transformation-topics-for-corporate-technology-leadership.html"
                    target="blank"
                  >
                    3 in 10
                  </a>{" "}
                  company leaders are not sure if technology is well integrated
                  into their systems or not. Are you sure about yours?
                </h3>
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
