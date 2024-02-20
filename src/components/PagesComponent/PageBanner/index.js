import React from "react";
import { navigate } from 'gatsby'
import { Row, Col } from "react-bootstrap";
import Container from "../../UiComponent/Container";
import Button from "../../UiComponent/HomeButton";
import CtoBannerWrapper from "./style";

const CtoBanner = ({ heading, subheading, paragraph, buttonText, imgSrc, wrapperClass, blogInner, col1lg, col2lg, headingMaxWidth, className, mobileViewBanner, paragraphMaxWidth, subheadingColor }) => {
  const defaultCol1lg = 7;
  const defaultCol2lg = 5;

  return (
    <CtoBannerWrapper className={wrapperClass} blogInner={blogInner}>
      <Container className={className}>
        <Row>
          <Col lg={col1lg || defaultCol1lg} md={12} sm={12} xs={12}>
            <div className="banner-main">
              <h1 className="banner-sub-heading text-h4" style={{ color: subheadingColor }}> {subheading}
              </h1>
              <h2 className="text-h1" style={{ maxWidth: headingMaxWidth }}>{heading}</h2>
              <p style={{ maxWidth: paragraphMaxWidth }}>{paragraph}</p>
              <Button text={buttonText} onClick={() => navigate('/contact')} className="mx-lg-0 mx-auto" />
            </div>
          </Col>
          {imgSrc && (
            <Col lg={col2lg || defaultCol2lg} md={0} sm={0} xs={0} className="d-lg-flex d-none justify-content-end p-0">
              <img className="banner-img" src={imgSrc} alt="CTO Banner" />
            </Col>
          )}
        </Row>
        <img className="mobile-view-banner" src={mobileViewBanner}/>
      </Container>
    </CtoBannerWrapper>
  )
}

export default CtoBanner;
