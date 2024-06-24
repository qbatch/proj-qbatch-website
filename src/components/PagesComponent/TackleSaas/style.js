import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const TackleSaasWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} ;
.heading{
  margin-bottom: 24px;
}
img{
  background-color: ${({ theme }) => theme.colors.whiteColor} ;
  border-radius: 20px 20px 0 20px;
  margin: auto;
}
.paragraph{
  margin-bottom: 32px;
  font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
  line-height: 32px;
}
${media.md`
  padding: 48px 0;
  .paragraph{
     font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
     line-height: 20px;
  }
`}
`

export default TackleSaasWrapper;