import React from 'react';
import PrimaryButtonWrapper from './style'

const Index = (props) => {
  const { color, borderbottom, text, onClick } = props;

  return (
    <PrimaryButtonWrapper color={color} borderbottom={borderbottom} onClick={onClick}>
      <span className="btn-text">{text}</span>
      <img src="/footer-right-arrow.svg" alt="arrow" />
    </PrimaryButtonWrapper>
  );
};
export default Index;
