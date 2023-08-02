import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CreativeIntelligenceWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 146px 0 141px;
  background-image: url("/creativity-background.svg");
  background-repeat: no-repeat;
  background-position: top;
  ${media.sm`
      padding:70px 0 70px;
    `}
  .creative-content {
    max-width: 844px;
    margin: 0 auto;
    .creative-quote {
      min-width: 52px;
      padding-top: 8%;
      ${media.xs`
        min-width:35px;
    `}
    }
    .creative-content-inn {
      gap: 44px;
      ${media.xs`
        gap:20px;
    `}
    }
    h4 {
      font-weight: 400;
      letter-spacing: 0.48px;
      color: ${({ theme }) => theme.colors.dividerColor};
      position: relative;
      margin-bottom: 19px;
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
    h1 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 2px;
      ${media.lg`
             font-size:68px;
    `}
      ${media.md`
             font-size:50px;
    `}
    ${media.sm`
             font-size:30px;
    `}
    ${media.xs`
             font-size:24px;
    `}
    }
    .signatures {
      text-align: right;
    }
  }
`;
export default CreativeIntelligenceWrapper;
