import styled from "styled-components";
import { media } from "../../../../theme/media-mixins";

const EventsBannerWrapper = styled.div`
/* min-height: calc(100vh - 80px); */
padding: 100px 0;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
position: relative;
display: flex;
align-items: center;
&::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: radial-gradient(74.48% 113.99% at 50% 50%, rgba(0, 84, 166, 0.5) 11.9%, rgba(0, 71, 140, 0.5712) 24.44%, rgba(1, 50, 98, 0.7052) 48.06%, rgba(1, 34, 67, 0.8261) 69.36%, rgba(1, 24, 48, 0.9285) 87.4%, #011529 100%);
  background-size: cover;
}
&::after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: radial-gradient(74.48% 113.99% at 50% 50%, rgba(0, 84, 166, 0.25) 11.9%, rgba(0, 71, 140, 0.2856) 24.44%, rgba(1, 50, 98, 0.3526) 48.06%, rgba(1, 34, 67, 0.41305) 69.36%, rgba(1, 24, 48, 0.46425) 87.4%, rgba(1, 21, 41, 0.5) 100%);
  background-size: cover;
}
.prosper-banner-overlay{
${media.xs`
grid-row-gap: 24px;
padding: 24px 0px !important;
`}
}
& > div{
  position: relative;
  z-index: 2;
  width: 100%;
}
.banner-heading{
  font-size: ${({theme}) => theme.fsxl};
  font-weight: 700;
  & > span{
    color: ${({ theme }) => theme.colors.textColor};
    ${media.xs`
    font-size:16px;
    `}
  }
  .banner-heading-wrapper{
    display: flex;
    gap: 32px;
  }
  .event-name{
    color: #fff;
    display: block;
    font-size:${({theme}) => theme.fsh1};
    gap: 24px;
    display: flex;
    align-items: start;
  }
  .event-img{
    width: 114px;
    ${media.sm`
    width:60px;
    `}
  }
  .arrow-img{
    height: 60px;
    margin-top: 18px;
    ${media.sm`
    display: none;
    `}
  }
  .event-year{
    color: #D2D9DC;
    font-size:${({theme}) => theme.fsh1};
    display: block;
  }
}
.event-info{
  display: flex;
  gap: 48px;
  margin-top: 48px;
  justify-content: end;
  ${media.xs`
  flex-wrap:wrap;
  grid-row-gap:8px;
  justify-content: flex-start;
  `}
  .event-inner{
    display: flex;
    align-items: center;
    gap: 16px;
    .event-icon{
      height: 32px;
      width: 32px;
      object-fit: contain;
      object-position: center;
      ${media.xs`
       width:24px;
      `}
    }
    .event-inner-text{
      font-size: 18px;
      color: #FFFFFF;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      ${media.xs`
      font-size: 16px;
      `}
    }
  }
}
.coupon-wrapper{
  .heading{
    font-size: ${({ theme }) => theme.fsh3};
    text-shadow: 2px 2px 6px #00000080;
    color: ${({ theme }) => theme.colors.textColor};
    text-align: center;
    width: 100%;
    max-width: 480px;
    ${media.xs`
    font-size:16px;
    
    `}
    span{
      color: ${({ theme }) => theme.colors.whiteColor};
      font-size:  ${({ theme }) => theme.fonts.fslg};
      font-weight:  ${({ theme }) => theme.fontWeight.light};
      .highlighted{
        font-weight:  ${({ theme }) => theme.fontWeight.bold};
        color: ${({ theme }) => theme.colors.textColor};
      }
      &.promo-code{
      text-decoration: underline;
      font-size: ${({ theme }) => theme.fonts.fsh3};
      color: ${({ theme }) => theme.colors.textColor};
      font-weight:  ${({ theme }) => theme.fontWeight.semiBold};
    }
    }
  }
  button{
    margin: auto;
    margin-top: 48px;
    ${media.xs`
    margin-top:24px;
    `}
  }
}
`

export default EventsBannerWrapper
