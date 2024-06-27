import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ProvenExperienceWrapper = styled.div`
  .section-heading {
    padding: 96px 0 24px;
    .extension-slider{
      .heading{
        text-transform: none;
      }
    }
    .heading {
      padding-bottom: 24px;
      text-transform: capitalize;
      ${media.sm`
      padding-bottom: 12px;
      `}
    }
    .paragraph {
      margin-bottom: 0;
      font-weight: 400;
    }

    .saas-dev-experience{
      margin-bottom: 56px;
      p{
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
        line-height: 32px;
      }
    }
    ${media.sm`
      padding: 56px 0  24px;
    `}
  }
  .carousel-padding {
    padding-left: 153px;
    ${media.lg`
      padding-left: 51px;
    `}
    ${media.md`
      padding-left: 12px;
      padding-top: 0;
    `}
  }
  .project-title {
    h3 {
      letter-spacing: 0.2px;
      margin-top: 32px;
      margin-bottom: 5px;
      color: ${({ theme }) => theme.colors.midGray};
      ${media.xs`
        margin-top: 20px;
      `}
    }
    span {
      color: ${({ theme }) => theme.colors.primaryColor};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    }
  }
  .container-slider {
    padding: 0 0 96px 74px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    ${media.lg`
      padding: 0 0 96px 74px;
    `}
    ${media.md`
      padding: 0 0 96px 60px;
    `}
      ${media.sm`
      padding: 0 40px 56px ;
    `}
  }
  .section-slider {
    position: relative;
    overflow: hidden;
  }
  .project-tags {
    margin-top: 24px;
    gap: 8px;
    div {
      padding: 3px 7px;
      border: 1px solid ${({ theme }) => theme.colors.bodyLight};
      color: ${({ theme }) => theme.colors.textMedium};
      border-radius: 2px;
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      white-space: nowrap;
    }
  }
  .projects-carousel {
    ${media.md`
      padding-top: 32px;
    `}
    .qb-carousel-item {
      padding-right: 144px;
      ${media.md`
        padding-right: 40px;
      `}
    }
    div {
      img {
        object-fit: cover;
        width: 100%;
        border-radius: 24px;
        border-bottom-right-radius: 0;
        /* this code is commented because this create issue with image */
        /* height: 444px;
        ${media.md`
          height: 375px;
          width: 100%;
        `} */
        /* this code is commented because this create issue with image */
        
      }
    }
  }
  .react-multi-carousel-list {
    position: static;
  }
  .carousel-button-group {
    margin-top: 72px;
    gap: 12px;
    ${media.md`
      margin-top: 32px;
    `}
    svg {
      cursor: pointer;
    }
    span {
      color: ${({ theme }) => theme.colors.textMedium};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      display: flex;
      align-items: center;
      gap: 4px;
      &:first-child {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
      &:nth-child(2) {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      }
    }
  }
  @media (min-width: 1600px) {
    .section-slider {
      max-width: 1600px;
      margin: 0 auto;
    }
  }
`

export default ProvenExperienceWrapper;
