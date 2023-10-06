import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const OurProjectWrapper = styled.div`
padding: 96px 0;
${media.sm`
     padding: 40px 0px;
  `}
  .section-heading {
    padding-bottom: 62px;
    h2{
      font-weight: 700;
      line-height: 48px;
      margin-bottom: 24px;
    }
    p{
      line-height: 35px;
    }
    ${media.sm`
      padding-bottom: 40px;
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
    }
    span {
      color: ${({ theme }) => theme.colors.primaryColor};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }
  }
  .container-slider {
    padding: 0 0 66px 74px;
    ${media.lg`
      padding: 0 0 96px 74px;
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
    .qb-carousel-item{
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
        ${media.md`
          width: 100%;
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
  @media(min-width:1920px){
    .section-slider {
      max-width:1920px;
      margin:0 auto;
    }
  }
  .slider-paragraph{
    max-width: 1196px;
    font-weight: 400;
    line-height: 32px;
    margin-bottom: 0;
  }
`;

export default OurProjectWrapper;