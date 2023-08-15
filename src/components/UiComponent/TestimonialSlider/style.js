import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ProvenExperienceWrapper = styled.div`
  .section-heading {
    padding: 96px 0 43px;
    ${media.sm`
      padding: 40px 0 40px;
    `}
  }
  .video-wrapper{
    .video-react{
      padding-top : 372px !important;
      ${media.md`
      padding-top: 200px !important;
      `}
    }
  }
  .testimonial-title {
    display: flex;
    align-items: center;
    svg{
      height: 40px;
      width: 50px;
    }
    .inner-text{
      padding-left: 16px;
    }
    h4 {
      font-weight: 700;
      line-height: 28px;
      margin: 0;
    }
    p {
      color: ${({ theme }) => theme.colors.primaryColor};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      margin: 0;
    }
  }
  .bottom-slider{
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
    position: static;border-radius: 24px 24px 0px 24px;
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
`;

export default ProvenExperienceWrapper;
