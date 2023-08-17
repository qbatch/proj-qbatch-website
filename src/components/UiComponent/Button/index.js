import React from "react";

import ArrowRight from "../../../assets/images/icons/arrow-right.svg";

import ButtonWrapper from "./style";

const index = (props) => {
  const { text, className, type } = props;

  return (
    <ButtonWrapper variant="text" className={className}>
      {text}
      <div className="button-icon">
        <div><ArrowRight className={type}/></div>
      </div>
    </ButtonWrapper>
  );
};

export default index;
