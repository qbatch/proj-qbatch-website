import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CollaborationWrapper = styled.div`
  padding: 96px 0 96px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .heading{ 
    margin-bottom: 24px;
  }
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
      margin-bottom:32px;
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
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        line-height: 24px;
      }
    }
    .collaboration-content {
      .skill-section {
        position: relative;
        padding-top: 32px;
        padding-bottom: 33px;
        border-bottom: 1px solid #D2D9DC;
        ${media.sm`
        gap:10px;
        padding-top: 16px;
        padding-bottom: 16px;
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
          margin-bottom: 8px;
          line-height: 40px;
          letter-spacing: 0.4px;
          text-transform: inherit;
          font-size:32px;
          font-weight:300;  
          ${media.sm`
          line-height:28px;
          margin-bottom:8px;
        `}
        ${media.xs`
          font-size:18px;
          line-height:20px;
          `}
        }
        p {
          font-size: ${({ theme }) => theme.fonts.baseFontSize};
          line-height: 24px;
          max-width: 585px;
          margin-bottom: 0;
          ${media.xs`
          font-size: ${({ theme }) => theme.fonts.baseFontSizeXs}; 
          line-height: 20px;
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
