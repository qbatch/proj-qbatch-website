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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
    padding: 48px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 24px 24px 0 24px;
    min-height: 350px;
    .client-image {
      border-radius: 160px;
      height: 158px;
      min-width: 158px;
      object-fit: cover;
      object-position: center;
    }
    .testimonial-text {
      color: ${({ theme }) => theme.colors.bodyText};
    }
    @media (max-width: 1399px) {
      padding: 32px;
      gap: 32px;
      .client-image {
        height: 130px;
        min-width: 130px;
        max-width: 130px;
      }
    }
    ${media.lg`
      padding: 32px 10px;
      .client-image{
        height: 120px;
        min-width: 120px;
        max-width: 120px;
      }
    `}
    ${media.sm`
       flex-wrap: wrap;
       text-align: center;
    `}
  }
  .testimonial-title {
    display: flex;
    align-items: center;
    svg {
      height: 40px;
      width: 50px;
    }
    .inner-text {
      padding-left: 16px;
    }
    p {
      color: ${({ theme }) => theme.colors.primaryColor};
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
