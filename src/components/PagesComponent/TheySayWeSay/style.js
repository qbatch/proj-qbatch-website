import styled from "styled-components";
import { media } from "../../../theme/media-mixins";
const TheySayWeSayWrapper = styled.div`
padding: 120px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
padding: 56px 0px;
`}
.section-row{
  --bs-gutter-x: 71px;
  --bs-gutter-y: 71px;
  align-items: center;
}
  .img-wrapper{
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
    ${media.sm`
    justify-content: left;
    `}
    .side-img{
      max-width: 574px;
      max-height: 448px;
      object-fit: cover;
      object-position: center;
      ${media.lg`
        max-width: 100%;
      `}
      ${media.sm`
        max-width:250px;
    `}
    }
  }
  .heading{
    color: ${({ theme }) => theme.colors.primaryColor};
    padding-bottom: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 50px;
    ${media.sm`
    padding-bottom:8px;
    line-height:32px;
    `}
 
  }
  .sub-heading{
    color: ${({ theme }) => theme.colors.gradientColor};
    padding-bottom: 26px;
    line-height: 40px;
    letter-spacing: 0.32px;
    max-width: 573px;
    ${media.sm`
    padding-bottom:0px;
    line-height:32px;
    `}
    a{
      text-decoration: none;
      color: inherit;
    }
  }
  .paragraph{
    line-height: 32px;
    max-width: 565px;
    letter-spacing: 0;
    margin-bottom: 0;
    ${media.sm`
    padding-bottom:0px;
    line-height:24px;
    `}
  }
`;
export default TheySayWeSayWrapper;
