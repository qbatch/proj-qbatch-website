import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SaasArchitectureWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor} ;
.heading{
  margin-bottom: 24px;
  max-width: 411px;
  ${media.md`
    text-align: center;
    margin-bottom: 12px;
  `}
}
.paragraph{
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
  line-height: 32px;
  max-width: 453px;
  ${media.md`
    text-align: center;
  `}
}

.inner-box{
  border: 1px solid ${({ theme }) => theme.colors.dividerColor} ;
  background-color: ${({ theme }) => theme.colors.whiteColor} ;
  border-radius: 24px 24px 0 24px;
  padding: 24px;
  width: 50%;
  ${media.md`
    width: 100%;
  `}
  ul{
    list-style-type: disc;
    padding-left: 16px;
    li{
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      line-height: 32px;
      color: ${({ theme }) => theme.colors.textMedium} ;
    }
  }
}
${media.md`
  padding: 56px 0;
  .paragraph{
    font-size: ${({ theme }) => theme.fonts.baseFontSizeMediumSmal};
    line-height: 24px;
  }
`}
`

export default SaasArchitectureWrapper;
