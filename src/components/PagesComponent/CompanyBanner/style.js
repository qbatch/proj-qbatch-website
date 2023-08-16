import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BannerWrapper = styled.div`
  background-image: url("/company-banner-img.png");
  background-size: cover;
  background-position: bottom;
  padding: 97px 0;
  ${media.sm`
    padding: 40px 0;
  `}
  .banner-headings {
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    h2 {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      line-height: 52px;
      margin: 0 16px 16px 0;
      color: ${({ theme }) => theme.colors.whiteColor};
      ${media.sm`
        line-height: 32px;
      `}
      ${media.xs`
        line-height: 24px;
      `}
      &::before {
        content: "";
        height: 2px;
        width: 12px;
        display: block;
        background-color: ${({ theme }) => theme.colors.dangerColor};
        margin: 0 16px 0 0;
      }
     
    }
    h4 {
      line-height: 32px;
      font-weight: 400;
      letter-spacing: 0.48px;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-top: 16px;
      max-width: 690px;
    }
  }
  .banner-button {
    padding-top: 40px;
    button {
      color:${({ theme }) => theme.colors.whiteColor};
      .button-icon {
        border-color: ${({ theme }) => theme.colors.dangerColor};
      }
      &:hover {
        .button-icon {
          border-color: ${({ theme }) => theme.colors.primaryColor};
        }
      }
    }
  }
`;

export default BannerWrapper;
