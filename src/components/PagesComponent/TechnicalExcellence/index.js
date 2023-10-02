import React from "react";

import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";

import TechnicalExcellenceWrapper from "./style";

const Index = () => {
  return (
    <TechnicalExcellenceWrapper>
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className="technical-heading">
              We are Your Right-Hand Men Towards Total Technical Excellence
            </h2>
          </Col>
          <Col lg={6}>
            <div className="technical-paragraph">
              <h4>
                Do you know? 3 in 10 company leaders are not sure if technology
                is well integrated into their systems or not. Are you sure about
                yours?
              </h4>
              <p>
                Digital adoption brings different challenges to each business.
                And our highly experienced technical leadership knows how to
                keep your boat afloat in the rising technological waves.
                Besides, spending on digital transformation is expected to reach
                <a
                  href="https://statista.com/statistics/870924/worldwide-digital-transformation-market-size/"
                  target="blank"
                >
                  $3.4 trillion by 2026
                </a>
              </p>
              <p>
                Thus, we take no risks and work heartily on building high-margin
                technology roadmaps for your dear business to thrive on a larger
                scale.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </TechnicalExcellenceWrapper>
  );
};

export default Index;
