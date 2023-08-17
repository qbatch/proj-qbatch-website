import React from 'react';
import PrimaryButtonWrapper from './style'

const Index = (props) => {
  const { color, borderBottom, text, onClick } = props;
  return (
    <PrimaryButtonWrapper color={color} borderBottom={borderBottom} onClick={onClick}>
      <span className='btn-text'>{text}</span>
      <img src="/footer-right-arrow.svg" alt="arrow" />
    </PrimaryButtonWrapper>
  );
};
export default Index;
