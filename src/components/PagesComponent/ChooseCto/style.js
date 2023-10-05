import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const ChooseCtoWrapper = styled.div`
  padding: 96px 0 94px;
  h3 {
    letter-spacing: 0.3px;
    margin-bottom: 24px;
  }
  h2 {
    max-width: 550px;
    line-height: 52px;
  }
  p {
    margin-top: 18px;
    max-width: 567px;
    line-height: 32px;
  }
  .service-list {
    margin-top: 24px;
    ul {
      padding-left: 0px;
      li {
        color: ${({ theme }) => theme.colors.textMedium};
        font-size: ${({ theme }) => theme.fonts.baseFontSize};
        padding-bottom: 8px;
        line-height: 24px;
        &:last-child{
          padding-bottom: 0;
          ${media.md`
           padding-bottom: 8px;
          `}
        }
        .hash {
          margin-right: 8px;
        }
      }
    }
  }
`;
export default ChooseCtoWrapper;