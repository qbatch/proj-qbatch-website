import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'
const SliderWrapper = styled.div`
  padding: 96px 0;
  ${media.xs`
    padding: 56px 0;
  `}
  
  &.mvp-slider{
    .upper-heading h2{
      margin-bottom: 16px;
    }
    .paragraph{
      display: block;
      margin: auto;
    }
    .inner-heading-paragraph{
    display: block;
    color: ${({ theme }) => theme.colors.bodyTextVariant};
    padding-bottom:16px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  .title{
    .upper-text{
       font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
       font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
    .lower-text{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
  }
    .paragraph{
      max-width: 608px;
      margin: auto;
    }
  &.devops-slider{
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
    ${media.xs`
    .make-responsive {
      img{
        width:fit-content;
      }
    }
    `}
    @media(max-width:575px){
      .slick-next{
        right:0px
      }
    }
  .upper-heading {
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 24px;
      text-transform:none;
    }
    p {
      max-width: ${(props) => (props.maxWidth ? props.maxWidth : '')};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      font-weight:400;
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
      font-weight: 700;
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
        text-align:left;
      }
    }
  }

  &.extension-dev-slider{
    .title{
      text-transform: none;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
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
