import React from "react";
import Form from "react-bootstrap/Form";

import RadioWrapper from "./style";

function CheckExample(props) {
  const { label, value, onChange, checked, name } = props;

  return (
    <RadioWrapper>
      <Form.Check
        type="radio"
        checked={checked}
        label={label}
        value={value}
        name={name || "collaboration"}
        onChange={onChange}
      />
    </RadioWrapper>
  );
}

export default CheckExample;
