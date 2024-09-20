import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const PreviousEventsWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 40px 0;
  `}
  h2 {
    margin-bottom: 48px;
  }
  .img-height {
    height: 545px;
    object-fit: cover;
  }
  .gallary-img {
    position: relative;
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
      h3 {
        color: ${({ theme }) => theme.colors.whiteColor};
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
      }
    }
  }
`

export default PreviousEventsWrapper;
