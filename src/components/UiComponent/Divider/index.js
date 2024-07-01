import React from 'react';
import styled from "styled-components";
import { media } from '../../../theme/media-mixins';

const Divider = styled.hr`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.dividerColor};
  width: 100%;
  margin: ${(props) => (props.margin ? props.margin : "2px 0")};
  ${media.sm`
    margin: ${(props) => (props.margin ? '56px 0' : "2px 0")};
  `}
`;

const Index = (props) => {
  const { margin, className } = props;
  return <Divider className={className} margin={margin} />;
};

 export default Index;