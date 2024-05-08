import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const RemoteDeveloperStyleWrapper = styled.div`
  padding-bottom: 96px;
  ${media.md`
  padding-bottom:72px ;
  `}
  ${media.sm`
    padding-bottom: 16px;
    `}
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .content-wrapper {
    max-width: 930px;
    text-align: center;
    margin: auto;
    padding-top: 96px;
    padding-bottom: 72px;
    ${media.xs`
    padding-top: 56px;
    padding-bottom: 48px;
    `}
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
      text-transform:none;
    }
  }
  .card-overlay-wrapper {
    display: grid;
    align-items: center;
    grid-gap: 24px;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    ${media.md`
    grid-template-columns: 1fr 1fr 1fr;
    `}
    ${media.sm`
    grid-template-columns: 1fr 1fr;
    grid-gap:0px;
    `}
    ${media.xs`
    grid-template-columns: 1fr;
    justify-content:center;
    grid-row-gap: 16px;
    `}
  }
  .card-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-row-gap: 24px;
    ${media.xs`
        margin: auto;
    `}
    h2 {
      margin: 0;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      font-size: ${({ theme }) => theme.fonts.baseFontSize};
      text-align: center;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      max-height: 160px;
      text-transform: none;
      min-height: 69px;
      text-transform:none;
      ${media.xs`
      max-height: 100%;
      `}

    }
  }
`;
export { RemoteDeveloperStyleWrapper }
