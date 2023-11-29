import React from "react";
import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/Button";

import AwardsWrapper from "./style";

import { awardsData } from "../../../constants";

const Index = ({ maxCols }) => {
  
  const displayedAwards = maxCols ? awardsData.slice(0, maxCols) : awardsData;

  return (
    <AwardsWrapper>
      <div className="awards-main">
        <Container>
          <Row>
            <Col lg={4} sm={12}>
              <h2 className="heading">Awards & Recognition</h2>
              {maxCols && (
                <Col sm={12}>
                  <div className="btn-awards">
                    <Button text="Explore More" />
                  </div>
                </Col>
              )}
            </Col>
            <Col lg={8} sm={12}>
              <Row className="awards-logos">
                {displayedAwards.map((data, ind) => (
                  <Col md={3} sm={3} xs={6} key={ind}>
                    <a href={data.link} target="blank">
                      <img src={data.img} alt={`Award ${ind + 1}`} />
                    </a>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </AwardsWrapper>
  )
};

export default Index;
