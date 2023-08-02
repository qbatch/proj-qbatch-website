import React from "react";
import Form from "react-bootstrap/Form";
import CheckBoxWrapper from "./style";

function CheckReverseExample(props) {
    const { label, onChange, checked, className, value, height,name, width, marginLeft, fontSize, marginBottom } = props;
  return (
    <CheckBoxWrapper
      width={width}
      height={height}
      marginLeft={marginLeft}
      fontSize={fontSize}
      marginBottom={marginBottom}
    >
      <Form>
        <Form.Check
          className={className}
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          type={"checkbox"}
        />
      </Form>
    </CheckBoxWrapper>
  );
}

export default CheckReverseExample;
