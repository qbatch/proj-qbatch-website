import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const BlogDetailsWrapper = styled.div`
  background-image: url('/author-bg.svg');
  width: 100%;
  padding: 95px 67px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  position: relative;
   .breadcrumb-wrapper{
    margin: auto;
    position: absolute;
    z-index: 99;
    width: 100%;
      top: 0;
      left: 0;
      background: #001A33;
      padding: 0;
  }
  .breadcrumb {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 0 0 12px 0;
    padding: 16px 96px;
    max-width: 1600px;
    margin: auto;
    overflow: scroll;
    a {
      color: ${({ theme }) => theme.colors.whiteColor};
      white-space: nowrap;
    }
    ${media.lg`
      padding: 16px 80px;
    `}
    ${media.md`
      padding: 16px 60px;
    `}
    ${media.sm`
      padding: 16px 40px;
    `}
    ${media.xs`
      padding: 16px 24px;
    `}
  }
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
    line-height: 24px;
    max-width: 548px;
  }
  .image-box {
    text-align: center;
    position: relative;
    height: 192px;
    width: 192px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.dividerColor};
    ${media.sm`
    padding: 0;
  `}

    img {
      object-fit: cover;
      left: 0px;
      height:100%;
      width: 100%;
      ${media.sm`
      max-width:100%;
  `}
    }
  }
`
export default BlogDetailsWrapper
