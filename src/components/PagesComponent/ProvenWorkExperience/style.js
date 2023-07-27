import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ProvenExperienceWrapper = styled.div`
  .section-heading {
    padding: 96px 0 43px;
  }
  .carousel-padding {
    padding-top: 30px;
    padding-left: 131px;
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
    }
    span {
      color: ${({ theme }) => theme.colors.primaryColor};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }
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
      padding: 0 0 96px 40px;
    `}
     ${media.xs`
      padding: 0 0 96px 20px;
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
    padding-left: 108px;
    ${media.md`
      padding-left: 12px;
      padding-top: 32px;
    `}
    div {
      padding-right: 144px;
      ${media.md`
        padding-right: 40px;
      `}
      img {
        object-fit: cover;
        min-width: 100%;
        height: 379px;
        border-radius: 24px;
        ${media.md`
          min-width: 100%;
        `}
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
`;

export default ProvenExperienceWrapper;
