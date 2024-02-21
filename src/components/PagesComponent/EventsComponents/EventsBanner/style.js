import styled from "styled-components";

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
& > div{
  position: relative;
  z-index: 2;
  width: 100%;
}
.banner-heading{
  font-size: 60px;
  font-weight: 700;
  & > span{
    color: ${({ theme }) => theme.colors.textColor};
  }
  .banner-heading-wrapper{
    display: flex;
    gap: 32px;
  }
  .event-name{
    color: #fff;
    display: block;
    font-size: 70px;
    gap: 24px;
    display: flex;
    align-items: start;
  }
  .event-img{
    width: 114px;
  }
  .arrow-img{
    height: 60px;
    margin-top: 18px;
  }
  .event-year{
    color: #D2D9DC;
    font-size: 70px;
    display: block;
  }
}
.event-info{
  display: flex;
  gap: 48px;
  margin-top: 48px;
  justify-content: end;
  .event-inner{
    display: flex;
    align-items: center;
    gap: 16px;
    .event-icon{
      height: 32px;
      width: 32px;
      object-fit: contain;
      object-position: center;
    }
    .event-inner-text{
      font-size: 18px;
      color: #FFFFFF;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }
}
.coupon-wrapper{
  .heading{
    font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
    text-shadow: 2px 2px 6px #00000080;
    color: ${({ theme }) => theme.colors.textColor};
    text-align: center;
    width: 100%;
    max-width: 480px;
    span{
      color: ${({ theme }) => theme.colors.whiteColor};
      font-size:  ${({ theme }) => theme.fonts.baseFontSizeLg};
      font-weight:  ${({ theme }) => theme.fontWeight.light};
      .highlighted{
        font-weight:  ${({ theme }) => theme.fontWeight.bold};
        color: ${({ theme }) => theme.colors.textColor};
      }
      &.promo-code{
      text-decoration: underline;
      font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
      color: ${({ theme }) => theme.colors.textColor};
      font-weight:  ${({ theme }) => theme.fontWeight.semiBold};
    }
    }
  }
  button{
    margin: auto;
    margin-top: 48px;
  }
}
`

export default EventsBannerWrapper
