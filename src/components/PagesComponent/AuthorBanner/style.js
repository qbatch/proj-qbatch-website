import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const BlogDetailsWrapper = styled.div`
  background-image: url('/author-bg.svg');
  width: 100%;
  padding: 95px 67px 0px 67px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgb(0 0 0 / 50%);
  ${media.sm`
    padding: 96px 0;
  `}
  .arrow-box {
    img {
      margin-top: 3px;
      max-width: fit-content;
    }
  }
  .details-flex {
    .title {
      color: ${({ theme }) => theme.colors.highlightColor};
      margin-bottom: 12px;
    }
    .position {
      color: ${({ theme }) => theme.colors.dividerColor};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
    }
  }
  .social-icons {
    margin-top: 9px;
    display: flex;
    gap: 16px;
    cursor: pointer;
    margin-bottom: 24px;
  }
  .paragraph {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
    color: ${({ theme }) => theme.colors.dividerColor};
    font-weight: 400;
    line-height: 18px;
    max-width: 734px;
    min-height:200px;
  }
  .image-box {
    padding: 0px 40px;
    ${media.sm`
    padding: 0;
  `}
    text-align:center;
    img {
      max-width: fit-content;
      ${media.sm`
      max-width:100%;
  `}
    }
  }
`
export default BlogDetailsWrapper
