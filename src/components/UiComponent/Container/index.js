import React from "react";
import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const Container = styled.div`
  padding: 0 96px;
  ${media.lg`
  padding: 0 80px;
  `}
  ${media.md`
  padding: 0 60px;
  `}
    ${media.sm`
  padding: 0 40px;
  `}
      ${media.xs`
  padding: 0 20px;
  `}
`;
export default Container;
