import React from 'react';
import { css } from "styled-components";

 const breakpoints = {
   xs: "480px",
   sm: "767px",
   md: "991px",
   lg: "1199px",
 };
 const breakpointsMin = {
   xl: "1920px",
 };

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
