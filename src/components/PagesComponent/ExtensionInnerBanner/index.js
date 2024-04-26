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
    btnSpacingTop = 24
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
        <Row className="g-5 align-items-center justify-content-between">
          <Col xl={5} lg={0}>
            <img className="banner-inner-img d-xl-block d-none" src="/extension-inner-banner.png" />
          </Col>
          <Col xl={6}>
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
