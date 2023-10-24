import React from "react";
import {Link} from 'gatsby'
import { Row, Col } from "react-bootstrap";

import Container from "../../UiComponent/Container";

import ArrowDownward from "../../../assets/images/arrow_downward.svg";

import ProblemSolvingWrapper from "./style";

const Index = (props) => {
  const {text, className} = props;

  return (
    <ProblemSolvingWrapper 
    className={className || ""}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
           {text}
          </Col>
          <Col md={4}>
            <Link to="/contact">
            <div className="box-center pt-lg-0 pt-4" >
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
            </Link>
          </Col>
        </Row>
      </Container>
    </ProblemSolvingWrapper>
  );
};
export default Index;
