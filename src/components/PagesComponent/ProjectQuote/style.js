import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const QuotationSection = styled.div`
  background: url('/quotation-bg.svg');
  background-size: cover;
  background-position: right;
  color: ${({ theme }) => theme.colors.whiteColor};
  padding: 127px 171px 116px 202px;
  ${media.md`
    padding: 96px 120px 120px;
  `}
  ${media.sm`
    padding: 56px 24px;
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
`

const ProjectCoverWrapper = styled.div`
 margin-bottom: 96px;
 border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} ;
 padding: 96px 0;
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
