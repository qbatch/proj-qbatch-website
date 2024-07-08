import React from "react";
import { navigate } from 'gatsby'
import { Col, Container, Row } from "react-bootstrap";

import Button from "../../UiComponent/Button";

import ExtensionInnerBannerWrapper from "./style";

const Index = (props) => {
  const {
    heading,
    span,
    isButton,
    className,
    btnText,
    headingSize,
    paragraphSize,
    btnAlign,
    paragraph,
    headingMaxWidth,
    wrapperClass,
    paragraphMaxWidth,
    btnSpacingTop = 24,
    bannerImg
  } = props;

  const headingStyle = {
    maxWidth: headingMaxWidth || 'none',
  };
  const paragraphStyle = {
    maxWidth: paragraphMaxWidth || 'none',
  };

  const buttonStyle = {
    marginTop: btnSpacingTop,
  };

  return (
    <ExtensionInnerBannerWrapper className={className}>
      <Container>
        <Row className="g-0 align-items-center justify-content-between">
          <Col xl={4} lg={12} className="">
            <img className="banner-inner-img mb-lg-0 mb-4" src={bannerImg} />
          </Col>
          <Col xl={8}>
          <div className={wrapperClass}>
          <h2 style={headingStyle} className={`text-h2 heading ${headingSize}`}>
            {heading} {span && <span className="inner-heading">{span}</span>}
          </h2>
            {paragraph && <p style={paragraphStyle}  className={`paragraph ${paragraphSize}`}>{paragraph}</p> }
            {isButton && (
            <div style={buttonStyle} className={`idea-btn d-flex justify-content-${btnAlign}`}>
              <Button text={btnText} onClick={() => navigate('/contact')} className="secondary-btn" />
            </div>
          )}
        </div>
        </Col>
        </Row>
      </Container>
    </ExtensionInnerBannerWrapper>
  )
};

export default Index;
