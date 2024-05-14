import styled from "styled-components";
import { media } from "../../../theme/media-mixins" 

const ManagementWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 122px 0;
  ${media.sm`
    padding: 56px 0;
  `}
  .text-h2 {
    color: ${({ theme }) => theme.colors.whiteColor};
    line-height: 52px;
    max-width: 1100px;
    margin: 0 auto 72px;
    font-weight:700;
    text-align: center;
    ${media.sm`
     margin: 0 auto 40px;
    line-height: 42px;
  `}
  ${media.sm`
  line-height: 32px;
  margin-bottom:48px;
  `}
  }
  .hover-box {
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    padding: 48px 32px 24px 32px;
    ${media.sm`
      padding: 30px 0 10px;
    `}

    cursor: pointer;
    h4 {
      color: ${({ theme }) => theme.colors.dividerColor};
      margin-bottom: 0;
      font-weight:400;
    }
    .description {
      height: 0;
      opacity: 0;
      max-width: 630px;
      transition: height 0.5s, opacity 0.5s;
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      line-height: 32px;
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        line-height:24px;
      `}
    }
    &:hover {
      .description {
        height: 136px;
        opacity: 1;
        ${media.sm`
        height: auto;
      `}
      }
    }
  }
  .add-space {
    margin-left: 27px;
    margin-top: 73px;
  }
`
export default ManagementWrapper;