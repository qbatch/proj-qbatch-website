import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import Button from '../../UiComponent/Button'

import BannerImage from "../../../assets/images/banner-img.svg";

import DedicatedDeveloperWrapper from './style'

const Index = () => {
  return (
    <DedicatedDeveloperWrapper>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="title-portion">
              <h4 className="hire">Hire</h4>
              <h1 className="add-bottom-space">Dedicated Developers </h1>
              <span className="for-furture">for a future </span>
              <h2 className="d-inline you-deserve"> You Deserve!</h2>
              <p className="paragraph">
                200+ enterprises have already garnered great financial results and market <br />
                outreach with our time-tested development flow, error-free code quality, and on-
                <br />
                time project delivery.
              </p>
              <Button text="Let’s Start a Project" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div>
              <div className="image-portion">
                <BannerImage />
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="text-center add-space">
              {["Transparent", "Trustworthy", "Reliable", "Progressive", "Real", "Creative"].map((value) => (
                <h4 className="divider-heading">{value}</h4>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </DedicatedDeveloperWrapper>
  );
};
export default Index;
