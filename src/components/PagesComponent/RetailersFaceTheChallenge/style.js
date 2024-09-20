import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const RetailersFaceTheChallengeWrapper = styled.div`
    padding: 96px 0;
    border-bottom:1px solid ${({ theme }) => theme.colors.dividerColor};
    ${media.sm`
      padding: 40px 0;
    `}
    .item-overlay-wrapper{
      display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    ${media.sm`
      grid-template-columns: 1fr;
      grid-gap: 32px;
    `}
    }
    .item-wrapper {
    display: flex;
    flex-direction: column;
    grid-row-gap: 24px;
    ${media.sm`
      grid-row-gap: 12px;
    `}
    h2{
      font-size: 40px;
      font-weight: 700;
      line-height: 52px;
      text-align: left;
      color: #0054A6;
      margin:0;
      padding-right: 66px;
      ${media.xl`
        padding-right: 0px;
        `}
      ${media.md`
        font-size: 32px;
      line-height: 42px
        `}
    }
    p{
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
      margin:0;
      color: #000000;
    }
}
.item-wrapper-2 {
    display: flex;
    flex-direction: column;
    grid-row-gap: 40px;
    .card-item {
    display: flex;
    flex-direction: column;
    grid-row-gap: 16px;
    border-bottom: 1px solid #D2D9DC;
    padding-bottom: 32px;
    ${media.sm`
      grid-row-gap: 8px;
    `}
    h3{
      font-size: 24px;
      font-weight: 700;
      text-align: left;
      color: #2D2F31;
      margin:0;
    }
  p{
    margin:0;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #5F737C;
    ${media.sm`
      margin-top:8px;
    `}
  }
}
}

`;
export { RetailersFaceTheChallengeWrapper }
