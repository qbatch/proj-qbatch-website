import styled from "styled-components";
import { media } from "../../../theme/media-mixins";

const StartProjectWrapper = styled.div`
  padding: 96px 0;
  h2 {
    margin: 1px 0 29px -1px;
  }
  .mt-40 {
    margin-top: 40px;
  }
  .seperation {
    border-top: 1px solid ${({ theme }) => theme.colors.dividerColor};
    margin-top: 16px;
    padding-top: 16px;
    color: ${({ theme }) => theme.colors.bodyLight};
    font-size: ${({ theme }) => theme.fonts.baseFontSizeSm};
    margin-bottom: 16px;
  }
  .testimonials {
    padding-top: 138px;
    h4 {
      margin-bottom: 29px;
    }
  }
  .video-box {
    margin-top: 37px;
    .video-react-control-bar {
      border-top-left-radius: 18px;
      border-top-right-radius: 18px;
    }
    .video-react {
      border-radius: 18px;
    }
  }
`;
export default StartProjectWrapper;