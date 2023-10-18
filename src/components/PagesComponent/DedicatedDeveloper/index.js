import React from "react";

import { Row, Col } from "react-bootstrap";

import Button from "../../UiComponent/Button";
import Container from "../../UiComponent/Container";

import BannerImage from "../../../assets/images/banner-img.svg";
import { homeTiles } from "../../../constants/index";
import { DedicatedDeveloperWrapper, H1 } from "./style";

const Index = () => (
  <DedicatedDeveloperWrapper>
    <img src="/banner-arrow-vector.svg" alt="banner-background" className="home-banner-bg" />
    <Container>
      <div className="title-portion">
        <div className="inner">
          <H1><span className="hire">Hire </span>Dedicated Developers <span className="for-furture">for a future <span className="you-deserve fw-bold"> You Deserve!</span></span></H1>
          <div className="inner-text">
            <p className="paragraph">
              200+ enterprises have already garnered great financial results and market outreach with our time-tested
              development flow, error-free code quality, and on-time project delivery.
            </p>
          </div>
          <div className="d-flex justify-content-end">
            <Button text="Let’s Start a Project" className="mx-lg-0 mx-auto secondary-btn" />
          </div>
        </div>
      </div>
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
