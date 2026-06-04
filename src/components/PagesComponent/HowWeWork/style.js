import styled from 'styled-components';
import { media } from '../../../theme/media-mixins';

const HowWeWorkWrapper = styled.div`
  padding: 96px 0;
  background-color: ${({ theme }) => theme.colors.softGray};
  ${media.sm`
    padding: 56px 0;
  `}

  .section-heading {
    margin-bottom: 64px;
    ${media.sm`
      margin-bottom: 40px;
    `}
    h2 {
      margin-bottom: 16px;
    }
    p {
      max-width: 520px;
      margin: 0 auto;
      color: ${({ theme }) => theme.colors.bodyText};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    }
  }

  .steps-row {
    position: relative;
  }

  .step-col {
    position: relative;
    ${media.md`
      margin-bottom: 40px;
      &:last-child {
        margin-bottom: 0;
      }
    `}
  }

  .step-card {
    padding: 40px 32px;
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 16px;
    box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.08);
    height: 100%;
    position: relative;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0px 12px 48px 0px rgba(0, 5, 89, 0.12);
    }

    .step-number {
      display: inline-block;
      font-size: 48px;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.primaryColor};
      line-height: 1;
      margin-bottom: 20px;
      opacity: 0.18;
    }

    h3 {
      color: ${({ theme }) => theme.colors.deepNavy};
      margin-bottom: 12px;
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }

    p {
      color: ${({ theme }) => theme.colors.bodyText};
      margin-bottom: 0;
      line-height: 28px;
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
    }
  }

  .step-connector {
    display: none;
    ${media.lg`
      display: none;
    `}
  }
`;

export default HowWeWorkWrapper;
