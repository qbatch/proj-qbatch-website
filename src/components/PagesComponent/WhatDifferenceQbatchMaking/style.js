import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const QbatchMakingWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .container-padding {
    padding: 120px 0;
    ${media.sm`
      padding: 56px 0;
    `}
  }
  .section-heading {
    margin-bottom: 72px;
    ${media.lg`
      margin-bottom: 56px
    `}
    p{
      max-width: 469px;
      margin: auto;
    }
    ${media.sm`
      margin-bottom:12px;
    `}
    .heading {
      margin-bottom: 24px;
      ${media.sm`
      margin-bottom:0px;
    `}
    }
    p {
      ${media.xs`
        line-height: 24px;
      `}
    }
  }
  .row{
   ${media.lg`
     h3{
      font-size: 28px;
     }
   `}
   ${media.md`
     h3{
      font-size: 24px;
     }
   `}
   ${media.sm`
   margin-top: 32px;
     h3{
      font-size: 20px;
     }
   `}
   ${media.xs`
     h3{
      font-size: 16px;
     }
   `}
  }
  .challenges-section {
    margin-top: 24px;
    ${media.sm`
    margin-top: 32px;
    `}
    p {
      margin-bottom: 0;
    }
    .challenges-box {
      margin-bottom: 40px;
      align-items: center;
      &:last-child{
        margin-bottom: 0;
      }
      ${media.xs`
        margin-bottom: 16px;
      `}
      p {
        ${media.xs`
          font-size: 12px;
          line-height:16px;
        `}
      }
    }
    .challenges-icons {
      img {
        ${media.xs`
          min-width: 20px;
        `}
      }
    }
    .gradient-arrow {
      width: 100%;
      min-width: 30px;
      position: relative;
      height: 2px;
      background: linear-gradient(
        to right,
        rgba(237, 28, 36, 1),
        rgba(0, 84, 166, 1)
      );
      ${media.xs`
        height: 1px;
      `}
      svg {
        position: absolute;
        right: -9px;
        top: -12px;
        max-width: none;
        color: rgba(0, 84, 166, 1);
        ${media.xs`
          width: 20px;
          height: 20px;
          right: -7px;
          top: -9.5px;
        `}
      }
    }
  }
`;

export default QbatchMakingWrapper;
