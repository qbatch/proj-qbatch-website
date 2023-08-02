import React,{ useState } from "react";
import CollpaseWrapper from './style'
import CollapseUp from '../../../assets/images/collapse-up.svg'
import CollapseDown from "../../../assets/images/collapse-down.svg";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function Example(props) {
  const { title, children, open, onClick, content } = props;


  return (
    <CollpaseWrapper>
      <>
        <div className="collpase-select d-flex justify-content-between">
          <span className="title">{title}</span>

          {open ? (
            <CollapseDown onClick={onClick} className="pointer" />
          ) : (
            <CollapseUp onClick={onClick} className="pointer" />
          )}
        </div>
        <div className="mt-2">{content}</div>
      </>
      <Collapse in={open}>
        <div id="example-collapse-text">{children}</div>
      </Collapse>
    </CollpaseWrapper>
  );
}

export default Example;
