import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'
const SliderWrapper = styled.div`
  padding: 96px 0 110px;
  ${media.sm`
    padding: 56px 0;
  `}
  &.web-app-development-wrapper {
    padding: 96px 0 72px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    align-items: center;

    .upper-heading{
      max-width: 580px;
      ${media.lg`
        margin-bottom: 56px;
      `}
    }
    ${media.sm`
    padding: 56px 0 42px;
  `}
  ${media.lg`
    display:block;
    flex-wrap:initial; 
      `}
  .sub-paragraph{
    margin-top: 24px;
  }
    &.upper-heading {
    max-width: 573px;
}
    .slider-width {
    max-width: 692px;
}
}
&.humanizing-health-care-slider{
  padding-top: 0px;
  padding-bottom: 96px;
  .upper-heading.text-left {
    margin-bottom: 72px;
}
.title{
  text-align:left;
}
.content{
  text-align:left;
}
}
  &.five-step-slider{
    ${media.sm`
    .upper-heading{
      h2{
        margin-bottom:12px;
      }
    }
    `}
  }
  &.our-secret-slider{
  .upper-heading{
    text-align:center;
    h4{
      margin-bottom:16px;
    }
  }
  .paragraph{
    margin-bottom:40px;
  }
  }
  &.our-secret-sauce{
    ${media.sm`
   .upper-heading{
      h2{
        margin-bottom:12px;
      }
    }
    `}
  }
  &.explore-slider{
  ${media.sm`
   .upper-heading{
      h2{
        margin-bottom:12px;
      }
    }
    `}
  }
  &.full-suite-of-custom{
  ${media.sm`
   .upper-heading{
      h2{
        margin-bottom:12px;
      }
    }
    `}
    .title{
    .upper-text{
       font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
       font-weight: ${({ theme }) => theme.fontWeight.bold};
       text-transform: none;
    }
    .lower-text{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      color: ${({ theme }) => theme.colors.primaryColor};
      text-transform: none;

    }
  }
}
&.mvp-slider{
  .slider-data{
    .title{
    margin-bottom: 8px;
    }
  }
  .title{
    .upper-text{
       font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
       font-weight: ${({ theme }) => theme.fontWeight.bold};
       text-transform: none;
    }
    .lower-text{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      color: ${({ theme }) => theme.colors.primaryColor};
      text-transform: none;

    }
}
}
  &.developers-trust-slider{
    ${media.sm`
    .upper-heading{
      h2{
        margin-bottom:12px;
      }
    }
    `}
  }
  &.devops-slider{
    ${media.sm`
    .upper-heading{
      h2{
        margin-bottom:12px;
      }
    }
    `}
    .paragraph{
      max-width: 608px;
      margin: auto;
      margin-bottom: 72px;
    }
}
  &.devops-slider{
  }

  &.saas-slider{
    .upper-heading{
      margin-bottom: 48px;
      ${media.md`
        margin-bottom: 20px;
      `}
      h2{
        ${media.md`
          margin-bottom: 12px;
        `}
      }
      .paragraph{
        max-width: 1081px;
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        line-height: 32px;
        ${media.md`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
          line-height:24px;
        `}
      }
    }
  }
  &.competency-slider{
    ${media.sm`
      .make-responsive{
        margin:0px;
        margin-top:0px !important;
      }
      `}
    .upper-heading{
    ${media.sm`
      p{
        margin:0px;
      }
      `}
      h2{
        ${media.sm`
            margin-bottom:32px;
          `}
      }
    }
  }
  &.custom-interprise-services{
    .upper-heading {
      margin-bottom: 32px;
      ${media.sm`
        margin-bottom:24px;
        h2{
          margin-bottom:12px;
        }
        p{
          margin: 0px;
        }
      `}
    }
  }
  &.lost-to-launched-mb{
    p.paragraph {
    margin: 0px;
}
      .make-responsive {
        margin-top: 0px !important;
        grid-row-gap:0px !important;
    }
  }
  &.enterprise-software{
    .upper-heading{
      h2{
        margin-bottom:12px;
      }
    ${media.sm`
    .paragraph{
        margin-bottom:48px;
      }
      `}
    }
  }
  &.automation-section{
    .upper-heading{
      h2{
        margin-bottom:12px;
      }
    ${media.sm`
    .paragraph{
        margin-bottom:48px;
      }
      `}
    }
  }
  &.lost-to-launched{
    ${media.sm`
    .make-responsive{
        margin:0px !important;
      }
        &.cto-slider-wrapper{
    ${media.sm`
     .make-responsive{
      margin-bottom:24px !important;
    }
    `}
  }
    `}
    .upper-heading{
    ${media.sm`
        margin-bottom: 20px;
      `}
    }
  }
  &.lost-to-launched{
    .upper-heading{
      margin-bottom:32px;
      ${media.sm`
        margin-bottom: 20px;
      `}
      h2{
        ${media.sm`
            margin-bottom:12px;
          `}
      }
    }
    &.product-design {
      .upper-heading{
        p {
          max-width: 930px;
        }
      }
    }
  }
  .slider-width {
    max-width: 1020px;
    margin: 0 auto;
  }
  ${media.sm`
        .make-responsive {
      flex-direction: column;
      margin-top:24px;
    }
    `}
    ${media.xs`
    .make-responsive {
      img{
        width:fit-content;
        height: fit-content;
      }
    }
    `}
    @media(max-width:575px){
      .slick-next{
        right:0px
      }
    }
  .upper-heading {
    .inner-heading-paragraph{
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      margin-bottom:16px;
      display: block;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
    }
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 24px;
      text-transform:none;
    }
    p {
      max-width: ${(props) => (props.maxWidth ? props.maxWidth : '')};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      font-weight:400;
      margin: auto;
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
      ${media.sm`
      line-height:32px;
      `}
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
            color:transparent;
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
  &.we-work-slider {
    .upper-heading {
      p {
        max-width: 820px;
        margin: 0 auto;
        span {
          color: ${({ theme }) => theme.colors.primaryColor};
          font-weight: ${({ theme }) => theme.fontWeight.bold};
        }
      }
      .paragraph {
        margin-bottom: 24px;
      }
      .sub-paragraph {
        margin-bottom: 96px;
        ${media.sm`
          margin-bottom: 56px;
        `}
      }
    }
  }
`

export default SliderWrapper;
