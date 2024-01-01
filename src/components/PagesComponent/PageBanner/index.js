import React from "react";
import { navigate } from 'gatsby'
import { Row, Col } from "react-bootstrap";
import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/HomeButton";
import CtoBannerWrapper from "./style";

const CtoBanner = ({ heading, subheading, paragraph, buttonText, imgSrc, wrapperClass, blogInner }) => {
  return (
    <CtoBannerWrapper className={wrapperClass} blogInner={blogInner}>
      <Container>
        <Row>
          <Col lg={7} md={12} sm={12} xs={12}>
            <div className="banner-main">
              <h1 className="banner-sub-heading text-h4">{subheading}</h1>
              <h2 className="text-h1">{heading}</h2>
              <p>{paragraph}</p>
              <Button text={buttonText} onClick={() => navigate('/contact')} className="mx-lg-0 mx-auto" />
            </div>
          </Col>
          {imgSrc && (
            <Col lg={5} md={0} sm={0} xs={0} className="d-lg-flex d-none justify-content-end p-0">
              <img className="banner-img" src={imgSrc} alt="CTO Banner" />
            </Col>
          )}
        </Row>
      </Container>
    </CtoBannerWrapper>
  )
}

export default CtoBanner;
