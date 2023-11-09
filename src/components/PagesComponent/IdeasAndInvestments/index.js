import React from "react";
import { Container } from "react-bootstrap";

import Button from "../../UiComponent/Button";

import IdeasWrapper from "./style";

const Index = (props) => {
  const { heading, span, isButton, className, btnText } = props;
  return (
    <IdeasWrapper className={className}>
      <Container>
        <div className="d-flex justify-content-between align-items-end flex-wrap">
          <h2 className="text-h1 heading">
            {heading} {span && <span className="inner-heading">{span}</span>}
          </h2>
          {isButton && (
            <Button text={btnText} className="secondary-btn" />
          )}
        </div>
      </Container>
    </IdeasWrapper>
  );
};

export default Index;
