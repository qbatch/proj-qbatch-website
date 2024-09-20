import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const EventHighlightBanner = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0;
  `}
  .event-heading {
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 32px;
  }
  .event-image {
    width: 100%;
  }
  .event-wrapper{
    padding: 28px 0px 28px 22px;
    ${media.customBrakePoint`
      padding: 0 24px 24px;
    `}
    .blog-badge {
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
    .event-title {
      margin: 16px 0 48px;
      h2 {
        color: ${({ theme }) => theme.colors.bodyTextVariant};
        margin-bottom: 24px;
        cursor: pointer;
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
        &:last-child {
          margin-bottom: 0;
        }
      }
      span{
        color: ${({ theme }) => theme.colors.bodyLight};
      }
    } 
  }
`

export default EventHighlightBanner;
