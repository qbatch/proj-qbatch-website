import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const WeCanHelpWrapper = styled.div`
  background: url("/we-help-bg.svg");
  background-size: cover;
  padding: 72px 0;
  text-align: center;
  border-radius: 24px 24px 0 24px;
  ${media.sm`
    padding: 60px 0;
  `}
  .help-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      color: ${({ theme }) => theme.colors.dividerColor};
      margin-bottom: 50px;
      line-height: 40px;
      ${media.sm`
        margin-bottom: 32px;
        line-height: 32px;
      `}
    }
    span {
      margin-top: 20px;
      color: ${({ theme }) => theme.colors.textMedium};
    }
  }
`;

export default WeCanHelpWrapper;
