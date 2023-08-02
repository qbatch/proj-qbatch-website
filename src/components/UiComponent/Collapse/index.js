import React,{ useState } from "react";
import CollpaseWrapper from './style'
import CollapseUp from '../../../assets/images/collapse-up.svg'
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function Example(props) {
  const { title, children, open, onClick } = props;


  return (
    <CollpaseWrapper>
      <div className="collpase-select d-flex justify-content-between">
        <span className="title">{title}</span>
        <CollapseUp onClick={onClick} className="pointer" />
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">{children}</div>
      </Collapse>
    </CollpaseWrapper>
  );
}

export default Example;
