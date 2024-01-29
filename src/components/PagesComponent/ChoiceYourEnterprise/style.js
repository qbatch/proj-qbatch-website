import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ChoiceEnterpriseWrapper = styled.div`
  padding: 120px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
    padding: 60px 0;
  `}
  .choice-heading {
    text-align: center;
    margin-bottom: 72px;
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      line-height: 52px;
      margin-bottom: 24px;
      ${media.sm`
        line-height: 42px;
      `}
    }
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      line-height: 32px;
      letter-spacing: 0.7px;
      max-width: 950px;
      margin: 0 auto;
      &:nth-child(2) {
        margin-bottom: 24px;
      }
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
      `}
    }
  }
  .choice-list {
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    margin-bottom: 48px;
    h4 {
      line-height: 48px;
      margin-bottom: 16px;
      letter-spacing: 0;
    }
    p {
      line-height: 32px;
      max-width: 572px;
      margin-bottom: 32px;
      letter-spacing: 0;
      min-height: 96px;
      ${media.md`
        max-width: 100%;
      `}
    }
  }
  .choice-btn {
    margin-top: 28px;
    align-items: center;
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
    .choice-heading {
      text-align: left;
    }
  }
`;

export default ChoiceEnterpriseWrapper;
