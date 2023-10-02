import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const CtoBannerWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};
  .banner-main {
    padding: 97px 0px 130px;
    ${media.sm`
     padding: 40px 0px;
  `}
    ${media.md`
     text-align: center;
    `}
  h1 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 35px;
      margin-top: 4px;
      span {
        color: ${({ theme }) => theme.colors.dangerColor};
      }
    }
    p {
      max-width: 680px;
      margin-bottom: 50px;
      line-height: 32px;

      ${media.md`
        margin: 0 auto;
        margin-bottom: 50px;
      `}
    }
  }
`;

export default CtoBannerWrapper;
