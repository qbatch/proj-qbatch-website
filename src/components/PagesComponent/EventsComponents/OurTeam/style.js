import styled from "styled-components";

const OurTeamWrapper = styled.div `
text-align: center;
padding: 96px 0;
position: relative;
.heading{
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 24px;
}
.sub-title{
  max-width: 692px;
  font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  margin: auto;
  color:${({ theme }) => theme.colors.bodyTextVariant} ;
  line-height: 32px;
}
.team-wrapper{
  max-width: 930px;
  margin: auto;
}
.inner-box-wrapper{
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.dividerColor};
  box-shadow: 2px 2px 12px 0px #00000029;
  padding: 32px;
  margin-top: 220px;
  .boss-img{
    margin-top: -194px;
    margin-bottom: 16px;
    height:320px;
  }
  .inner-box{
    text-align: center;
  }
  .inner-box-header{
    margin-bottom: 16px;
    .name{
      color:${({ theme }) => theme.colors.primaryColor} ;
    }
  }
  .social{
    margin-bottom: 16px;
    img{
      height: 24px;
      width: 24px;
    }
  }
  .paragraph{
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    line-height: 24px;
    text-align: center;
  }
}
.solution-bg{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
}

`

export default OurTeamWrapper
