import React from "react";
import Form from "react-bootstrap/Form";

import Input from "./style";

function TextControlsExample(props) {
    const { placeholder, type, as, height, base } = props;
    
  return (
    <Input height={height} base={base || ""}>
      <Form.Group className="bottom-space">
        <Form.Control as={as} type={type} placeholder={placeholder} />
      </Form.Group>
    </Input>
  );
}

export default TextControlsExample;
