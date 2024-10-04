import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const EventHighlightBanner = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0;
  `}
  .events-row {
    ${media.lg`
      border: 1px solid ${({ theme }) => theme.colors.dividerColor};
      border-radius: 34px 34px 0 14px;
    `}
    ${media.mobile`
      border-radius: 15px 15px 0 14px;
    `}
  }
  .event-heading {
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 32px;
  }
  .event-image {
    max-width: 761px;
    width: 100%;
    border-radius: 24px 24px 0 24px;
    ${media.lg`
      max-width: max-content;
      border-radius: 24px 24px 0 0;
    `}
    ${media.mobile`
      min-height: 217px;
      object-fit: cover;
      object-position: left;
      border-radius: 14px 14px 0 0;
    `}
  }
  .event-wrapper{
    padding: 28px 0px 28px 10px;
    ${media.customBrakePoint`
      padding: 0 24px 24px;
    `}
    ${media.lg`
      padding: 12px;
    `}
    ${media.mobile`
      padding: 16px 0 8px;
    `}
    .blog-badge {
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
    .event-title {
      margin: 16px 0 48px;
      ${media.lg`
        margin: 16px 0 32px;
      `}
      ${media.mobile`
        margin: 16px 0 24px;
      `}
      h2 {
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        margin-bottom: 24px;
        cursor: pointer;
        ${media.mobile`
          margin-bottom: 8px;
        `}
      }
      .event-desc {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 24px;
        p {
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          color: ${({ theme }) => theme.colors.bodyLight};
          line-height: 24px;
        }
      }
    }
    .event-date {
      div {
        margin-bottom: 16px;
        ${media.mobile`
          margin-bottom: 8px;
        `}
      }
      span{
        color: ${({ theme }) => theme.colors.bodyLight};
        ${media.mobile`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
        `}
      }
    } 
  }
`

export default EventHighlightBanner;
