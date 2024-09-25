import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const QuotationSection = styled.div`
  background: url('/portfolio-quote-bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  padding: 127px 171px 116px 202px;
  position: relative;
  ${media.md`
    padding: 96px 120px 120px;
  `}
  ${media.sm`
    padding: 56px 24px;
  `}
  ${media.mobile`
    background: url('/quote-mobile-bg.svg');
    background-size: cover;
    background-repeat: no-repeat;
  `}

  .heading {
    color: ${({ theme }) => theme.colors.whiteColor};
    max-width: 1170px;
    margin-bottom: 48px;
    line-height: 52px;
    letter-spacing: 0.1px;
    font-weight:700;
    margin: auto;
    ${media.sm`
    line-height: 32px;
  `}
  }
  .quote-circle {
    width: 100px;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -50px;
    left: 230px;
    ${media.xl`
      left: 195px;
    `}
    ${media.md`
      left: 140px;
    `}
    ${media.sm`
      width: 60px;
      height:  60px;
      top: -30px;
      img {
        width: 30px;
      }
    `}
    ${media.mobile`
      left: 80px;
      width: 40px;
      height:  40px;
      top: -20px;
      img {
        width: 20px;
      }
    `}
  }
`

const ProjectCoverWrapper = styled.div`
 margin-bottom: 96px;
 border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} ;
 padding: 96px 0;
 ${media.sm`
  padding: 56px 24px;
  margin-bottom: 56px;
`}
 .project-cover{
  width: 100%;
  height: 980px;
  object-fit: cover;
  object-position: left;
 }
 ${media.lg`
   padding-bottom: 0;
 `}
`

export { QuotationSection, ProjectCoverWrapper };
