import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const RealEstateBusinessWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0px;
  `}
  .img-desc {
    h3 {
      color: ${({ theme }) => theme.colors.midGray};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      margin: 32px 0 0;
      max-width: 550px;
      ${media.mobile`
        margin: 24px 0 0;
        font-weight: ${({ theme }) => theme.fontWeight.medium};
      `}
    }
  }
  .estate-business {
    margin-top: 68px;
    ${media.mobile`
      margin-top: 32px;
    `}
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      max-width: 450px;
      margin-bottom: 16px;
    }
    ul {
      list-style: disc;
      padding-left: 32px;
      margin-bottom: 32px;
      ${media.mobile`
        margin-bottom: 12px;
      `}
      li {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        color: ${({ theme }) => theme.fonts.bodyTextVariant};
        line-height: 32px;
        ${media.mobile`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
          line-height: 24px;
        `}
      }
    }
  }
`

export default RealEstateBusinessWrapper;
