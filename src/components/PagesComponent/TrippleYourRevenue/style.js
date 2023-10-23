import styled from "styled-components";

const RevenueWrapper = styled.div`
  padding: 120px 0 128px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 28px;
  }
  .revenue-heading {
    p {
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      letter-spacing: 0.7px;
    }
  }
  .slider-section {
    gap: 54px;
    padding-left: 248px;
    margin-top: 76px;
    .slide-counter {
      span {
        display: block;
        &:first-child {
          font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
          color: ${({ theme }) => theme.colors.primaryColor};
          font-weight:  ${({ theme }) => theme.fontWeight.medium};
        }
        &:nth-child(2) {
          width: 32px;
          height: 1px;
          background-color: ${({ theme }) => theme.colors.dividerColor};
          transform: rotate(-45deg);
        }
        &:nth-child(3) {
          color: ${({ theme }) => theme.colors.textMedium};
          margin-left: 20px;
        }
      }
    }
    .slider-data {
      gap: 64px;
      h4 {
        color: ${({ theme }) => theme.colors.textMedium};
        font-weight: ${({ theme }) => theme.fontWeight.light};
        max-width: 440px;
        letter-spacing: 0.5px;
      }
    }
  }
`;

export default RevenueWrapper;
