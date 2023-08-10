import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const LeadershipWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
.content-wrapper{
  .heading{
    padding-bottom: 32px;
    width: 100%;
  }
  .paragraph{
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: 32px;
    max-width: 454px;
  }
  .list{
    list-style-type: none;
    padding-left: 0;
    padding-top: 16px;
    margin-bottom: 18px;
    max-width: 454px;
    li{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      color: ${({ theme }) => theme.colors.bodyText};
      line-height: 32px;
      display: flex;
      &:before{
        content: '—';
        color: ${({ theme }) => theme.colors.bodyText};
        font-size: inherit;
        display: block;
        padding-right: 2px;
      }
    }
  }
}
.leaders-wrapper{
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;
}
.leader{
  display: flex;
  justify-content: end;
  align-items: end;
  position: relative;
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
    margin-bottom: 24px;
    margin-right: -54px;
    position: relative;
    z-index: 2;
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