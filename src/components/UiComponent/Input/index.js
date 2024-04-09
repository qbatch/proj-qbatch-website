import React from "react";
import Form from "react-bootstrap/Form";

import Input from "./style";

function TextControlsExample(props) {
  const {
    placeholder,
    type,
    as,
    height,
    base,
    onChange,
    name,
    value,
    required,
    pattern,
    isInvalid
  } = props;

  return (
    <Input height={height} base={base || ""}>
      <Form.Group className="bottom-space">
        <Form.Control
          as={as}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          pattern={pattern}
          isInvalid={isInvalid}
        />
      </Form.Group>
    </Input>
  );
}

export default TextControlsExample;
