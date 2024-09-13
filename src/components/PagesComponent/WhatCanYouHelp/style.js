import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HelpWrapper = styled.div`
  padding: 122px 0 98px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0;
  `}
  .add-top-space {
    margin-top: 74px;
  }
  .add-top-space {
    ${media.sm`
    margin-top:32px;
    `}
  }
  h2 {
    ${media.sm`
      text-align: center;
    `}
  }
`
const Card = styled.div`
  border-radius: 24px 24px 0px 24px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid ${({ theme }) => theme.colors.dividerColor};
  min-height: 490px;
  margin-bottom:24px;
  ${media.sm`
    min-height: auto;
    `}
  img {
    width: 100%;
    ${media.xs`
      height: 210px;
      object-fit: cover;
      border-radius: 24px 24px 0 0;
    `}
  }
  .title-box {
    padding: 24px;
    min-height: 186px;

    h3 {
      line-height: 32px;
      margin-bottom: 18px;
      min-height: 20px;
      font-weight: 700;
      color:${({ theme }) => theme.colors.bodyTextVariant}
      ${media.sm`
        min-height: auto;
        line-height: 24px;
        margin-bottom:8px;
      `}
      ${media.mobile`
      font-size: 24px;
        line-height: 32px;
      `}
    }
    p {
      color: ${({ theme }) => theme.colors.textMedium};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      line-height: 24px;
      ${media.mobile`
      font-size: 16px;
        line-height: 24px;
      `}
    }
  }
`
export { HelpWrapper, Card }
