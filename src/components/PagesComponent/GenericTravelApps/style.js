import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const GenericTravelAppsWrapper = styled.div`
  padding: 96px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  ${media.sm`
  padding: 56px 0px;
  `}
  h2 {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeH2};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primaryColor};
    line-height: 52px;
    text-align: center;
    margin-bottom: 72px;
    text-transform:none;
    ${media.sm`
    margin-bottom:48px;
    font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    line-height:32px;
    text-align:left;
    `}
  }
  .card-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:24px;
    &.desktop{
    ${media.mobile`
      display:none;
    `}
    }
    ${media.md`
      grid-template-columns: 1fr 1fr;
    `}
    ${media.md`
      grid-template-columns: 1fr 1fr;
    `}
    ${media.sm`
      grid-template-columns: 1fr;
      align-items:center;
      justify-content:center;
    `}
    .cards {
    display: flex;
    flex-direction: column;
    grid-row-gap: 32px;
    align-items: baseline;
    padding-bottom: 56px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    img{
      ${media.sm`
     width: 100%;
    `}
    }
    .content {
    display: flex;
    flex-direction: column;
    grid-row-gap: 16px;
    padding-inline: 24px;
    h3{
      font-size: ${({ theme }) => theme.fonts.baseFontSizeLg};
    }
    p.h3-text-wrapper {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 24px;
    line-height: 32px;
    text-align: left;
    color: #2D2F31;
    margin: 0px;
    margin-top:24px;

}
p {
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    margin: 0;
    color: #5F737C;
}
}
}
}
.mobile-responsive{
  display: none;
  ${media.mobile`
  display:block;
  margin-top:32px;
  padding-bottom: 16px;
    `}
    .card-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:24px;
    .cards {
    display: flex;
    flex-direction: column;
    grid-row-gap: 32px;
    align-items: baseline;
    padding-bottom: 56px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
    .content {
    display: flex;
    flex-direction: column;
    grid-row-gap: 16px;
    padding-inline: 24px;
    h3 {
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 32px;
    color: #2D2F31;
    margin: 0px;
}
p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    margin: 0;
    color: #5F737C;
}
}
}
}
  }
.slick-dots {
  bottom:-40px;
    li {
      margin: 0px;
      &.slick-active {
        margin-right: 24px;
        button {
          &::before {
            background-color: ${({ theme }) => theme.colors.primaryColor};
            width: 32px;
            height: 8px;
            border-radius: 50px;
            opacity: 1;
            color:transparent;
          }
        }
      }
      button {
        &::before {
          background-color: ${({ theme }) => theme.colors.dividerColor};
          height: 8px;
          width: 8px;
          border-radius: 50px;
          opacity: 1;
          color: transparent;
        }
      }
    }
  }
`;
export { GenericTravelAppsWrapper }
