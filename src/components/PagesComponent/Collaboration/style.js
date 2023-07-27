import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CollaborationWrapper = styled.div`
  padding: 96px 0;
  ${media.sm`
      padding:40px 0;
  `}
  .collaboration-inn {
    max-width: 930px;
    margin: 0 auto;
    .section-heading {
      margin-bottom: 72px;
      text-align:center;
      ${media.sm`
      text-align:left;
      margin-bottom:35px;
      `}
      h1 {
        margin-bottom: 24px;
        ${media.sm`
          margin-bottom:16px;
          `}
      }
      p {
        max-width: 736px;
        margin: 0 auto;
        line-height:1.4;
      }
    }
    .collaboration-content {
      .skill-section {
        position: relative;
        padding-top: 32px;
        margin-bottom: 33px;
        ${media.sm`
        gap:10px;
        padding-top: 16px;
        margin-bottom: 16px;
        `}
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
          bottom: -32px;
          ${media.sm`
          bottom: -16px;
        `}
        
        }

        .add-gap {
          gap: 32px;
          ${media.xs`
          gap:10px;
          `}
        }
        .list-icon{
          ${media.xs`
          min-width:30px;
          align-self: start;
          svg{
            height:30px;
          }
          `}
        }
        .title {
          margin-bottom: 12px;
          font-size: 32px;
          font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
          line-height: 40px;
          letter-spacing: 0.4px;
          ${media.sm`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
          line-height:28px;
          margin-bottom:8px;
        `}
        ${media.xs`
          font-size:18px;
          line-height:20px;
          width: 125%;

          `}
        }
        p {
          font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
          line-height: 24px;
          max-width: 588px;
          margin-bottom: 0;
          ${media.xs`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeXs}; 
          line-height: 16px;
          `}
        }
        .badges-gap {
          gap: 7px;
        }
        &:first-of-type {
          padding-top: 0;
        }
      }
      .arrow-box {
        width: 62px;
        height: 62px;
        min-width:62px;
        ${media.xs`
             width:40px;
             min-width:40px;
             height:40px;
    `}
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.5s ease-out 100ms;
        svg {
          font-size: 54px;
          transition: font-size 0.5s ease-out 100ms;
          color: ${({ theme }) => theme.colors.dangerColor};
          ${media.md`
             font-size: 32px;
    `}
        }
        &:hover {
          background-color: ${({ theme }) => theme.colors.primaryColor};
          svg {
            color: ${({ theme }) => theme.colors.whiteColor};
            font-size: 24px;
          }
        }
      }
    }
  }
`;

export default CollaborationWrapper;
