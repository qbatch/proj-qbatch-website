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
    textArea,
    error,
    pattern,
    isInvalid
  } = props;

  return (
    <Input height={height} base={base || ""}>
      <Form.Group className="bottom-space">
        {textArea ? <Form.Control as="textarea" placeholder={placeholder} /> : <Form.Control
          as={as}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          pattern={pattern}
          isInvalid={isInvalid}
        />}
        {error ? <p className="error-text">{error}</p> : null}
      </Form.Group>
    </Input>
  );
}

export default TextControlsExample;
