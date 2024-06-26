import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const BewareFriendWrapper = styled.section`
  .base-space {
    padding: 96px 0;
    ${media.sm`
      padding: 40px 0;
    `}
  }
  .padding-0 {
    ${media.sm`
    padding: 0px;
  `}
  }
  .heading {
    max-width: 440px;
    margin-bottom: 51px;
    text-transform: none;
    ${media.md`
      margin-right: 32px;
    `}
    ${media.sm`
      margin-bottom: 32px;
      text-align: center;
    `}
  }
  .skill-section {
    position: relative;
    margin-bottom: 48px;
    padding-bottom: 33px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dividerColor};

    .add-gap {
      gap: 32px;
      & > div{
      display: block;
      min-width: 50px;
      img{
        height: 50px;
        width: 50px;
      }
    }
    }
    .title {
      margin: 9px 0 16px;
      letter-spacing: 0;
      ${media.lg`
        line-height: 24px;
      `}
    }
    .paragraph{
      margin-bottom: 0;
    }
    .badges-gap {
      gap: 7px;
    }
  }
`;
export default BewareFriendWrapper;
