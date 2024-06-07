import styled from 'styled-components'
import { media } from '../../../theme/media-mixins'

const BlogDetailsWrapper = styled.div`
  background-image: url('/author-bg.svg');
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  width: 100%;
  padding: 80px 67px 32px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  position: relative;
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
      color: ${({ theme }) => theme.colors.whiteColor};
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
    margin-bottom: 0;
  }
  .paragraph {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
    color: ${({ theme }) => theme.colors.dividerColor};
    font-weight: 400;
    line-height: 24px;
    max-width: 848px;
  }
  .image-box {
    text-align: center;
    position: relative;
    background-size: cover;
    background-position: center;
    height: 198px;
    width: 198px;
    border-radius: 192px 192px 0 192px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    ${media.sm`
    padding: 0;
  `}
  .author-img-bg{
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 1;
    opacity: 0.2;
    border-radius: 192px 192px 0 192px;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }
    img {
      object-fit: cover;
      left: 0px;
      height: 158px;
      width: 158px;
      border-radius: 158px 158px 0 158px;
      position: relative;
      z-index: 2;
      ${media.sm`
      max-width:100%;
      background-color: ${({ theme }) => theme.colors.secondaryColor};
  `}
    }
  }
`
export default BlogDetailsWrapper
