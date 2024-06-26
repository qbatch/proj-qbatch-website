import React from "react";
import { navigate } from 'gatsby'
import { Container } from "react-bootstrap";

import Button from "../../UiComponent/Button";

import InnerBannerWrapper from "./style";

const Index = (props) => {
  const {
    heading,
    span,
    isButton,
    className,
    btnText,
    headingSize,
    btnAlign,
    caption,
    headingMaxWidth,
    wrapperClass,
    btnSpacingTop = 24,
    captionClass
  } = props;

  const headingStyle = {
    maxWidth: headingMaxWidth || 'none',
  };

  const buttonStyle = {
    marginTop: btnSpacingTop,
  };

  return (
    <InnerBannerWrapper className={className}>
      <Container>
        <div className={wrapperClass}>
          <h2 style={headingStyle} className={` ${headingSize} heading`}>
            {heading} {span && <span className="inner-heading">{span}</span>}
          </h2>

          {caption && <span className={` ${captionClass} caption`}>{caption}</span> }
            {isButton && (
            <div style={buttonStyle} className={`idea-btn d-flex justify-content-${btnAlign}`}>
              <Button text={btnText} onClick={() => navigate('/contact')} className="secondary-btn" />
            </div>
          )}
        </div>
      </Container>
    </InnerBannerWrapper>
  )
};

export default Index;
