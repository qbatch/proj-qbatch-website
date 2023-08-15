import React from "react";
import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";

import ArrowDownward from "../../../assets/images/arrow_downward.svg";
import ProblumSolvingWrapper from "./style";

const Index = () => {
  return (
    <ProblumSolvingWrapper>
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="heading-break">
            Wondering how much
            your project would cost?
            </h1>
          </Col>
          <Col md={4}>
            <div className="box-center pt-lg-0 pt-4">
              <div className="circle-bg">
                <div className="circle-box">
                  <svg className="text-svg" viewBox="0 0 100 100" width="80" height="80">
                    <defs>
                      <circle id="myCircle" cx="0" cy="0" r="50" />
                      <path
                        id="circle"
                        rx="15"
                        d="M 50, 50
                        m -37, 0
                        a 37,37 0 1,1 74,0
                        a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text>
                      <textPath href="#circle">
                        Launch Your idea . Launch Your idea . Launch Your idea . Launch Your idea .
                      </textPath>
                    </text>
                  </svg>
                  <ArrowDownward className="red-arrow" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </ProblumSolvingWrapper>
  );
};
export default Index;
