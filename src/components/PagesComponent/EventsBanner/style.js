import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const EventsBannerWrapper = styled.div`
position: sticky;
bottom: 0;
z-index: 22;
.slider-container{
  background: linear-gradient(90deg, #0455A4 0%, #0E2647 100%);
display: flex;
align-items: center;
justify-content: space-between;
}
img.flag{
  height: 120px;
  ${media.sm`
    height: 96px;
  `}
}
.box{
  display: flex;
  align-items: center;
  .event-name{
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 16px;
    ${media.md`
      margin-bottom: 8px;
    `}
    img{
      height: 32px;
      width: auto;
      ${media.xl`
        height: 24px;
      `}
    }
    h2{
      color:  ${({ theme }) => theme.colors.whiteColor};
      ${media.xl`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeSm}; 
      `}
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSize}; 
      `}
    }
  }
  .details{
    display: flex;
    align-self: center;
    justify-content: space-between;
    gap: 24px;
    ${media.md`
      gap: 12px;
    `}
    p{
      font-size:  ${({ theme }) => theme.fonts.baseFontSizeSm};
      color:  ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 0;
      ${media.xl`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal}; 
      `}
      ${media.sm`
        font-size: ${({ theme }) => theme.fonts.baseFontSizeXs}; 
      `}
    }
  }
  .arrow-button{
    border: none;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.textColor} ;
    height: 44px;
    width: 44px;
    margin-left: 32px;
    ${media.md`
      display: none;
    `}
  }
}
.box-inner-wrapper{
  display: flex;
  align-items: center;
}
.box-inner{
  ${media.md`
    position: relative;
    left: -14px;
  `}
}
.center-box span{
    max-width: 190px;
    display: inline-flex;
    color: ${({ theme }) => theme.colors.textColor} ;
    text-align: center;
    font-weight:${({ theme }) => theme.fontWeight.bold} ;
    font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
    line-height: 36px;
    ${media.xl`
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm}; 
      `}
    ${media.lg`
    display: none;
      `}
  }
  .slider-nav {
    display: none;
}
@media (max-width: 991px){
  position: sticky;
  bottom: 0;
  .slider-container {
  height: 92px;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  transition: scroll 0.5s ease;
  }
  .box-inner-wrapper{
    justify-content: center;
    width: 100%;
  }
  .center-box{
    display: none;
  }
  .box{
  height: 92px;
    display: flex;
    padding-right: 8px;
  }
  .box-left,
  .box-right {
    flex-shrink: 0;
    width: 100%;
    scroll-snap-align: start;
    justify-content: left;
  }
  .box-right{
    flex-direction: row-reverse;
    img.flag{
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
  }

  .slider-nav {
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }
}


`

export default EventsBannerWrapper;