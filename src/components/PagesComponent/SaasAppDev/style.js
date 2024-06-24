import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SaasAppDevWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} ;
.heading{
  text-align: center;
  margin-bottom: 80px;
}
ul{
  list-style-type: disc;
  li{
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.textMedium} ;
    margin-bottom: 24px;
    line-height: 32px;
    font-weight: bold;
   
  }
}
${media.md`
padding: 48px 0;
.heading{
  text-align: left;
  margin-bottom: 12px;
}
  ul{
    margin-left: 16px;
    margin-bottom: 32px;
    li{
      font-size:  ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
      font-weight:  ${({ theme }) => theme.fontWeight.normal};
      line-height: 20px;
      margin-bottom: 4px;
    }
  }
`}
img{
  background-color: ${({ theme }) => theme.colors.whiteColor} ;
  border-radius: 20px 20px 0 20px;
  margin: auto;
}
`

export default SaasAppDevWrapper;