import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

export const BoostEfficiencyEnhanceSecurityWrapper = styled.div`
padding: 96px;
background: ${({ theme }) => `url('/Boost-Efficiency-bg.svg') no-repeat center / cover, ${theme.colors.secondaryColor}`};
${media.sm`
  padding: 56px 24px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-image:none;
`}
h2{
  color: ${({theme}) => theme.colors.whiteColor};
font-size: ${({theme}) => theme.fonts.baseFontSizeH2};
font-weight: 700;
line-height: 52px;
text-align: left;
margin: 0;
max-width: 921px;
${media.sm`
  font-size: ${({theme}) => theme.fonts.baseFontSizeLg};
  line-height: 32px;
  text-align:center;
`}
}
p{
font-size:  ${({theme}) => theme.fonts.baseFontSizeSm};;
font-weight: 400;
line-height: 32px;
text-align: left;
color: ${({theme}) => theme.colors.whiteColor};
margin: 0;
margin-top: 24px;
${media.sm`
  font-size: ${({theme}) => theme.fonts.baseFontSize};
  line-height: 24px;
  text-align:center;
  margin-top:8px;
`}
}
button{
  color: ${({theme}) => theme.colors.whiteColor};
  margin-top: 32px;
  ${media.sm`
    margin-top: 28px;
`}
  &:hover{
  color: ${({theme}) => theme.colors.whiteColor};

  }
}

`
