import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const EdTechPotentialWrapper = styled.div`
padding: 96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
  padding: 40px 0px;
`}
h2{
font-size: 40px;
font-weight: 700;
line-height: 52px;
text-align: center;
color: ${({ theme }) => theme.colors.primaryColor};
${media.lg`
    font-size: 32px;
    font-weight: 700;
      `}
      ${media.sm`
        font-size: 24px;
        line-height: 32px;
      `}
      ${media.mobile`
            text-align:left;
            `}
}
.items-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px 24px;
    padding-top: 72px;
    ${media.sm`
        grid-gap:  32px 16px;
        padding-top: 32px;
      `}
    ${media.mobile`
      grid-template-columns: 1fr;
      `}
      ${media.mobile`
            text-align:left;
            `}
      
    .item{
      display:flex;
      grid-gap: 24px;
      align-items: flex-start;
      border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
      padding-bottom: 24px;
      ${media.sm`
        grid-gap: 16px;
      `}
      .item-disc{
        display:flex;
        flex-direction:column;
        grid-gap: 16px;
        ${media.sm`
        grid-gap: 8px;
      `}
        h3{
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
          text-align: left;
          color:#2D2F31;
          margin: 0;
          ${media.md`
        font-size: 16px;
        line-height: 20px;
      `}
        }
        p{
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        color: #5F737C;
        margin: 0;
        ${media.md`
        font-size: 12px;
        line-height: 20px;
      `}
        }
      }
    }
}
`

export default EdTechPotentialWrapper;
