import React from "react";
import { Row, Col } from "react-bootstrap";
import { BiChevronRight } from "react-icons/bi";
import Container from "../../UiComponent/Container";
import QbatchMakingWrapper from "./style";
import { data } from "../../../constants/index";

const Index = ({ heading, innerPage, paragraph }) => {
  return (
    <QbatchMakingWrapper>
      <Container>
        <div className="container-padding">
          <div className="section-heading text-center">
            <h2 className={innerPage ? 'heading' : 'heading text-h1'}>{heading}</h2>
            {paragraph && <p>{paragraph}</p>}
          </div>
          <Row>
            <Col md={5} sm={6}>
              <div className="text-center text-sm-end">
                <h3 className="color-danger">Your Challenges</h3>
              </div>
            </Col>
            <Col md={2} className="d-sm-none d-md-block"></Col>
            <Col md={5} sm={6}>
              <div className="text-center text-sm-start">
                <h3 className="color-primary">We Solve Them</h3>
              </div>
            </Col>
          </Row>
          <div className="challenges-section">
            {data.map((item, ind) => (
              <Row key={ind} className="challenges-box">
                <Col xs={5}>
                  <div className="text-end pe-sm-0 pe-3">
                    <p>{item.challenges}</p>
                  </div>
                </Col>
                <Col xs={2}>
                  <div className="d-flex align-items-center justify-content-center gap-md-3 gap-1 challenges-icons">
                    <img src={item.icon1} alt="icon" width="32px" height="32px" />
                    <div className="gradient-arrow">
                      <BiChevronRight size={25} />
                    </div>
                    <img src={item.icon2} alt="icon" width="32px" height="32px" />
                  </div>
                </Col>
                <Col xs={5}>
                  <div className="ps-sm-0 ps-3">
                    <p>{item.solve}</p>
                  </div>
                </Col>
              </Row>
            ))}
          </div>
        </div>
      </Container>
    </QbatchMakingWrapper>
  )
};

export default Index;
