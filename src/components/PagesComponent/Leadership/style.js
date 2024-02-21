import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const LeadershipWrapper = styled.div`
padding: 120px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
  padding: 40px 0;
`}
.content-wrapper{
  .heading{
    padding-bottom: 20px;
    padding-right: 64px;
    ${media.sm`
     padding-bottom: 12px;
    `}
  }
  .paragraph{
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: 32px;
    max-width: 454px;
    padding-top: 10px;
  }
  .list{
    list-style-type: none;
    padding-left: 0;
    padding-top: 16px;
    margin-bottom: 20px;
    max-width: 454px;
    li{
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      color: ${({ theme }) => theme.colors.bodyText};
      line-height: 32px;
      display: flex;
      max-width: 360px;
      &:before{
        content: '—';
        color: ${({ theme }) => theme.colors.bodyText};
        font-size: inherit;
        display: block;
        padding-right: 5px;
      }
    }
    ${media.sm`
    padding-top: 0;
    margin-bottom: 24px;
       li{
        font-size: 16px;
       }
      `}
    ${media.xs`
      li{
        font-size : 14px;
      }
    `}
  }
}
.leaders-wrapper{
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;
}
.leaders-cards-wrapper{
  display:flex;
  align-items:center;
  grid-gap:24px;
  padding-top:120px;
  ${media.sm`
  flex-wrap:wrap;
  grid-row-gap:150px;
  `}
}
.leader{
  display: flex;
  justify-content: end;
  align-items: end;
  position: relative;
  padding-top: 24px;
  ${media.lg`
   justify-content: center;
  `}
  ${media.sm`
    display: block;
    .leader-img-wrapper{
      margin: auto;
      margin-bottom: 18px;
    }
  `}
    .leader-img-wrapper{
      height: 244px;
      width: 216px;
      display: block;
      overflow: hidden;
      position: relative;
      border-radius: 24px 24px 0 24px;
      .leader-img{
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }

    &::before{
        content: '';
        height: 100%;
        width: 100%;
        display: block;
         background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,0) 45%, rgba(255,255,255,0.7) 100%);
        position: absolute;
        top: 0;
      }
    }
    .leader-info {
    margin-bottom: 48px;
    margin-right: -54px;
    position: relative;
    z-index: 2;
    ${media.sm`
    margin-bottom: 18px;
      text-align: center;
      margin-right: 0;
    
    `}
}
    .leader-name{
      margin: 0;
    }
    .leader-title{
      color: ${({ theme }) => theme.colors.bodyText};
      font-size: ${({ theme }) => theme.fonts.baseFontSizeXs};
    }
  }
`

export default LeadershipWrapper;
