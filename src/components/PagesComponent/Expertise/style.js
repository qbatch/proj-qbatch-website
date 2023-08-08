import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ExpertiseWrapper = styled.section`
  .base-space {
    padding: 94px 0;
    padding-bottom: 88px;
    ${media.sm`
      padding: 40px 0;
    `}
  }
  .padding-0 {
    ${media.sm`
    padding: 0px;
  `}
  }
  .heading {
    margin-right: 83px;
    ${media.md`
           margin-right: 32px;
    `}
  }
  .skill-section {
    position: relative;
    padding-top: 16px;
    margin-bottom: 33px;
    .skill-badge {
      border: 1px solid ${({ theme }) => theme.colors.bodyLight};
      padding: 3px 8px;
      color: ${({ theme }) => theme.colors.bodyLight};
      border-radius: 2px;
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.dividingColor};
      bottom: -24px;
    }

    .add-gap {
      gap: 32px;
    }
    .title {
      margin-bottom: 9px;
    }
    .badges-gap {
      gap: 7px;
    }
  }
  .arrow-box {
      width: 60px;
      height: 60px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.5s ease-out 100ms;
      ${media.md`
       width: 40px;
       height: 40px;
      `}

      svg {
        transition: width 0.5s ease-out 100ms;
        color: ${({ theme }) => theme.colors.dangerColor};
        width: 46px;
        pointer-events: none;
        ${media.md `
         width: 40px;
        `}
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryColor};
        svg {
          width: 28px;
          color: #ffffff;
          ${media.md`
         width: 24px;
         `}
        }
        
      }
    }
`;
export default ExpertiseWrapper;
