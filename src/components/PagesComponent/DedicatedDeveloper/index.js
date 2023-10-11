import React from "react";

import { Row, Col } from "react-bootstrap";

import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container";

import BannerImage from "../../../assets/images/banner-img.svg";
import { homeTiles } from "../../../constants/index";
import DedicatedDeveloperWrapper from "./style";

const Index = () => (
  <DedicatedDeveloperWrapper>
    <Container>
      <Row>
        <Col lg={6} md={12} sm={12} xs={12}>
          <div className="title-portion">
            <h1 className="add-bottom-space"><span className="hire text-h4">Hire </span>Dedicated Developers </h1>
            <h2 className="for-furture fw-normal">
              for a future <span className="you-deserve fw-bold"> You Deserve!</span>
            </h2>
            <p className="paragraph">
              200+ enterprises have already garnered great financial results and market outreach with our time-tested
              development flow, error-free code quality, and on-time project delivery.
            </p>
            <Button text="Let’s Start a Project" className="mx-lg-0 mx-auto" />
          </div>
        </Col>
        <Col lg={6} md={0} sm={0} xs={0} className="d-flex justify-content-end p-0">
          <div className="image-portion">
            <BannerImage />
          </div>
        </Col>
      </Row>
      <div className="text-center add-space">
        {homeTiles.map((value, i) => (
          <h3 className="divider-heading text-h4" key={i}>
            {value}
          </h3>
        ))}
      </div>
    </Container>
  </DedicatedDeveloperWrapper>
);

export default Index;
