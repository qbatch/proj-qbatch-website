import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MvpBannerWrapper = styled.div`
position: relative;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  background-image: ${(props) => `url(${props.blogInner ? props.blogInner : ''})`};
  background-position: 100% 100%;
  background-repeat: no-repeat;
  padding: 96px 0;
  min-height:calc(100vh - 70px);
  margin: auto;
  display: flex;
  align-items: center;
  p{
    font-size: 20px;
    line-height: 32px;
    ${media.lg`
      line-height: 24px;
    `}
  }
  ${media.lg`
     min-height:calc(100vh - 700px);
     padding: 96px 0 56px;
  `}
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .breadcrumb {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    color: ${({ theme }) => theme.colors.whiteColor};
    margin: 4px 0 16px 10px;
    a {
      color: ${({ theme }) => theme.colors.whiteColor};
    }
    ${media.xs`
      margin: 0 0 12px;
  `}
  }
  .banner-main {
    position:relative;
    z-index:1;
    ${media.md`
     text-align: center;
    `}
    .banner-sub-heading {
      font-size: 20px;
      font-weight: 700;
      padding-bottom: 10px;
      color: ${({ theme }) => theme.colors.dividerColor};
      letter-spacing: 0;
      ${media.lg`
        font-size: 16px;
      `}
    }
    .text-h2 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 34px;
      margin-top: 3px;
      max-width: 614px;
      i{
        color: ${({ theme }) => theme.colors.textColor};
      }
      ${media.md`
      margin: auto;
      margin-bottom: 24px;
      `}
      span {
        color: ${({ theme }) => theme.colors.textColor};
      }
    }
    p {
      max-width: 680px;
      margin-bottom: 40px;
      color: ${({ theme }) => theme.colors.whiteColor};
      a{
        color: ${({ theme }) => theme.colors.textColor};
      }
      ${media.lg`
        margin: 0 auto;
        margin-bottom: 32px;
        font-size: 16px;
        line-height: 24px;
        margin-left:0px;
      `}
    }
  }
  .banner-list{
    display: flex;
    flex-direction: column;
    gap: 16px;
    ${media.lg`
      gap: 0;
    `}
    .inner-paragraph{
      font-style: italic;
      color: ${({ theme }) => theme.colors.whiteColor};
      font-weight:  ${({ theme }) => theme.fontWeight.normal};
    }
    .list-item{
      display: flex;
      align-items: center;
      gap: 24px;
      .img-wrapper{
        width: 76px;
        height: 145px;
        display: inline-block;
        img{
          min-height: 100%;
          min-width: 76px;
          &.one{
            padding: 0 10px;
          }
        }
      }
      .inner-paragraph{
        margin-bottom: 0;
        max-width: 404px;
        ${media.lg`
        font-size: 16px;
        line-height: 24px;
        `}
      }


      ${media.lg`
      gap: 16px;
           .img-wrapper{
            width: 54px;
            img{
              min-width: 60px;
            }
           }
          `}
    }
  }
`

export default MvpBannerWrapper;
