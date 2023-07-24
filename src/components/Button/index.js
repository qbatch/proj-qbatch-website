import React from "react";
import ButtonWrapper from "./style";

import ArrowDown from "../../images/icons/arrow-right.svg";

const index = (props) => {
    
  const { text } = props;

  return (
    <ButtonWrapper variant="text">
      {text}
      <div className="button-icon">
        <div><ArrowDown /></div>
      </div>
    </ButtonWrapper>
  );
};

export default index;
