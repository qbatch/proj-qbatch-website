import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const SectionMobileAppWrapper = styled.div`
padding:96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
padding: 56px 0px;
`}
h2{
  color: ${({ theme }) => theme.colors.primaryColor};
  margin-bottom:24px;
}
p{
  color: ${({ theme }) => theme.colors.bodyText};
  font-size:  ${({ theme }) => theme.fonts.baseFontSize};
  font-weight: 400;
  line-height: 24px;
  text-align: left;

}
ul{
  padding: 0;
    margin: 0;
    margin-top: 72px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
    ${media.md`
    grid-template-columns: 1fr 1fr;
    `}
    ${media.sm`
    grid-template-columns: 1fr;
    `}
    li{
      border-radius: 24px 24px 0px 24px;
    border: 1px solid #D2D9DC;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-row-gap: 16px;
    h3{
      font-size:  ${({ theme }) => theme.fonts.baseFontSizeLg};
      font-weight: 700;
      line-height: 32px;
      text-align: left;
      margin: 0;
}
p{
font-size:  ${({ theme }) => theme.fonts.baseFontSize};
font-weight: 400;
line-height: 24px;
text-align: left;
margin: 0;
}
    }
}
`
export { SectionMobileAppWrapper }
