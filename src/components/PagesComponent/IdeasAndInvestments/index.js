import React, { lazy } from "react";
import { navigate } from 'gatsby'
import { Container } from "react-bootstrap";

const Button  = lazy(() => import("../../UiComponent/Button"));

import IdeasWrapper from "./style";

const Index = (props) => {
  const { heading, span, isButton, className, btnText, headingSize, align, caption } = props
  return (
    <IdeasWrapper className={className}>
      <Container>
        <div className="">
          <h2 className={`text-h1 heading ${headingSize}`}>
            {heading} {span && <span className="inner-heading">{span}</span>}
          </h2>
          {caption && <span className="caption">{caption}</span> }
          {isButton && (
            <div className={`idea-btn ${align}`}>
              <Button text={btnText} onClick={() => navigate('/contact')} className="secondary-btn" />
            </div>
          )}
        </div>
      </Container>
    </IdeasWrapper>
  )
};

export default Index;
