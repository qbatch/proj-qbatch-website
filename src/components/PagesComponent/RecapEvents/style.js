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
`
const Card = styled.div`
  border-radius: 16px 16px 0px 16px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border: 1px solid ${({ theme }) => theme.colors.dividerColor};
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
    h3 {
      margin-bottom: 4px;
      color:${({ theme }) => theme.colors.bodyTextVariant};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
    p {
      color: ${({ theme }) => theme.colors.bodyLight};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      line-height: 16px;
      margin-bottom: 32px;
    }
  }
  .event-date {
    span {
      color: ${({ theme }) => theme.colors.textMedium};
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
