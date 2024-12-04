import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const EcommerceDevelopmentWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0px;
  `}
  .img-desc{
    display: flex;
    justify-content: center;
  }
  .estate-business {
    margin-top: 68px;
    ${media.mobile`
      margin-top: 32px;
    `}
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 16px;
    }
    p{
      color: ${({ theme }) => theme.fonts.bodyTextVariant};
      margin-bottom: 16px;
      ${media.mobile`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
          line-height: 24px;
        `}
    }
  }
`

export default EcommerceDevelopmentWrapper;
