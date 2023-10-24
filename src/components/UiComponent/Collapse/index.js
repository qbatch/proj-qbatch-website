import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import { BsPlusLg, BsDashLg } from 'react-icons/bs';
import CollapseUp from '../../../assets/images/collapse-up.svg';
import CollapseDown from '../../../assets/images/collapse-down.svg';

import CollapseWrapper from './style';

function Example(props) {

  const { title, children, open, onClick, content, faqSection } = props;

  const openIcon = faqSection ? (
    <BsDashLg className="color-primary pointer fs-24" onClick={onClick} />
  ) : (
    <CollapseDown onClick={onClick} className="pointer" />
  )
  const closeIcon = faqSection ? (
    <BsPlusLg className="color-primary pointer fs-24" onClick={onClick} />
  ) : (
    <CollapseUp onClick={onClick} className="pointer" />
  )

  return (
    <CollapseWrapper faqSection={faqSection}>
      <>
        <div className="collapse-select d-flex justify-content-between">
          <span className="title">{title}</span>

          {open ? openIcon : closeIcon}
        </div>
        <div className="collapse-content">{content}</div>
      </>
      <Collapse in={open}>
        <div id="example-collapse-text">{children}</div>
      </Collapse>
    </CollapseWrapper>
  )
}

export default Example;
