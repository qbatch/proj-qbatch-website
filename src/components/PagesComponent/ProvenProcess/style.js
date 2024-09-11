import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ProvenProcessWrapper = styled.div`
  padding: 96px 0;
  ${media.sm`
    padding: 40px 0;
  `}
  .process-heading {
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 24px;
    }
    p {
      margin-bottom: 48px;
      max-width: 850px;
      ${media.sm`
        margin-bottom: 32px;
      `}
    }
  }
  .process-box {
    border: 1px solid ${({ theme }) => theme.colors.dividerColor};
    border-radius: 24px 24px 0 24px;
    padding: 32px 24px 32px 32px;
    display: flex;
    gap: 36px;
    margin-right: 34px;
    height: 100%;
    ${media.sm`
      flex-direction: column;
      margin-right: 0;
    `}
    .process-img {
      width: 70%;
      max-width: max-content;
      ${media.sm`
        width: 100%;
      `}
      ${media.mobile`
        margin: 0 auto;
      `}
    }
    .process-data {
      h3 {
        color: ${({ theme }) => theme.colors.primaryColor};
        margin-bottom: 24px;
      }
      div {
        margin-bottom: 12px;
        &:last-child {
          margin-bottom: 0;
        }
        p {
          color: ${({ theme }) => theme.colors.bodyTextVariant};
          font-weight: ${({ theme }) => theme.fontWeight.semiBold};
          line-height: 32px;
          margin-bottom: 4px;
        }
        span {
          font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
          color: ${({ theme }) => theme.colors.textMedium};
          line-height: 16px;
        }
      }
    }
  }
  .carousel-button-group {
    gap: 12px;
    svg {
      cursor: pointer;
    }
    span {
      color: ${({ theme }) => theme.colors.textMedium};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      display: flex;
      align-items: center;
      gap: 4px;
      &:first-child {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
      &:nth-child(2) {
        font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      }
    }
  }
  .slider-container {
    padding-left: 96px;
    ${media.lg`
      padding-left: 80px;
    `}

    ${media.md`
      padding-left: 60px;
    `}

    ${media.sm`
      padding: 0 40px;
    `}

    ${media.xs`
      padding: 0 24px;
    `}
  }
  @media (min-width: 1600px) {
    .slider-container {
      max-width: 1600px;
      margin: 0 auto;
    }
  }
`

export default ProvenProcessWrapper;
