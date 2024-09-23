import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const HelpWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0;
  `}
  h2 {
    margin-bottom: 32px;
    ${media.sm`
      margin-bottom: 24px;
      text-align: center;
    `}
  }
  .event-col {
    display: flex;
    flex-direction: column;
    ${media.lg`
      margin-bottom: 24px;
      &:last-child {
        margin-bottom: 0;
      }
    `}
  }
`
const Card = styled.div`
  border-radius: 16px 16px 0px 16px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid ${({ theme }) => theme.colors.dividerColor};
  flex: 1;
  .event-img {
    height: 240px;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
    ${media.xs`
      height: 210px;
    `}
  }
  .title-box {
    padding: 32px 32px 24px;
    ${media.mobile`
      padding: 16px 12px 24px;
    `}
    h3 {
      margin-bottom: 4px;
      color:${({ theme }) => theme.colors.bodyTextVariant};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      ${media.mobile`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        margin-bottom: 8px;
      `}
    }
    p {
      color: ${({ theme }) => theme.colors.bodyLight};
      line-height: 18px;
      margin-bottom: 24px;
      ${media.mobile`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
      `}
    }
  }
  .event-date {
    span {
      color: ${({ theme }) => theme.colors.textMedium};
      ${media.mobile`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      `}
    }
    div:nth-child(2) {
      span {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
        color: ${({ theme }) => theme.colors.bodyLight};
      }
    }
  }
`
export { HelpWrapper, Card }
