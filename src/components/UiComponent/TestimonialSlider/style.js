import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ProvenExperienceWrapper = styled.div`
  .section-heading {
    padding: 96px 0 43px;
    ${media.sm`
      padding: 40px 0 40px;
    `}
  }
  .testimonial-wrapper {
    padding: 36px 24px;
    background: linear-gradient(180deg, #E8F4FF 0%, #E8F4FF 100%);
    border-radius: 24px 24px 0 24px;
    min-height: 372px;
    ${media.sm`
      min-height: 324px;
    `}
    .client-image {
      border-radius: 50%;
      height: 84px;
      width: 84px;
      object-fit: cover;
      object-position: center;
      ${media.sm`
        height: 70px;
        width: 70px;
      `}
    }
    .testimonial-text {
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      margin-top: 36px;
      line-height: 32px;
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        margin-top: 24px;
        line-height: 24px;
      `}
    }
  }
  .testimonial-title {
    h4 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 4px;
    }
    p {
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      margin: 0;
      line-height:16px;
    }
  }
  .bottom-slider {
    position: relative;
    margin-top: 36px;
  }
  .container-slider {
    padding: 0 0 96px 96px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    ${media.lg`
      padding: 0 0 96px 80px;
    `}
    ${media.md`
      padding: 0 0 96px 60px;
    `}
      ${media.sm`
      padding: 0 0 40px 40px;
    `}
     ${media.xs`
      padding: 0 0 40px 20px;
    `}
  }
  .react-multi-carousel-list {
    position: static;
    border-radius: 24px 24px 0px 24px;
    overflow: hidden;
  }
  .carousel-button-group {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    gap: 12px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    svg {
      cursor: pointer;
    }
    span {
      color: ${({ theme }) => theme.colors.disableColor};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      display: flex;
      align-items: center;
      gap: 4px;
      &:first-child {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
      &:nth-child(2) {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
        font-weight: ${({ theme }) => theme.fontWeight.light};
      }
    }
  }
`

export default ProvenExperienceWrapper;
