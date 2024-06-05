import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const GrowthPartnerWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  padding: 96px 0;
  ${media.sm`
      padding: 56px 0;
    `}
  .growth-wrapper {
    .underline-heading {
      text-transform: capitalize;
    }
    .heading {
      margin-bottom: 8px;
      font-weight:700;
    }
    .main-heading {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 24px;
      font-weight:700;
      ${media.sm`
      margin-bottom: 12px;
      `}
      span {
        font-weight:500;
        display: block;
        margin-bottom: 24px;
        ${media.sm`
        margin-bottom:12px;
        `}

      }
    }
    .paragraph {
      line-height: 24px;
      font-weight: 400;
      max-width: 600px;
      letter-spacing: 0.2px;
      ${media.md`
      max-width: 100%;
      `}
    }
    .image-portion {
      img {
        height: 496px;
        width: 100%;
        border-radius: 32px 32px 0 32px;
        margin-top: 46px;
        object-fit: cover;
        ${media.sm`
          height: 400px;
          margin-top: 20px;
        `}
        ${media.xs`
          height: 290px;
        `}
      }
    }
    .image-portion-md {
      img {
        height: 496px;
        border-radius: 32px 32px 0 32px;
        object-fit: cover;
        ${media.xs`
          height: 290px;
        `}
      }
    }
  }

  .content-right {
    .content {
      padding-left: 96px;
      ${media.md`
        padding-left: 0;
        padding-top: 24px;
        `}
        
      .paragraph {
        max-width: 595px;
        margin-bottom: 0;
      }
    }
    .content-wrapper {
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 64px;
      height: 100%;
      ${media.md`
        justify-content: start;
        align-items: start;
        gap: 24px;
        `}
    }
  }
  .content-col {
    margin-top: 144px;
    ${media.md`
            margin-top: 16px;
        `}
    &:first-child {
      padding-top: 0;
    }
  }
  .content-wrapper {
    ${media.md`
        padding-bottom: 12px;
      `}
  }
  .mission {
    padding-top: 152px;
    ${media.md`
            padding-top: 0px;
        `}
  }
`

export default GrowthPartnerWrapper;
