import React from "react";

import { Row, Col } from "react-bootstrap";

import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container";

import BannerImage from "../../../assets/images/banner-img.svg";

import DedicatedDeveloperWrapper from "./style";

const Index = () => (
    <DedicatedDeveloperWrapper>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="title-portion">
              <h4 className="hire">Hire</h4>
              <h1 className="add-bottom-space">Dedicated Developers </h1>
              <h2 className="for-furture fw-normal">
                for a future <span className="you-deserve fw-bold"> You Deserve!</span>
              </h2>
              <p className="paragraph">
                200+ enterprises have already garnered great financial results and market 
                outreach with our time-tested development flow, error-free code quality, and on-
                time project delivery.
              </p>
              <Button text="Let’s Start a Project" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className="d-flex justify-content-end p-0">
            <div className="image-portion">
              <BannerImage />
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="text-center add-space">
              {["Transparent", "Trustworthy", "Reliable", "Progressive", "Real", "Creative"].map((value,i) => (
                <h4 className="divider-heading" key={i}>{value}</h4>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </DedicatedDeveloperWrapper>
  );

export default Index;
