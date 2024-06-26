import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ChooseCtoWrapper = styled.div`
  padding: 96px 0 94px;
  ${media.sm`
     padding: 56px 0px;
  `}
  h3 {
    letter-spacing: 0.3px;
    margin-bottom: 24px;
  }
  .sub-heading{
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    margin-bottom: 16px;
    display: block;
    color:  ${({ theme }) => theme.colors.textMedium};
    ${media.sm`
    margin-bottom:12px;
    `}
  }
  .heading {
    max-width: 550px;
    line-height: 52px;
    font-weight: 700;
    display: block;
    ${media.sm`
        line-height: 32px;
      `}
  }
  p {
    margin-top: 16px;
    max-width: 567px;
    line-height: 32px;
  }
  p.upper-text-wrapper{
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    line-height:24px;
    font-weight:700;
    max-width:692px;
    color: ${({ theme }) => theme.colors.bodyTextVariant};
  }
  .service-list {
    margin-top: 24px;
    ul {
      padding-left: 0px;
      li {
        color: ${({ theme }) => theme.colors.textMedium};
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        padding-bottom: 8px;
        line-height: 24px;
        font-weight:400;
        &:last-child{
          padding-bottom: 0;
          ${media.md`
           padding-bottom: 8px;
          `}
        }
        .hash {
          margin-right: 8px;
        }
      }
    }
  }
`;
export default ChooseCtoWrapper;
