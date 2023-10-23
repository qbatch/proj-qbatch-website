import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const QuotationSection = styled.div`
  background: url('/quotation-bg.svg');
  background-size: cover;
  color: ${({ theme }) => theme.colors.whiteColor};
  padding: 127px 171px 116px 202px;
  ${media.md`
    padding: 96px 120px 120px;
  `}
  ${media.sm`
    padding: 96px 40px;
  `}
  ${media.xs`
    padding: 96px 20px;
  `}

  .heading {
    color: ${({ theme }) => theme.colors.whiteColor};
    max-width: 1350px;
    margin-bottom: 48px;
    line-height: 52px;
    letter-spacing: 0.1px;
    ${media.sm`
      margin-bottom: 16px;
    `}
  }
  .paragraph {
    font-size: 24px;
    max-width: 931px;
    font-weight: 300;
    letter-spacing: 0.69px;
    color: ${({ theme }) => theme.colors.whiteColor};
    ${media.sm`
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    margin-bottom :40px;
    `}
  }
  .start-project {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    margin-left: 541px;
    margin-top: 75px;
    letter-spacing: 0.48px;
    ${media.lg`
        justify-content:flex-end;
        margin-left:0px;
  `}
  }
`

export default QuotationSection
