import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const AdvancedWebExploreWrapper = styled.div`
padding:96px 0;
border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
${media.sm`
  padding:56px 0;
  `}
.title-overlay-wrapper{
  h2{
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: 24px;
  }
  p{
    margin: 0;
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
  }
}
ul {
    padding: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 24px;
    grid-row-gap: 32px;
    flex-wrap: wrap;
    margin-top: 48px;
    ${media.lg`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    `}
    ${media.md`
    grid-template-columns: 1fr 1fr 1fr;
    `}
    ${media.sm`
    grid-template-columns: 1fr 1fr;
    `}
    ${media.xs`
    grid-template-columns: 1fr;
    `}
    li{
      max-width: 262px;
      padding: 24px;
      border: 1px solid ${({ theme }) => theme.colors.dividerColor};
      border-radius: 24px;
      border-bottom-right-radius: 0px;
      display:flex;
      flex-direction: column;
      background-color: ${({ theme }) => theme.colors.whiteColor};
      ${media.sm`
        max-width: 100%;
        align-items: center;
        text-align: center;
    `}
      img{
        width: 80px;
        margin-bottom: 16px;
      }
      p{
        font-size:${({ theme }) => theme.fonts.baseFontSize};
      }
    }
}
`;
export { AdvancedWebExploreWrapper }
