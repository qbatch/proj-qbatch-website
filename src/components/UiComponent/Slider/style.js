import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'
const SliderWrapper = styled.div`
  padding: 96px 0;
  ${media.sm`
    padding: 40px 0;
  `}
  &.devops-slider{
    .paragraph{
      max-width: 608px;
      margin: auto;
    }
  }
  .slider-width {
    max-width: 1020px;
    margin: 0 auto;
  }
  ${media.sm`
        .make-responsive {
      flex-direction: column;
    }
    `}
  .upper-heading {
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 24px;
    }
    p {
      max-width: ${(props) => (props.maxWidth ? props.maxWidth : '')};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      ${media.sm`
        max-width: 100%;
    `}
    }
  }
  .slider-data {
    ${media.sm`
    text-align: center;
  `}
    .title {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-weight: 600;
      margin-bottom: 16px;
    }
    .content {
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      line-height:24px;
      color: ${({ theme }) => theme.colors.textMedium};
      max-width: 400px;
      ${media.sm`
        max-width: 100%;
      `}
      ${media.xs`
        padding: 0 10px;
      `}
    }
    ul {
      margin-top: 24px;
      list-style: disc;
      padding-left: 24px;
      li {
        color: ${({ theme }) => theme.colors.textMedium};
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        margin-bottom: 8px;
      }
    }
  }
  .slick-dots {
    li {
      margin: 0px;
      &.slick-active {
        margin-right: 24px;
        button {
          &::before {
            background-color: ${({ theme }) => theme.colors.primaryColor};
            width: 32px;
            height: 8px;
            border-radius: 50px;
            opacity: 1;
          }
        }
      }
      button {
        &::before {
          background-color: ${({ theme }) => theme.colors.dividerColor};
          height: 8px;
          width: 8px;
          border-radius: 50px;
          opacity: 1;
          color: transparent;
        }
      }
    }
  }
`

export default SliderWrapper;
