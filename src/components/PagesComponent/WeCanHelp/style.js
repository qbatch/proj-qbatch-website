import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const WeCanHelpWrapper = styled.div`
  background: url("/inner-banner-bg.svg");
  background-size: cover;
  background-position: bottom;
  padding: 96px 0;
  text-align: center;
  ${media.sm`
    padding: 60px 0;
  `}
  .help-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 72px;
      max-width: 1060px;
      ${media.sm`
        margin-bottom: 32px;
      `}
    }
    span {
      margin-top: 24px;
      color: ${({ theme }) => theme.colors.dividerColor};
    }
  }
`;

export default WeCanHelpWrapper;
