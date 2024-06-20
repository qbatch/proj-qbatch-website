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
    btnAlign,
    paragraph,
    headingMaxWidth,
    wrapperClass,
    btnSpacingTop = 24,
    bannerImg
  } = props;

  const headingStyle = {
    maxWidth: headingMaxWidth || 'none',
  };

  const buttonStyle = {
    marginTop: btnSpacingTop,
  };

  return (
    <ExtensionInnerBannerWrapper className={className}>
      <Container>
        <Row className="g-0 align-items-center justify-content-between">
          <Col xl={4} lg={0} className="d-xl-flex d-none">
            <img className="banner-inner-img d-xl-block d-none" src={bannerImg} />
          </Col>
          <Col xl={8}>
          <div className={wrapperClass}>
          <h2 style={headingStyle} className={`text-h2 heading ${headingSize}`}>
            {heading} {span && <span className="inner-heading">{span}</span>}
          </h2>
            {paragraph && <p className="paragraph">{paragraph}</p> }
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
