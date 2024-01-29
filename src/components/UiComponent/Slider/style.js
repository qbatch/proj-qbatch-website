import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'
const SliderWrapper = styled.div`
  padding: 96px 0;

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
      ${media.sm`
        max-width: 100%;
    `}
    }
  }
  .slider-data {
    .title {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-weight: 600;
      margin-bottom: 16px;
    }
    .content {
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      color: ${({ theme }) => theme.colors.textMedium};
      max-width:400px;
      ${media.sm`
        max-width: 100%;
    `}
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
