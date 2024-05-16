import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ChoiceEnterpriseWrapper = styled.div`
  padding: 96px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding:56px 0;
  `}
  .choice-heading {
    text-align: center;
    margin-bottom: 72px;
    ${media.sm`
      margin-bottom: 48px;
  `}
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      line-height: 52px;
      margin-bottom: 24px;
      ${media.sm`
        line-height: 32px;
      `}
      ${media.sm`
      margin-bottom: 12px;
  `}
    }
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      line-height: 24px;
      letter-spacing: 0.7px;
      max-width: 950px;
      margin: 0 auto;
      margin-bottom: 12px !important;
      &:nth-child(2) {
        ${media.sm`
        margin-bottom: 48px;
        line-height:24px;
        `}
      }
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
      `}
      
    }
  }
  .choice-list {
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    margin-bottom: 48px;
    ${media.sm`
    &:last-child{
      margin-bottom:24px;
    }
    `}
    h4 {
      line-height: 32px;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      margin-bottom: 16px;
      letter-spacing: 0;
<<<<<<< HEAD
      ${media.sm`
      line-height: 24px;
      margin-bottom:8px;
=======
      font-weight:700;
      ${media.sm`
        margin-bottom:8px;
>>>>>>> 4c52af2a38eeff91ef667fbadaadfe075528cd5c
      `}
    }
    p {
      line-height: 24px;
      max-width: 572px;
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      margin-bottom: 24px;
      letter-spacing: 0;
      ${media.md`
        max-width: 100%;
      `}
    }
  }
  .choice-btn {
    margin-top: 28px;
    align-items: center;
    ${media.sm`
    margin-top: 0px;
    `}
  }
  .equal-height-row {
    display: flex;
  }
  .equal-height-row > div {
    display: flex;
    flex-direction: column;
  }
  .equal-height-row > div > div {
    flex: 1;
  }
  &.helpSection{
    .choice-heading{
      text-align: left;
      p{
        margin-left: 0;
      }
    }
  }
  &.capacity-section {
    padding: 120px 0 72px;
    ${media.sm`
    padding: 56px 0 8px;
    `}
    .choice-heading {
      text-align: left;
    }
  }
&.so-how-can-help-mb{
  padding: 96px 0 46px;
  ${media.sm`
    padding: 56px 0 0px;
    `}
    .choice-heading {
      p {
        max-width: 780px;
      }
    }
  ${media.sm`
    padding: 56px 0 0px;
    `}
}
  &.why-dev-ops{

    & > div{
    width: 80%;
    margin: auto;
    ${media.xl`
     width: 100%;
    `}
    }
    margin: auto;
    .choice-list{
      p{
        min-height: 0;
        margin-bottom: 0;
        max-width: 385px;
      }
      margin-bottom: 24px;
      padding-bottom: 24px;
    }
  }
`;

export default ChoiceEnterpriseWrapper;
