import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const PreviousEventsWrapper = styled.div`
  padding: 96px 0 120px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0 80px;
  `}
  h2 {
    margin-bottom: 48px;
    ${media.sm`
      margin-bottom: 32px;
    `}
    ${media.mobile`
      margin-bottom: 24px;
    `}
  }
  .gallary-img {
    position: relative;
    flex: 1;
    .card-img {
      object-fit: cover;
      height: 100%;
      max-height: 570px;
    }
    .gallary-heading {
      opacity: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(1, 62, 121, 0) 0%, #013E79 100%);
      transition: all 0.3s ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 24px;
      .text-h3 {
        color: ${({ theme }) => theme.colors.whiteColor};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
        margin-bottom: 24px;
      }
      .event-details {
        div {
          padding-right: 24px;
          position: relative;
          span {
            color: ${({ theme }) => theme.colors.whiteColor};
            font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
            font-weight: ${({ theme }) => theme.fontWeight.medium};
            line-height: 16px;
          }
          &:first-child {
            &::after {
              content: '';
              position: absolute;
              right: 0;
              width: 1px;
              height: 14px;
              background-color: ${({ theme }) => theme.colors.whiteColor};
            }
          }
        }
      }
    }
    &:hover {
      .gallary-heading {
        opacity: 1;
        ${media.md`
          opacity: 0;
        `}
      }
    }
  }
`

export default PreviousEventsWrapper;
