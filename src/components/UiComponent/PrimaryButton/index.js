import React from 'react';
import PrimaryButtonWrapper from './style'

const Index = (props) => {
  const { color, borderBottom, text } = props;
  return (
    <PrimaryButtonWrapper color={color} borderBottom={borderBottom}>
    {text}
      <img src="/footer-right-arrow.svg" alt="arrow" />
    </PrimaryButtonWrapper>
  );
};
export default Index;
