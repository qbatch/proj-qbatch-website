import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CreativeIntelligenceWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 96px 0 96px;
  background-image: url("/creativity-background.svg");
  background-repeat: no-repeat;
  background-position: top;
  ${media.md`
  background-position: -271px 14px;
    background-size: cover;
  `}
  ${media.sm`
    padding: 40px 0 40px;
    background-image: none;
  `}
  .creative-content {
    max-width: 844px;
    margin: 0 auto;
    .creative-quote {
      min-width: 52px;
      padding-top: 6%;
      ${media.mobile`
       display: none;
    `}
    }
    .creative-content-inn {
      gap: 44px;
      ${media.xs`
        gap:20px;
    `}
    }
    span {
      font-weight: 400;
      letter-spacing: 0.48px;
      color: ${({ theme }) => theme.colors.dividerColor};
      position: relative;
      margin-bottom: 19px;
      display: block;
      &:after {
        content: "";
        position: absolute;
        height: 1px;
        width: 24px;
        bottom: -3px;
        background-color: ${({ theme }) => theme.colors.dangerColor};
        left: 0;
      }
    }
    h2 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 2px;
      line-height: 72px;
      font-size: 68px;
      ${media.md`
              line-height: 54px;
             font-size:50px;
    `}
      ${media.sm`
      line-height: 32px;
             font-size:30px;
    `}
    ${media.xs`
      line-height: 28px;
             font-size:24px;
    `}
    }
    .signatures {
      text-align: right;
      margin-top: 24px;
      ${media.xs`
        margin-top: 16px;
      `}
    }
  }
`;
export default CreativeIntelligenceWrapper;
