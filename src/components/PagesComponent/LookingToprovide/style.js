import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const LookingToProvideWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  padding: 96px 0;
  ${media.sm`
    padding: 40px 0;
    text-align: center;
  `}
section{
  display: flex;
  align-items: center;
  grid-gap: 72px;
  justify-content:center; 
  ${media.sm`
  flex-direction:column-reverse;
    `}
  img{
    ${media.md`
    width: 300px;
      `}
    ${media.sm`
    width: 327px;
      `}
  }
  h2{
    color:#0054A6;
    max-width: 624px;
    ${media.sm`
    text-align:left;
    `}
  }
  button.desktop{
    margin-top: 32px;
    ${media.sm`
    display: none;
      `}
  }
}
button.mobile{
  display:none;
  ${media.sm`
  display: flex;
  margin: auto;
  margin-top: 32px;
    `}
}
`;
export { LookingToProvideWrapper };
