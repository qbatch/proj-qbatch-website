import React from "react";
import ButtonWrapper from "./style";

import ArrowRight from "../../../assets/images/icons/arrow-right.svg";

const index = (props) => {
    
  const { text } = props;

  return (
    <ButtonWrapper variant="text">
      {text}
      <div className="button-icon">
        <div><ArrowRight /></div>
      </div>
    </ButtonWrapper>
  );
};

export default index;
