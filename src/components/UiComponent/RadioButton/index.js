import React from 'react';
import Form from "react-bootstrap/Form";
import RadioWrapper from './style'

function CheckExample(props ) {
  const { label, value, onChange, checked } = props;
  return (
    <RadioWrapper>
      <Form>
        <Form.Check
          type="radio"
          checked={checked}
          label={label}
          value={value}
          name="collaboration"
          onChange={onChange}
        />
      </Form>
    </RadioWrapper>
  );
}

export default CheckExample;
