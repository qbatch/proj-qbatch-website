import styled from "styled-components";

const EventsBannerWrapper = styled.div`
background: linear-gradient(90deg, #0455A4 0%, #0E2647 100%);
display: flex;
align-items: center;
justify-content: space-between;
position: sticky;
bottom: 0;
z-index: 22;
.box{
  display: flex;
  align-items: center;
  .event-name{
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 16px;
    img{
      height: 32px;
      width: auto;
    }
    h2{
      color:  ${({ theme }) => theme.colors.whiteColor};
    }
  }
  .details{
    display: flex;
    align-self: center;
    justify-content: space-between;
    gap: 24px;
    p{
      font-size:  ${({ theme }) => theme.fonts.baseFontSizeSm};
      color:  ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 0;
    }
  }
  .arrow-button{
    border: none;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.textColor} ;
    height: 44px;
    width: 44px;
    margin-left: 32px;
  }
}

.center-box span{
    max-width: 190px;
    display: inline-flex;
    color: ${({ theme }) => theme.colors.textColor} ;
    text-align: center;
    font-weight:${({ theme }) => theme.fontWeight.bold} ;
    font-size: ${({ theme }) => theme.fonts.baseFontSizeH3};
    line-height: 36px;
  }
`

export default EventsBannerWrapper;