import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const RemoteDeveloperStyleWrapper = styled.div`
  padding-bottom: 96px;
  ${media.md`
  padding-bottom:72px ;
  
  `}
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .content-wrapper {
    max-width: 930px;
    text-align: center;
    margin: auto;
    padding-top: 96px;
    padding-bottom: 72px;
    h2 {
      color: ${({ theme }) => theme.colors.primaryColor};
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
    `}
    ${media.xs`
    grid-template-columns: 1fr;
    justify-content:center;
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
      font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
      text-align: center;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      min-height:160px

    }
  }
`;
export { RemoteDeveloperStyleWrapper }
