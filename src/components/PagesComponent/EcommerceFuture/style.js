import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const EcommerceFutureWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0px;
  `}
  ${media.md`
    .estate-business{
      text-align: center;
      display: flex;
    flex-direction: column;
    align-items: center;
    }
    `}
  .img-desc{
    display: flex;
    justify-content: center;
    align-items: center;
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
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      color: ${({ theme }) => theme.fonts.bodyTextVariant};
      line-height: 32px;
      margin-bottom: 32px;
      ${media.mobile`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
          line-height: 24px;
        `}
    }
  }
`

export default EcommerceFutureWrapper;
