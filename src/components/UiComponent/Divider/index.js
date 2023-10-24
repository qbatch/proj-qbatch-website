import React from 'react';
import styled from 'styled-components';

const Divider = styled.hr`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.dividerColor};
  width: 100%;
  margin: ${(props) => (props.margin ? props.margin : '2px 0')};
`

const Index = (props) => {
  const { margin } = props;
  return <Divider margin={margin} />
}

export default Index
