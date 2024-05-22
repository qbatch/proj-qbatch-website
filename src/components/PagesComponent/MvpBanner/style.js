import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const MvpBannerWrapper = styled.div`
position: relative;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  background-image: ${(props) => `url(${props.blogInner ? props.blogInner : ''})`};
  background-position: 100% 100%;
  background-repeat: no-repeat;
  padding: 160px 0;
  min-height:calc(100vh - 70px);
  margin: auto;
  display: flex;
  align-items: center;
  .heading{
    text-transform: none;
  }
  p{
    font-size: 20px;
    line-height: 32px;
    ${media.lg`
      line-height: 24px;
    `}
  }
  ${media.lg`
     min-height:calc(100vh - 700px);
     padding: 90px 0 56px;
  `}
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
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
      max-width: 620px;
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
